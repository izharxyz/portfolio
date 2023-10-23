"use client";
import React, { useRef, useEffect } from "react";
import { MdCircle } from "react-icons/md";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
    const tect_stack = [
        {
            name: "Rust",
            color: "#e74d00",
        },
        {
            name: "Next.js",
            color: "#FFFFFF",
        },
        {
            name: "GSAP",
            color: "#0AE448",
        },
        {
            name: "Three.js",
            color: "#a29cea",
        },
        {
            name: "Svelte",
            color: "#f23a00",
        },
        {
            name: "Django",
            color: "#44ab76",
        },
        {
            name: "Tauri",
            color: "#FFC131",
        },
    ];

    const comp_ref = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: comp_ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                    markers: true,
                },
            });

            tl.fromTo(
                ".tech-row",
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(600, 400)
                            : gsap.utils.random(-600, -400);
                    },
                },
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(-600, -400)
                            : gsap.utils.random(600, 400);
                    },
                    ease: "power1.inOut",
                }
            );
        }, comp_ref);
        return () => ctx.revert(); // cleanup
    });

    return (
        <section ref={comp_ref}>
            <h2 className="text-7xl md:text-8xl mb-8 font-bold tracking-tighter text-slate-400  mx-auto max-w-7xl h-full w-full">
                I love working with
            </h2>
            {tect_stack.map(({ name, color }, index) => (
                <div
                    key={index}
                    className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
                    aria-label={name}
                >
                    {Array.from({ length: 15 }, (_, index) => (
                        <React.Fragment key={index}>
                            <span
                                className="tech-item text-7xl md:text-8xl font-extrabold uppercase tracking-tighter"
                                style={{
                                    color: index === 7 ? color : "inherit",
                                }}
                            >
                                {name}
                            </span>
                            <span className="text-3xl">
                                <MdCircle />
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </section>
    );
}
