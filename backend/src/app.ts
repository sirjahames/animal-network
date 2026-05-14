import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { timeout } from "hono/timeout";
import { rateLimiter } from "hono-rate-limiter";

import animals from "@/api/animals/animals.route.js";
import health from "@/api/health/health.route.js";
import notFound from "@/middleware/notFound.js";
import errorHandler from "@/middleware/errorHandler.js";

const app = new Hono();

app.use(cors());
app.use(logger());
app.use(timeout(60000));
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, // 15 minutes
        limit: 100, // Limit each client to 100 requests per window
        keyGenerator: (c) => c.req.header("x-forwarded-for") ?? "" // Use IP address as key
    })
);

app.notFound(notFound);
app.onError(errorHandler);

const api = new Hono().basePath("/api");

api.route("/health", health);
api.route("/animals", animals);

app.route("/", api);

export default app;
