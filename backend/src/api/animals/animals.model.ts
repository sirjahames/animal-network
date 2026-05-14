import { prisma } from "@/lib/prisma/prisma.js";
import type { Animal } from "@/types/animal.js";

export async function getAnimals(): Promise<Animal[]> {
    const animals = await prisma.animals.findMany();
    return animals;
}

export async function getAnimalById(id: number) {
    const animal = await prisma.animals.findUnique({
        where: {
            id
        }
    });

    return animal;
}

export async function incrementAnimalLikeById(id: number): Promise<boolean> {
    const animal = await getAnimalById(id);
    if (!animal) return false;

    await prisma.animals.update({
        where: { id },
        data: { likes: animal.likes + 1 }
    });

    return true;
}

export async function decrementAnimalLikeById(id: number): Promise<boolean> {
    const animal = await getAnimalById(id);
    if (!animal) return false;

    await prisma.animals.update({
        where: { id },
        data: { likes: animal.likes - 1 }
    });

    return true;
}
