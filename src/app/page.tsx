"use client";

import {
    Header,
    Hero,
    About,
    Skills,
    Projects,
    BuildSomething,
    Contact,
    Footer,
} from "@/app/components";

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center sm:p-5 md:p-10 lg:p-20 duration-300">
            <div className="flex flex-col min-h-screen w-full items-center justify-center bg-violet-200 border-2 border-black overflow-hidden">
                <Header />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <BuildSomething />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
