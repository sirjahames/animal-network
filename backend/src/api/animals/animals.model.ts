import { prisma } from "@/lib/prisma.js";
import type { Animal } from "@/types/animal.js";

async function getAnimals(): Promise<Animal[]> {
    try {
        const animals = await prisma.animal.findMany();
        return animals;
    } catch (error) {
        throw error;
    }
}

export {
    getAnimals
};