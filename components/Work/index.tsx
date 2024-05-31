import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { CarouselData } from "./CarouselData";

export default function Work() {
    return (
        <section id="work" className="container">
            <div className="w-full max-w-2xl mx-auto h-48 -mt-14 z-30">
                <TextHoverEffect text="WORK" />
            </div>

            <CarouselData />
        </section>
    );
}
