import { LoaderCircle } from "lucide-react";

type LoaderProps = { size: number };

export default function Loader({ size }: LoaderProps) {
    return <LoaderCircle size={size} stroke="#6a7282" className="animate-spin" />;
}