import "dotenv/config";
export const PORT = parseInt(process.env["PORT"]! ?? 8080);
export const DATABASE_URL = process.env["DATABASE_URL"];
