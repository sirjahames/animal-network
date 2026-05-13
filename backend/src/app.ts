import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use(cors());

app.notFound((context) => {
    return context.json({ message: "Not Found" }, 404);
});

app.onError((error, context) => {
    // For any unexpected errors, log and return a generic 500 response
    console.error(error);
    return context.json({ message: "Internal Server Error" }, 500);
});

app.get("/", (context) => {
    console.log("hello world!");
    console.log("request received!");

    return context.json({ message: "hello, world!" });
});

export default app;