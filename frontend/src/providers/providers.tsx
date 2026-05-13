"use client";
import { getQueryClient } from "@/lib/tanstack-query/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

type Props = Readonly<{
    children: React.ReactNode;
}>;

const queryClient = getQueryClient();

export default function Providers({ children }: Props) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
