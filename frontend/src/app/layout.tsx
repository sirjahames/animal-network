import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/providers/providers";

type Props = Readonly<{
    children: React.ReactNode;
}>;

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Animal Network",
    description: "welcome to animal network - a network of animalz!",
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en" className="h-full antialiased">
            <body className={`${inter.className} min-h-full flex flex-col justify-start`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
