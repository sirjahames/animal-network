import { Hono } from "hono";
import { getAnimals } from "./animals.model.js";

const animals = new Hono();

animals.get("/", async (context) => {
    /**
     * Returns all animals found in the database with a limit of 10
     */
    const animals = await getAnimals();
    return context.json({ animals });
});

export default animals;