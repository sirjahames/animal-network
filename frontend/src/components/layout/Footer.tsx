export default function Footer() {
    const currentYear = (new Date()).getFullYear();

    return (
        <footer>
            <div className="flex flex-col gap-2 items-center bg-gray-200 p-2">
                <p className="m-0 font-bold text-lg">Animal Network!</p>
                <p className="m-0 text-gray-600">!long live the chicken league!</p>
                <p className="m-0 text-gray-500 text-sm">&copy; {currentYear} All Catrights Reserved</p>
            </div>
        </footer>
    );
}