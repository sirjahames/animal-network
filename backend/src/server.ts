import { serve } from "@hono/node-server";
import app from "./app.js";
import { port } from "./config/env.js";

const serveOptions = { fetch: app.fetch, port };
const server = serve(serveOptions, (info) => {
    console.log(`Server started!`);
    console.log(`Listening on port http://localhost:${info.port}`);
});

export default server;