"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Shapes from "./Shapes";

export default function Hero() {
    const comp_ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(
                ".hello-animation",
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    delay: 0.1,
                }
            );
            tl.fromTo(
                ".name-animation",
                {
                    x: -100,
                    opacity: 0,
                    rotate: -10,
                },
                {
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)",
                    transformOrigin: "left top",
                    stagger: {
                        each: 0.1,
                        from: "random",
                    },
                }
            );
            tl.fromTo(
                ".title-animation",
                {
                    y: 20,
                    scale: 0.5,
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)",
                    scale: 1,
                    delay: 0.1,
                }
            );
        }, comp_ref);
        return () => ctx.revert();
    }, []);

    const render_letters = (text: string, key: string) => {
        return text.split("").map((letter, index) => (
            <span
                key={index}
                className={`inline-block opacity-0 name-animation name-animation-${key}`}
            >
                {letter}
            </span>
        ));
    };

    return (
        <section
            ref={comp_ref}
            className="px-4 py-10 md:px-6 md:py-14 lg:py-16 h-screen"
        >
            <div className="mx-auto max-w-7xl h-full w-full grid grid-cols-1 lg:grid-cols-2 items-center">
                <div
                    className="col-span-1 mt-20 md:mt-0"
                    aria-label="Mohamed Izhar"
                >
                    <span className="hello-animation text-2xl md:text-3xl text-slate-600 opacity-0">
                        Hello, my name is
                    </span>
                    <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter">
                        <span className="block text-slate-300 text-[clamp(3rem,14vmin,14rem)]">
                            {render_letters("Mohamed", "first")}
                        </span>
                        <span className="-mt-[.2em] block text-slate-500">
                            {render_letters("Izhar", "last")}
                        </span>
                    </h1>
                    <span className="title-animation block text-2xl bg-gradient-to-tr from-purple-300 to-cyan-300 bg-clip-text uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
                        I create expreiences that inspire
                    </span>
                </div>
                <Shapes />
            </div>
        </section>
    );
}
