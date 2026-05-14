import { Hono } from "hono";
import { rateLimiter } from "hono-rate-limiter";
import { getAnimals, decrementAnimalLikeById, incrementAnimalLikeById } from "./animals.model.js";
import { validator } from "hono/validator";
import { schema } from "./animals.schema.js";

const animals = new Hono();

animals.get("/", async (context) => {
    /**
     * Returns all animals found in the database with a limit of 10
     */
    const animals = await getAnimals();
    return context.json({ animals });
});

const likeRateLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 50, // Limit each client to 100 requests per window
    keyGenerator: (c) => c.req.header("x-forwarded-for") ?? "" // Use IP address as key
});

const validateParams = validator("param", (param, context) => {
    const parsed = schema.safeParse(param);
    if (!parsed.success) return context.json({ message: "Invalid input received" }, 401);

    return parsed.data;
});

animals.post("/:id/like", validateParams, likeRateLimiter, async (context) => {
    const { id } = context.req.valid("param");
    const success = await incrementAnimalLikeById(id);

    if (!success) return context.json({ error: `Animal id of ${id} could not be found` }, 404);

    return context.json({ message: "success" }, 201);
});

animals.post("/:id/unlike", validateParams, likeRateLimiter, async (context) => {
    const { id } = context.req.valid("param");
    const success = await decrementAnimalLikeById(id);

    if (!success) return context.json({ error: `Animal id of ${id} could not be found` }, 404);

    return context.json({ message: "success" }, 201);
});

export default animals;
