import TestimonialsClient from "./TestimonialsClient";
import { Testimonial } from "@/types";

export default async function Testimonials() {
    let testimonials: Testimonial[] = [];

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/testimonials/`,
            { cache: "force-cache" }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch testimonials: ${res.status}`);
        }

        testimonials = (await res.json()) || [];
    } catch (error) {
        console.error("Error fetching testimonials:", error);
    }

    return <TestimonialsClient testimonials={testimonials} />;
}
