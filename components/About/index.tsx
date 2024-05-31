import Image from "next/image";

import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import Typewriter from "@/components/ui/TypewriterInfinite";

export default function About() {
    return (
        <section
            id="about"
            className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 overflow-x-hidden md:border-t md:border-b"
        >
            <div className="relative h-[500px] md:h-screen">
                <Image
                    src="/images/glasses.jpg"
                    height={1500}
                    width={1000}
                    alt="about"
                    className="object-cover h-[500px] md:h-screen w-full"
                />
                <div className="absolute inset-0 h-full w-full bg-purple-600/10 z-20" />
            </div>
            <div className="flex flex-col items-start justify-center p-5 py-20 md:p-20">
                <div className="w-full h-48 -mt-14">
                    <TextHoverEffect text="ABOUT" />
                </div>

                <Typewriter
                    textList={["Developer", "Designer", "Problem solver"]}
                    typingSpeed={150}
                    deletingSpeed={100}
                    pauseTime={1500}
                />

                <p className="text-muted-foreground text-lg mt-5">
                    Hello! I&apos;m Mohamed Izhar, a passionate web developer
                    and enthusiast from India. I&apos;m currently pursuing my
                    Bachelor&apos;s degree in Computer Science and Engineering
                    at Ajeenkya DY Patil University, with graduation expected in
                    2025. My technical skills include Django, Svelte, Next.js,
                    and TailwindCSS, and I thrive on creating seamless, engaging
                    digital experiences with a high level of craftsmanship.{" "}
                    <br /> <br />
                    Outside of tech, I&apos;m a big animal lover and have three
                    wonderful cats. I&apos;m passionate about coding, computer
                    science, and continuous learning, and I&apos;m actively
                    seeking job opportunities where I can bring my skills and
                    passion to a collaborative team. If you&apos;re looking for
                    a developer committed to excellence and innovation, feel
                    free to connect with me!
                </p>
            </div>
        </section>
    );
}
