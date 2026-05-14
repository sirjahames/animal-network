import { type Context } from "hono";

function errorHandler(error: Error, context: Context) {
    // For any unexpected errors, log and return a generic 500 response
    console.error(error);
    return context.json({ message: "Internal Server Error" }, 500);
}

export default errorHandler;
