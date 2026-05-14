import { prisma } from "~/src/lib/prisma/prisma.js";
import server from "~/src/server.js";

process.on("SIGINT", () => {
    server.close();
    prisma.$disconnect();
    process.exit(0);
});

process.on("SIGTERM", () => {
    prisma.$disconnect();
    server.close((error) => {
        if (error) {
            console.error(error);
            process.exit(1);
        }

        process.exit(0);
    });
});
