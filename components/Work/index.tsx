import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { CarouselData } from "./CarouselData";
import { project } from "@/types";

export default async function Work() {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/projects/`
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch projects: ${response.statusText}`);
        }

        const projects: project[] = await response.json();

        return (
            <section id="work" className="container">
                <div className="w-full max-w-2xl mx-auto h-48 -mt-14 z-30">
                    <TextHoverEffect text="WORK" />
                </div>

                <CarouselData projects={projects} />
            </section>
        );
    } catch (error) {
        console.error("Error fetching projects:", error);
        return (
            <section id="work" className="container">
                <div className="w-full max-w-2xl mx-auto h-48 -mt-14 z-30">
                    <TextHoverEffect text="WORK" />
                </div>
                <p className="text-red-500">
                    Failed to load projects. Please try again later.
                </p>
            </section>
        );
    }
}
