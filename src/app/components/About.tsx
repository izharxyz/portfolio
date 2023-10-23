"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function About() {
    const comp_ref = useRef(null);
    const titles = [
        "Rustacean",
        "Developer",
        "Designer",
        "Student",
        "Enthusiast",
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const master_tl = gsap.timeline({ repeat: -1, delay: 2 });

            titles.forEach((title) => {
                const tl = gsap.timeline({
                    repeat: 1,
                    repeatDelay: 1,
                    yoyo: true,
                });

                tl.to(".anim-type", {
                    duration: 1.5,
                    text: title,
                });

                master_tl.add(tl, ">");
            });

            gsap.to(".anim-cursor", {
                opacity: 0,
                ease: "power2.inOut",
                repeat: -1,
            });
        }, comp_ref);
        return () => ctx.revert();
    }, []);

    return (
        <section
            className="px-4 py-10 md:px-6 md:py-14 lg:py-16 h-screen mt-20"
            ref={comp_ref}
        >
            <div className="mx-auto max-w-7xl h-full w-full grid grid-cols-1 lg:grid-cols-2">
                <div className="col-span-1">
                    <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-slate-400">
                        About me
                    </h2>
                    <h3>
                        <span className="anim-type inline-block text-5xl bg-gradient-to-tr from-purple-300 to-cyan-300 bg-clip-text tracking-[.2em] text-transparent pb-2">
                            _
                        </span>
                        <span className="anim-cursor inline-block text-5xl bg-gradient-to-tr from-purple-300 to-cyan-300 bg-clip-text tracking-[.2em] text-transparent pb-2">
                            |
                        </span>
                    </h3>
                    <p className="text-xl md:text-2xl text-slate-500 mt-8">
                        I am a student, developer, designer, and a Rustacean. I
                        am currently pursuing my undergraduate degree in
                        Computer Science and Engineering at the Ajeenkya DY
                        Patil University, India. <br />
                        <br />
                        Beyond my studies, I have a strong passion for sharing
                        insights gained in Software Development. I create
                        valuable content for the Dev Community, covering various
                        topics. Explore my blogs
                        <a
                            href="/blog"
                            className="font-semibold cursor-pointer text-slate-400 hover:text-slate-500 pl-2"
                        >
                            here
                        </a>
                        . <br />
                        <br />
                        Connect with me on LinkedIn, where I regularly share
                        insights and engage in discussions. I'm actively seeking
                        internships and remote job opportunities to contribute,
                        learn, and grow. If you have a promising opportunity
                        aligned with my skills, please reach out. I'm eager to
                        collaborate and make a positive impact.
                    </p>
                </div>
            </div>
        </section>
    );
}
