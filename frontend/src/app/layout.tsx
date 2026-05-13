import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

type RootLayoutChildren = Readonly<{
    children: React.ReactNode;
}>;

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Animal Network",
    description: "welcome to animal network - a network of animalz!",
};

export default function RootLayout({ children }: RootLayoutChildren) {
    return (
        <html lang="en" className="h-full antialiased">
            <body className={`${inter.className} min-h-full flex flex-col`}>{children}</body>
        </html>
    );
}
