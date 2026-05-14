import { prisma } from "../src/lib/prisma.js";

async function main() {
    // Create a new sample animal
    const animal = await prisma.animal.create({
        data: {
            name: "Dog",
            legs: 4,
            fact: "Dogs have about 1,700 taste buds and will silently judge your snack choices.",
            likes: 128
        }
    });

    console.log("Created animal:", animal);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
