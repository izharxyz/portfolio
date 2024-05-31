import Image from "next/image";
import { Carousel, Card } from "@/components/ui/CardsCarousel";

export function CarouselData() {
    const cards = data.map((card, index) => (
        <Card key={card.image} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full">
            <h2 className="container text-4xl md:text-5xl font-bold text-purple-600 text-center">
                Dig into my universe
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-zinc-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-zinc-700 dark:text-zinc-200">
                                The first rule of Apple club is that you boast
                                about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and
                            take amazing class notes. Want to convert those
                            notes to text? No problem. Langotiya jeetu ka mara
                            hua yaar is ready to capture every thought.
                        </p>
                        <Image
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Website, Django, Next.js",
        title: "Agavi",
        description: "Freelance, Sep 2024 - Nov 2024",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        detail: <DummyContent />,
    },
    {
        category: "Backend, Admin, Django Rest Framework, Open Source",
        title: "Revvona",
        description: "Freelance, Sep 2024 - Nov 2024",
        image: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        detail: <DummyContent />,
    },
    {
        category: "Website, Next.js, TailwindCSS",
        title: "Arawn Cronnis",
        description: "Freelance, Sep 2024 - Nov 2024",
        image: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        detail: <DummyContent />,
    },
    {
        category: "Website, Django, HTMX, TailwindCSS",
        title: "Neon",
        description: "Personal, Sep 2024 - Nov 2024",
        image: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        detail: <DummyContent />,
    },
    {
        category: "API, Rust, Axum",
        title: "Blogrs",
        description: "Personal, Sep 2024 - Nov 2024",
        image: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        detail: <DummyContent />,
    },
];
