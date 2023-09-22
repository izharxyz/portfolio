"use client";

import Head from "next/head";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import BuildSomething from "./components/BuildSomething";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center sm:p-5 md:p-10 lg:p-20 scroll-smooth duration-300">
            <Head>
                <title>Mohamed Izhar</title>
                <meta name="robots" content="index,follow" />
                <meta name="googlebot" content="index,follow" />
                <meta name="description" content="Mohamed Izhar's portfolio" />
                <meta name="author" content="Mohamed Izhar" />
                <meta
                    name="keywords"
                    content="Mohamed Izhar, Izhar, Mohamed, Mohamed Izhar's portfolio, Izhar's portfolio, Mohamed Izhar's website, Izhar's website, Mohamed Izhar's blog, Izhar's blog, Mohamed Izhar's resume, Izhar's resume, Mohamed Izhar's CV, Izhar's CV, Mohamed Izhar's contact, Izhar's contact, Mohamed Izhar's projects, Izhar's projects, Mohamed Izhar's skills, Izhar's skills, Mohamed Izhar's about, Izhar's about, Mohamed Izhar's home, Izhar's home, Mohamed Izhar's homepage, Izhar's homepage, Mohamed Izhar's landing page, Izhar's landing page, Mohamed Izhar's personal website, Izhar's personal website, Mohamed Izhar's personal blog, Izhar's personal blog, Mohamed Izhar's personal portfolio, Izhar's personal portfolio, Mohamed Izhar's personal resume, Izhar's personal resume, Mohamed Izhar's personal CV, Izhar's personal CV, Mohamed Izhar's personal contact, Izhar's personal contact"
                />
            </Head>
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
