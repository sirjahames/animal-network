import { type Context } from "hono";

function notFound(context: Context) {
    return context.json({ message: "Not Found" }, 404);
}

export default notFound;