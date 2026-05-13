"use client";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

import { getAnimals, incrementAnimalLikes } from "@/services/animalService";
import { colHeaders } from "@/constants/animalTable";
import Loader from "../ui/Loader";

type TableHeadProps = { text: string };
type TableRowProps = { text: string | number; color?: string; children?: React.ReactNode };
type TableLikeRowProps = { id: number };
type LikeButtonProps = { liked: boolean };

function TableHead({ text }: TableHeadProps) {
    return <th className="p-2 border border-gray-300">{text}</th>;
}

function TableRow({ text, color, children }: TableRowProps) {
    return (
        <td className={`p-2 border border-gray-300 text-sm ${color ? color : ""}`}>
            {text} {children}
        </td>
    );
}

function LikeButton({ liked }: LikeButtonProps) {
    return liked ? <Heart size={24} fill="#ee2a2a" stroke="#ee2a2a" /> : <Heart size={24} stroke="#6a7282" />;
}

function TableLikeRow({ id }: TableLikeRowProps) {
    const [liked, setLiked] = useState(false);
    const likeMutation = useMutation({
        mutationFn: incrementAnimalLikes,
        onSuccess: () => {
            setLiked(!liked);
        },
    });

    function handleLike() {
        likeMutation.mutate({ id });
    }

    return (
        <td className="h-full flex flex-col items-center justify-center">
            <button className="bg-transparent border-0 text-center rounded-full" onClick={handleLike}>
                {likeMutation.isPending ? <Loader size={24} /> : <LikeButton liked={liked} />}
            </button>
        </td>
    );
}

export default function AnimalList() {
    const { isLoading, isError, data } = useQuery({
        queryKey: ["request-all-animals"],
        queryFn: getAnimals
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something bad happened, we&apos;re sorry :(</p>;

    return (
        <table className="table-auto border-0 w-full h-full border-collapse">
            <colgroup>
                <col width="20%" />
                <col width="20%" />
                <col width="auto" />
                <col width="15%" />
                <col width="auto" />
            </colgroup>
            <thead>
                <tr className="text-left border-0 bg-amber-200">
                    {colHeaders.map((header) => (
                        <TableHead key={header.toLowerCase()} text={header} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {data?.animals.map((animal) => (
                    <tr key={animal.id}>
                        <TableRow text={animal.name} />
                        <TableRow text={animal.legs} />
                        <TableRow text={animal.fact} color="text-gray-500" />
                        <TableRow text={`❤️${animal.likes}`} />
                        <TableLikeRow id={animal.id} />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
