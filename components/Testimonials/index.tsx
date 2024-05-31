"use client";

import { useEffect, useRef, useState } from "react";
import HorizontalLine from "@/components/ui/HorizontalLine";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import { ShootingStars } from "@/components/ui/ShootingStars";
import { StarsBackground } from "@/components/ui/StarsBackground";

export function Testimonials() {
    const cardContainerRef = useRef<HTMLDivElement | null>(null);
    const [spacerHeight, setSpacerHeight] = useState(0);

    useEffect(() => {
        if (cardContainerRef.current) {
            setSpacerHeight(cardContainerRef.current.offsetHeight);
        }
    }, []);

    return (
        <section id="stories" className="my-16 md:my-32 w-full relative">
            <HorizontalLine />
            <div className="pt-16 md:pt-32">
                <div className="w-full max-w-2xl mx-auto h-48 -mt-14 z-40" />
            </div>
            <h2 className="container text-4xl md:text-5xl font-bold text-purple-600 text-center mb-4">
                Trusted by the kindest customers
            </h2>
            <p className="text-muted-foreground text-sm md:text-base text-center mb-10">
                Here&apos;s a glimpse into the heartfelt experiences of our
                incredible customers. Your trust fuels our passion.
            </p>
            {/* Card container with ref */}
            <div
                ref={cardContainerRef}
                className="h-fit pb-16 md:pb-32 rounded-md flex flex-col antialiased items-center justify-center overflow-hidden w-screen absolute left-0"
            >
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            {/* Spacer div with dynamic height */}
            <div style={{ height: spacerHeight }} />
            <HorizontalLine />
            <ShootingStars />
            <StarsBackground />
            <div className="absolute top-16 md:top-32 w-full">
                <div className="w-full max-w-2xl mx-auto h-48 -mt-14 z-40">
                    <TextHoverEffect text="STORIES" />
                </div>
            </div>
        </section>
    );
}

const testimonials = [
    {
        quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        avatar: "/images/web4.jpeg",
    },
    {
        quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        avatar: "/images/web4.jpeg",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        avatar: "/images/web4.jpeg",
    },
    {
        quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        avatar: "/images/web4.jpeg",
    },
    {
        quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        avatar: "/images/web4.jpeg",
    },
];
