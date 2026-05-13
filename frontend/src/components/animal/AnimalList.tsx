import { Animal } from "@/types/animal";

export default function AnimalList({ animals }: { animals: Animal[] }) {
    return (
        <table className="border border-gray-300 w-full h-full border-collapse">
            <thead>
                <tr className="text-left border border-gray-300 bg-amber-200">
                    <th className="p-2">Name</th>
                    <th className="p-2">Leg Count</th>
                    <th className="p-2">Fun Fact</th>
                    <th className="p-2">Likes</th>
                </tr>
            </thead>
            <tbody>
                {animals.map((animal) => (
                    <tr key={animal.id}>
                        <td className="p-2 border border-gray-300">{animal.name}</td>
                        <td className="p-2 border border-gray-300">{animal.legs}</td>
                        <td className="p-2 border border-gray-300 text-gray-500">{animal.fact}</td>
                        <td className="p-2 border border-gray-300">{animal.likes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}