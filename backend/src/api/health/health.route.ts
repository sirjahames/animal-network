import { Hono } from "hono";

const health = new Hono();

health.get("/", async (context) => {
    return context.json({
        message: "alive",
        status: 200
    }, 200);
});

export default health;
