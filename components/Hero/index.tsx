"use client";
import React from "react";

import { useAnimate } from "framer-motion";

import { SparklesCore } from "@/components/ui/Sparkles";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";

export default function Hero() {
    const greeting = `Hello, my name is Mohamed Izhar`;
    const words = [
        {
            text: "I",
            className: "text-5xl md:text-6xl lg:text-7xl font-bold z-20",
        },
        {
            text: "create",
            className: "text-5xl md:text-6xl lg:text-7xl font-bold z-20",
        },
        {
            text: "digital",
            className:
                "text-5xl md:text-6xl lg:text-7xl font-bold text-purple-600 z-20",
        },
        {
            text: "experiences",
            className:
                "text-5xl md:text-6xl lg:text-7xl font-bold text-purple-600 z-20",
        },
        {
            text: "that",
            className: "text-5xl md:text-6xl lg:text-7xl font-bold z-20",
        },
        {
            text: "inspire",
            className: "text-5xl md:text-6xl lg:text-7xl font-bold z-20",
        },
    ];

    // const [scope, animate] = useAnimate();

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         animate(
    //             "li",
    //             {
    //                 opacity: 1,
    //                 y: 0,
    //             },
    //             {
    //                 duration: 1,
    //                 delay: stagger(0.5),
    //             }
    //         );
    //     }, 2 * 1000);

    //     return () => clearTimeout(timeout);
    // }, [scope.current]);

    return (
        <section className="h-screen w-full px-4 relative flex flex-col items-center justify-center overflow-hidden text-pur">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.8}
                    particleDensity={50}
                    className="w-full h-full"
                    particleColor="#9333ea"
                />
            </div>
            <div className="text-center relative z-20 flex flex-col items-center justify-center select-none">
                <TextGenerateEffect
                    words={greeting}
                    className="mb-6 text-lg md:text-xl lg:text-2xl text-muted-foreground font-normal"
                />

                <div className="max-w-6xl mb-16">
                    <TypewriterEffect words={words} />
                </div>

                {/* {Array.isArray(links) && links.length > 0 && (
          <ul ref={scope} className="flex flex-col md:flex-row gap-4 relative">
            {links.map(({ link }, i) => {
              return (
                <li key={i} className="opacity-0">
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )} */}
            </div>
        </section>
    );
}
