import AnimalList from "@/components/animal/AnimalList";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
    return (
        <>
            <div className="flex-1">
                <Header />
                <main className="p-4 w-[60%]">
                    <section>
                        <h1 className="m-0 text-xl">Welcome to Animal Network!</h1>
                        <div>
                            <p className="text-gray-600">
                                this website is a simple one displaying various animals and how much people like them!
                            </p>
                            <div className="border rounded-lg border-gray-300 bg-gray-200 p-3 w-fit">
                                <p className="m-0 text-sm text-gray-600">
                                    that is really all, i am really sorry if you thought this was a social media
                                    network for animals :(
                                </p>
                            </div>
                        </div>

                        <section>
                            <h2 className="mb-3">Animal List!</h2>
                            <AnimalList />
                        </section>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
