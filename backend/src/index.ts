import server from "./server.js";

process.on("SIGINT", () => {
    server.close();
    process.exit(0);
});

process.on("SIGTERM", () => {
    server.close((error) => {
        if (error) {
            console.error(error);
            process.exit(1);
        }

        console.log(`Server closed successfully!`);
        process.exit(0);
    });
});
