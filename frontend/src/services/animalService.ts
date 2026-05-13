import { Animal } from "@/types/animal";

async function getAnimals(): Promise<{ animals: Animal[] }> {
    const url = "http://localhost:8080/api/animals";
    const response = await fetch(url);

    if (!response.ok) throw new Error("Unable to fetch animal data...");

    return response.json();
}

async function incrementAnimalLikes({ id }: { id: number }) {
    const url = `http://localhost:8080/api/animals/${id}/like`;
    const response = await fetch(url, {
        method: "POST"
    });

    if (!response.ok) throw new Error("Unable to update animal data...");
}

async function decrementAnimalLikes({ id }: { id: number }) {
    const url = `http://localhost:8080/api/animals/${id}/unlike`;
    const response = await fetch(url, {
        method: "POST"
    });

    if (!response.ok) throw new Error("Unable to update animal data...");
}

export { getAnimals, incrementAnimalLikes, decrementAnimalLikes };
