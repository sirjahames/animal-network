import { prisma } from "@/lib/prisma/prisma.js";
import type { Animal } from "@/types/animal.js";

async function getAnimals(): Promise<Animal[]> {
    const animals = await prisma.animal.findMany();
    return animals;
}

export {
    getAnimals
};