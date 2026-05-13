import { Animal } from "@/types/animal";

async function getAnimals(): Promise<{ animals: Animal[] }> {
    const url = "http://localhost:8080/api/animals";
    const response = await fetch(url);

    console.log(response);
    if (!response.ok) throw new Error("Unable to fetch animal data...");

    return response.json();
}

export {
    getAnimals
};