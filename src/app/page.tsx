"use client";
import useDownloader from "react-use-downloader";

import Contact from "./components/Contact";

export default function Home() {
    const { download } = useDownloader();

    const fileUrl = "/media/resume-izhar.pdf";
    const filename = "resume-izhar.pdf";

    return (
        <main className="flex min-h-screen items-center justify-center sm:p-5 md:p-10 lg:p-20 scroll-smooth duration-300">
            <div className="flex flex-col min-h-screen w-full items-center justify-center bg-violet-200 border-2 border-black overflow-hidden">
                {/* navbar */}
                <div className="w-full border-b-2 border-black flex">
                    <div className="w-full h-28 mx-5 md:mx-10 lg:mx-20 border-x-2 border-black  flex items-center justify-between p-5 md:p-10">
                        <div className="lg:hidden">{/* mobile nav */}</div>
                        <a
                            href="#projects"
                            className="text-xl md:text-2xl hidden lg:flex gap-2"
                        >
                            MY WORK
                        </a>

                        <div className="hidden lg:flex flex-row items-center font-bold text-xl md:text-2xl gap-1">
                            <h1>Mohamed</h1>
                            <div className="rounded-3xl w-12 h-6 bg-violet-500"></div>
                            <h1>Izhar</h1>
                        </div>

                        <div className="flex items-center justify-center">
                            <a
                                href="#hire-me"
                                className="bg-rose-400 p-5 sm:px-10 py-2 text-xl md:text-2xl border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] flex w-fit overflow-visible"
                            >
                                <p className="flex-nowrap text-ellipsis min-w-max">
                                    LET'S TALK
                                </p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Herp section */}
                <div className="w-full p-5 md:p-10 lg:p-20">
                    <div className="grid grid-cols-2 w-full border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                        <div className="text-left w-full bg-rose-300 p-5 md:p-10 overflow-visible z-10">
                            <p className="text-xl md:text-2xl text-clip">
                                Hello! I'm Mohamed Izhar.
                            </p>
                            <h1 className="font-semibold text-4xl sm:text-7xl md:text-8xl mb-5 md:mb-10 lg:mb-20">
                                I create <br />
                                digital experiences <br />
                                <span className="font-stroke-sm sm:font-stroke">
                                    that inspire.
                                </span>
                            </h1>
                            <a
                                href="#"
                                className="bg-teal-400 p-5 sm:px-10 py-2 text-xl md:text-2xl border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] flex w-fit overflow-visible"
                            >
                                <p className="flex-nowrap text-ellipsis min-w-max">
                                    CONTACT ME
                                </p>
                            </a>
                        </div>
                        <div className="w-full bg-rose-300 relative">
                            <div className="absolute -left-5 top-10 h-32 md:h-48 w-10 bg-purple-500"></div>
                            <div className="absolute bottom-20 left-20 h-48 w-48 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px] z-10"></div>
                            <div className="absolute bottom-10 left-64 h-28 w-64 bg-teal-400"></div>
                            <div className="absolute top-5 right-8 md:right-28 lg:right-48 text-violet-100">
                                <svg
                                    className="w-32 h-32 md:h-48 md:w-48"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m17 1.208l1.32 2.473L20.792 5L18.32 6.319L17.002 8.79L15.68 6.32L13.208 5l2.473-1.318L17 1.208ZM8 4.333l2.667 5l5 2.667l-5 2.666l-2.666 5l-2.667-5l-5-2.666l5-2.667l2.667-5Zm11.667 12l-1.666-3.125l-1.667 3.125L13.209 18l3.125 1.666l1.667 3.125l1.666-3.125L22.792 18l-3.125-1.667Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 md:px-10 lg:px-20">
                    <div className="font-bold text-4xl sm:text-7xl md:text-8xl w-fit relative z-20">
                        <span className="font-stroke-sm sm:font-stroke">
                            About
                        </span>
                        me
                        <div className="absolute -right-10 -bottom-2 md:-bottom-5 bg-teal-400 h-8 sm:h-14 md:h-20 w-48 sm:w-72 md:w-96 -z-10"></div>
                    </div>
                </div>

                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20">
                    <div className="border-2 border-black w-full p-5 md:p-10 text-xl md:text-2xl bg-teal-400 shadow-[10px_10px_0px_rgba(0,0,0,1)] relative">
                        I am a passionate student based in India, currently
                        pursuing a Bachelor's degree in Computer Science at
                        Ajeenkya DY Patil University. My academic focus includes
                        Mobile Development, UX Design, Web Development, and
                        Security. <br /> <br />
                        In addition to my studies, I have a strong inclination
                        towards sharing knowledge and experiences gained
                        throughout my journey in Software Development. I create
                        valuable content to help fellow members of the Dev
                        Community on various topics. You can explore my blogs
                        <a
                            href="https://poeticcode.xyz"
                            className="text-blue-600 underline"
                        >
                            here
                        </a>
                        . <br /> <br />
                        I welcome connections and followers on my LinkedIn
                        profile, where I regularly share insights and engage in
                        discussions. <br /> <br />I am actively seeking
                        internships and remote job opportunities where I can
                        contribute, learn, and grow. If you have a promising
                        opportunity that aligns with my skills and experiences,
                        please don't hesitate to reach out. I am eager to
                        collaborate and make a positive impact.
                        <div className="absolute -top-24 md:-top-36 -right-5 md:-right-20 text-rose-400">
                            <svg
                                className="h-32 w-32 md:h-48 md:w-48"
                                xmlns="http://www.w3.org/2000/svg"
                                width="256"
                                height="256"
                                viewBox="0 0 256 256"
                            >
                                <path
                                    fill="currentColor"
                                    d="M208 144a15.78 15.78 0 0 1-10.42 14.94l-51.65 19l-19 51.61a15.92 15.92 0 0 1-29.88 0L78 178l-51.62-19a15.92 15.92 0 0 1 0-29.88l51.65-19l19-51.61a15.92 15.92 0 0 1 29.88 0l19 51.65l51.61 19A15.78 15.78 0 0 1 208 144Zm-56-96h16v16a8 8 0 0 0 16 0V48h16a8 8 0 0 0 0-16h-16V16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16Zm88 32h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16Z"
                                />
                            </svg>
                        </div>
                        <div className="w-full flex items-center justify-center mt-5 md:mt-10">
                            <button
                                onClick={() => download(fileUrl, filename)}
                                className="bg-rose-400 p-5 sm:px-10 py-2 text-xl md:text-2xl border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] relative"
                            >
                                DOWNLOAD MY RESUME
                                <div className="absolute -top-10 -right-16">
                                    <svg
                                        className="w-20 h-20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        viewBox="0 0 64 64"
                                    >
                                        <path
                                            fill="#ffe54d"
                                            d="M22 0c0 16.9-9.1 32-22 32c12.9 0 22 15.1 22 32c0-16.9 9.1-32 22-32c-12.9 0-22-15.1-22-32"
                                        />
                                        <path
                                            fill="#6adbc6"
                                            d="M53 0c0 8.4-4.6 16-11 16c6.4 0 11 7.6 11 16c0-8.4 4.6-16 11-16c-6.4 0-11-7.6-11-16"
                                        />
                                        <path
                                            fill="#ff73c0"
                                            d="M48 32c0 8.4-4.6 16-11 16c6.4 0 11 7.6 11 16c0-8.4 4.6-16 11-16c-6.4 0-11-7.6-11-16"
                                        />
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="w-full flex items-center justify-center mt-5 md:mt-10 sm:border-2 border-black p-5 md:p-10">
                            {/* social links */}
                            <div
                                className="flex gap-5 md:gap-10 lg:gap-20"
                                id="social"
                            >
                                {/* Linkedin */}
                                <a
                                    href="https://www.linkedin.com/in/mohamed-izhar-670128227"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black p-2 md:p-5 bg-blue-300 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300"
                                >
                                    <svg
                                        className="w-6 h-6 md:w-10 md:h-10"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"
                                        />
                                    </svg>
                                </a>
                                {/* Github */}
                                <a
                                    href="https://github.com/zzedddd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black p-2 md:p-5 bg-gray-200 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300"
                                >
                                    <svg
                                        className="w-6 h-6 md:w-10 md:h-10"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <g fill="none">
                                            <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                                            <path
                                                fill="currentColor"
                                                d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581a9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"
                                            />
                                        </g>
                                    </svg>
                                </a>
                                {/* Twitter */}
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black p-2 md:p-5 bg-blue-400 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300"
                                >
                                    <svg
                                        className="w-6 h-6 md:w-10 md:h-10"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M22 5.8a8.49 8.49 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.21 8.21 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a3.93 3.93 0 0 1-1.1.17a4.9 4.9 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z"
                                        />
                                    </svg>
                                </a>
                                {/* Leetcode */}
                                <a
                                    href="https://leetcode.com/zzedddd/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black p-2 md:p-5 bg-orange-300 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300"
                                >
                                    <svg
                                        className="w-6 h-6 md:w-10 md:h-10"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20">
                    <div className="font-bold text-4xl sm:text-7xl md:text-8xl w-fit relative z-20">
                        My
                        <span className="font-stroke-sm sm:font-stroke">
                            Skills
                        </span>
                        <div className="absolute -right-10 -bottom-2 md:-bottom-5 bg-orange-300 h-8 sm:h-14 md:h-20 w-48 sm:w-72 md:w-96 -z-10"></div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20 relative z-10">
                    {/* grid svg image */}
                    <div className=" absolute -top-20 md:-top-32 right-5 md:right-10 lg:right-80 text-black -z-10">
                        <svg
                            className="w-32 h-32 md:h-48 md:w-48"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M8 20v-4H4v-2h4v-4H4V8h4V4h2v4h4V4h2v4h4v2h-4v4h4v2h-4v4h-2v-4h-4v4H8Zm2-6h4v-4h-4v4Z"
                            />
                        </svg>
                    </div>

                    <div className="border-2 border-black w-full text-xl md:text-2xl bg-orange-300 shadow-[10px_10px_0px_rgba(0,0,0,1)] grid grid-cols-1 xl:grid-cols-2 h-fit">
                        {/* left side of skills section */}
                        <div className="w-full h-full flex flex-col gap-5 md:gap-10 items-center justify-center p-5 md:p-10">
                            <h2 className="text-2xl sm:text-3xl font-semibold flex gap-2">
                                <span className="hidden md:block">
                                    Programming
                                </span>
                                Languages
                            </h2>
                            <div className="w-full h-full flex items-center justify-center gap-10">
                                <div className="w-1/4 text-left md:text-right flex flex-col gap-3 md:gap-4 font-normal md:font-medium uppercase">
                                    <div className="relative z-10">
                                        Rust
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 md:w-20 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10">
                                        Python
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 md:w-24 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10">
                                        <span className="md:hidden">JS</span>
                                        <span className="hidden md:block">
                                            JAVASCRIPT
                                        </span>
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 md:w-32 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10">
                                        Kotlin
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 md:w-20 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10">
                                        Bash
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 md:w-24 bg-rose-300"></div>
                                    </div>
                                </div>
                                <div className="w-3/4 flex flex-col gap-5">
                                    <div className="h-5 md:h-7 w-full bg-transparent rounded-full border-2 border-black">
                                        <div className="w-3/5 h-full bg-indigo-300 rounded-l-full"></div>
                                    </div>
                                    <div className="h-5 md:h-7 w-full bg-transparent rounded-full border-2 border-black">
                                        <div className="w-4/5 h-full bg-indigo-300 rounded-l-full"></div>
                                    </div>
                                    <div className="h-5 md:h-7 w-full bg-transparent rounded-full border-2 border-black">
                                        <div className="w-4/6 h-full bg-indigo-300 rounded-l-full"></div>
                                    </div>
                                    <div className="h-5 md:h-7 w-full bg-transparent rounded-full border-2 border-black">
                                        <div className="w-2/5 h-full bg-indigo-300 rounded-l-full"></div>
                                    </div>
                                    <div className="h-5 md:h-7 w-full bg-transparent rounded-full border-2 border-black">
                                        <div className="w-4/6 h-full bg-indigo-300 rounded-l-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right side of skills section */}
                        <div className="w-full h-full flex flex-col gap-5 md:gap-10 items-center justify-center p-5 md:p-10 bg-indigo-300">
                            <h2 className="text-2xl sm:text-3xl font-semibold">
                                Technologies
                            </h2>
                            <div className="w-full h-full flex items-center justify-center gap-10">
                                <div className="w-1/4 text-left md:text-right flex flex-col gap-3 md:gap-4 font-normal md:font-medium uppercase">
                                    <div className="relative z-10">
                                        Svelte
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 md:w-24 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10">
                                        Django
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 md:w-24 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10">
                                        <span className="md:hidden">
                                            Tailwind
                                        </span>
                                        <span className="hidden md:block">
                                            TailwindCSS
                                        </span>
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 md:w-32 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10">
                                        Nextjs
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 md:w-20 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10">
                                        Flutter
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 md:w-28 bg-rose-300"></div>
                                    </div>
                                </div>
                                <div className="w-3/4 flex flex-col gap-5">
                                    <div className="h-5 md:h-7 w-full bg-transparent rounded-full border-2 border-black">
                                        <div className="w-3/5 h-full bg-orange-300 rounded-l-full"></div>
                                    </div>
                                    <div className="h-5 md:h-7 w-full bg-transparent rounded-full border-2 border-black">
                                        <div className="w-5/6 h-full bg-orange-300 rounded-l-full"></div>
                                    </div>
                                    <div className="h-5 md:h-7 w-full bg-transparent rounded-full border-2 border-black">
                                        <div className="w-11/12 h-full bg-orange-300 rounded-l-full"></div>
                                    </div>
                                    <div className="h-5 md:h-7 w-full bg-transparent rounded-full border-2 border-black">
                                        <div className="w-2/5 h-full bg-orange-300 rounded-l-full"></div>
                                    </div>
                                    <div className="h-5 md:h-7 w-full bg-transparent rounded-full border-2 border-black">
                                        <div className="w-2/6 h-full bg-orange-300 rounded-l-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of right side of skills section */}
                    </div>
                </div>
                {/* End of Skills section */}

                {/* Start of Projects section */}
                <div
                    id="projects"
                    className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20"
                >
                    <div className="font-bold text-4xl sm:text-7xl md:text-8xl w-fit relative z-20">
                        My
                        <span className="font-stroke-sm sm:font-stroke">
                            Projects
                        </span>
                        <div className="absolute -right-10 -bottom-2 md:-bottom-5 bg-rose-300 h-8 sm:h-14 md:h-20 w-56 sm:w-96 md:w-[33rem] -z-10"></div>
                    </div>
                </div>

                {/* Start of first project */}
                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20 relative z-10">
                    <div className="border-2 pr-10 md:pr-20 border-black w-full text-xl md:text-2xl bg-rose-300 shadow-[10px_10px_0px_rgba(0,0,0,1)] h-fit">
                        <div className="m-5 md:m-10 mr-10 w-full border-2 border-black">
                            <img
                                src="images/project1.svg"
                                alt="project1"
                                className="w-full h-96 object-cover bg-violet-100"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20">
                    <div className="font-bold text-4xl sm:text-6xl lg:text-7xl relative z-20 w-full text-center">
                        <span className=" text-violet-500">1.</span>Poeticcode
                        <span className="font-stroke-sm sm:font-stroke">
                            .xyz
                        </span>
                    </div>
                    <p className="text-xl md:text-2xl text-center">
                        Dive into Immersive World of Reading Where Bytes and
                        Brilliance Unite
                    </p>
                    <div className="w-full flex flex-col items-center justify-center mt-5 md:mt-10 border-2 border-black p-5 md:p-10">
                        <h3 className="text-2xl font-semibold">
                            Tools utilised
                        </h3>
                        <div className="flex gap-5 md:gap-10 lg:gap-20 mt-5 md:mt-10">
                            {/* Django logo */}
                            <div className="text-black p-2 md:p-5 bg-green-400 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300 flex item-center justify-center">
                                <svg
                                    className="w-6 h-6 md:w-10 md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M15.172 0h-4.176v5.932a7.21 7.21 0 0 0-1.816-.2C4.816 5.731 2 8.305 2 12.273c0 4.118 2.655 6.263 7.755 6.268c1.703 0 3.278-.15 5.417-.53V0ZM9.734 8.977c.516 0 .92.05 1.408.2v6.248c-.596.075-.972.1-1.434.1c-2.14 0-3.305-1.142-3.305-3.21c0-2.125 1.22-3.338 3.331-3.338Z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M22 15.233V6.215h-4.17v7.675c0 3.387-.188 4.674-.785 5.786c-.57 1.087-1.462 1.8-3.305 2.606L17.615 24c1.843-.862 2.735-1.643 3.412-2.88c.726-1.288.973-2.782.973-5.887ZM21.584 0H17.41v3.993h4.175V0Z"
                                    />
                                </svg>
                            </div>

                            {/* tailwind logo */}
                            <div className="text-black p-2 md:p-5 bg-blue-400 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300 flex item-center justify-center">
                                <svg
                                    className="w-6 h-6 md:w-10 md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z"
                                    />
                                </svg>
                            </div>

                            {/* HTML logo */}
                            <div className="text-black p-2 md:p-5 bg-red-400 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300 flex item-center justify-center">
                                <svg
                                    className="w-6 h-6 md:w-10 md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M.946 0L2.23 14.4L7.992 16l5.777-1.602L15.055 0H.947zm11.722 13.482l-4.644 1.287v.007l-.012-.004l-.012.004v-.007l-4.644-1.287L2.258 1.178h11.508l-1.098 12.304zm-2.5-5.198l-.204 2.29l-1.972.532l-1.967-.53l-.126-1.41H4.126l.247 2.774l3.626 1.003l3.615-1.003l.485-5.422H5.662l-.161-1.809h6.758l.158-1.766H3.57l.477 5.341z"
                                    />
                                </svg>
                            </div>

                            {/* Javascript logo */}
                            <div className="text-black p-2 md:p-5 bg-yellow-400 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300 flex item-center justify-center">
                                <svg
                                    className="w-6 h-6 md:w-10 md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M8.5 7.5A1.5 1.5 0 0 1 10 6h1.5a.5.5 0 0 1 0 1H10a.5.5 0 0 0-.5.5V8a.5.5 0 0 0 .5.5h.5A1.5 1.5 0 0 1 12 10v.5a1.5 1.5 0 0 1-1.5 1.5H9a.5.5 0 0 1 0-1h1.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5H10A1.5 1.5 0 0 1 8.5 8v-.5Zm-.5-1a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0 0 1h1A1.5 1.5 0 0 0 8 10.5v-4Zm-6-2A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7ZM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7Z"
                                    />
                                </svg>
                            </div>

                            {/* GSAP logo */}
                            <div className="text-black p-2 md:p-5 bg-green-600 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300 flex item-center justify-center">
                                <svg
                                    className="w-6 h-6 md:w-10 md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M17.964 31.932c-.417-.073-.849-.271-1.094-.49a.964.964 0 0 1-.266-.646c0-.245.125-.589.323-.932c.12-.193.214-.401.281-.62c.042-.151.13-.396.198-.552l.12-.286l.031-1.911c.016-1.057.047-2.036.073-2.188c.068-.438.182-.865.333-1.281l.115-.276l-.167-.099c-.151-.094-.276-.224-.771-.813c-.609-.719-1.411-1.115-2.547-1.25c-.37-.036-.745-.063-1.12-.078c-1.667-.078-2.62-.427-3.479-1.271c-.641-.63-.974-1.365-1.109-2.448c-.182-1.464-.385-2.214-.76-2.823a2.793 2.793 0 0 0-.318-.422l-.151-.151l-.333.214c-.182.12-.438.271-.563.339c-.417.229-.813.484-1.193.76c-.932.677-1.948 1.526-2.505 2.083c-.25.25-.38.359-.438.349c-.38-.057-.089-1.703.531-2.943c.792-1.599 2.125-3.073 3.667-4.068c1.266-.818 3.313-1.943 4.26-2.339c1.682-.703 3.859-1.464 5.349-1.87c.313-.089.505-.167.635-.255c.292-.203.578-.302.906-.307c.276-.005.302-.01.568-.188c.313-.203.406-.214.719-.104l.203.073l.25-.172l.25-.167l.359.005c.276.005.401-.005.521-.057c.151-.068.156-.078.198-.328c.094-.542.104-.813.047-1.141c-.073-.432-.083-2.109-.01-2.438c.078-.354.13-.427.396-.557c.396-.193.693-.25 1.375-.25c.833 0 1.255.115 1.568.417c.281.271.328.906.182 2.396c-.089.859-.099 1.099-.073 1.661c.01.359.036.698.047.745c.021.089.042.094.344.099c.297.005.349.021.63.167c.271.141.474.313.516.438c.005.026.052.026.135 0c.161-.047.302.005.417.146c.068.089.109.104.266.104c.214 0 .292.052.469.313a.78.78 0 0 0 .328.266c.292.146.688.552.839.875c.234.479.281 1.036.135 1.536c-.052.188-.052.193.057.375c.229.391.313.87.219 1.276l-.052.24l.156.156c.776.776.661 2.042-.286 3.172a2.01 2.01 0 0 0-.266.422c-.182.484-.391.823-.661 1.104l-.276.281h-.281c-.281 0-.677-.094-.917-.219c-.099-.052-.104-.052-.083.01c.063.229.219 1.161.271 1.677c.083.792.057 1.943-.052 2.438a3.805 3.805 0 0 1-.396 1.047c-.104.167-.109.203-.089.406c.031.286-.036.766-.151 1.083c-.141.37-.193.542-.224.729c-.026.161-.026.161.089.161c.151 0 .234.089.234.266c0 .078-.068.5-.151.932c-.229 1.214-.245 1.349-.245 2.526c-.005 1.214-.005 1.203.271 1.385l.62.401a8.616 8.616 0 0 0 1.703.875c.87.344.99.432.99.724c0 .13-.026.177-.135.281c-.333.323-.99.396-2.313.255a22.717 22.717 0 0 0-2.068-.099c-1.823-.026-2.089-.089-2.328-.542c-.135-.26-.109-.599.078-1.156c.083-.245.156-.495.219-.75c.125-.604.042-1.323-.25-2.135l-.25-.693c-.245-.703-.38-1.99-.234-2.281c.026-.057.073-.068.198-.063l.156.016l.13-.271c.099-.214.208-.354.505-.651l.38-.38l-.021-.245c-.016-.234-.323-1.37-.365-1.365c-.016 0-.099.115-.193.26c-.229.344-.734.875-1.021 1.068c-.125.083-.229.182-.229.214c-.005.141-.125.417-.271.609c-.141.188-.151.219-.13.385c.036.245-.042 1.031-.135 1.443a4.67 4.67 0 0 1-.344.885c-.359.745-.63 1.411-.698 1.719a7.563 7.563 0 0 0-.094.896c-.016.354-.052.698-.078.771c-.036.099-.036.177-.005.328c.026.109.042.354.036.547c-.005.266.016.438.094.75c.135.531.161.865.099 1.063c-.042.125-.083.172-.224.24c-.313.161-1.198.25-1.677.167zm1.265-.427c.182-.052.339-.208.339-.349c0-.063-.052-.245-.115-.406c-.125-.307-.339-1.12-.339-1.255c0-.068.005-.073.109-.016l.115.063v-.146a2.08 2.08 0 0 0-.089-.396c-.099-.297-.109-.302-.74-.339l-.427-.021l-.156.151a1.581 1.581 0 0 0-.224.292c-.068.135-.094.339-.052.385c.01.016.115 0 .229-.026a.897.897 0 0 1 .208-.036c0 .005-.115.099-.26.198c-.625.469-.844.755-.844 1.12c0 .38.359.677.922.766c.385.057 1.135.073 1.323.016zm8.474-.62c.156-.188.135-.38-.063-.599c-.115-.115-.245-.214-.391-.292s-.292-.167-.438-.26a11.063 11.063 0 0 0-.813-.479c-.24-.13-.474-.266-.703-.411l-.094-.073v-1.432c0-1.411-.005-1.432-.078-1.411c-.365.099-.969.146-1.734.13l-.828-.01l.12.292c.224.552.339 1.292.339 2.141c0 .318-.021.432-.099.656c-.042.109-.078.219-.115.328c-.016.047.042.083.255.146c.156.047.385.094.516.109l.24.026l-.026.24c-.026.271.005.557.073.646c.042.052.198.073.922.104c.547.026 1.141.083 1.609.151c.406.063.844.115.974.115c.219.005.24-.005.333-.115zm-8.338-2.437c.021-.016.052-.297.063-.63c.042-.932.078-1.068.547-2.12c.385-.859.589-1.661.573-2.229l-.01-.339l-.146.141c-.302.302-.094-.172.266-.594c.271-.323.365-.5.406-.786c.021-.115.063-.172.24-.307a4.481 4.481 0 0 0 1.474-1.948c.073-.188.26-.828.417-1.422c.292-1.099.448-1.573.589-1.776c.052-.078.073-.094.063-.042a7.41 7.41 0 0 0-.177.849c-.042.255-.12.755-.172 1.104c-.099.714-.203 1.172-.344 1.526l-.094.24l.25.646c.26.661.38 1.141.401 1.604l.016.26l-.203.042a1.051 1.051 0 0 0-.667.417c-.177.255-.276.464-.229.51c.021.021.276.068.568.104c.453.052.625.052 1.224.016c.26-.01.516-.036.771-.073c.057-.021.115-.135.208-.432c.214-.682.255-.922.229-1.401l-.021-.422l.109-.141c.255-.323.453-.906.536-1.589c.099-.833-.083-2.578-.422-4.078c-.161-.714-.229-1.141-.229-1.453v-.276l-.255.026c-.917.099-2.026.073-2.703-.068c-.37-.073-1.302-.349-1.505-.438l-.161-.073l-.021.182c-.016.099-.031.198-.052.302c-.031.109-.021.135.172.323c.24.245.313.37.313.536c0 .104-.057.188-.349.49a4.367 4.367 0 0 1-.693.599l-.339.229l-.146.505c-.521 1.849-.62 3.531-.276 4.734l.083.302l-.167.208c-.625.786-.995 1.385-1.052 1.719a8.22 8.22 0 0 1-.115.49c-.135.516-.24 1.271-.286 2.089a54.34 54.34 0 0 1-.135 2.052l-.026.203l.26.078c.146.047.365.099.49.12c.234.036.667.026.734-.01zm5.057-2.865c.406-.026.776-.089.849-.151c.031-.021.068-.13.078-.24l.026-.198l-.323.073c-.255.052-.51.083-.766.104c-.615.026-1.234.01-1.844-.052c-.203-.031-.203-.031-.141.234c.052.198.063.208.594.245c.354.031.849.026 1.526-.016zm-.339-.906c.531-.047 1.193-.161 1.323-.229c.042-.021.078-.099.094-.188l.047-.276l.026-.13l-.13.026c-.578.12-1.016.156-1.891.156c-.854 0-.953-.005-1.177-.083a.82.82 0 0 0-.271-.063c-.036.021-.042.318-.01.526c.021.125.042.146.167.182c.396.109 1.063.135 1.823.073zm-9.666-4.698c1.333-.385 3.078-1.516 4.505-2.932c.464-.464.521-.526.583-.734l.083-.266c.01-.021-.073-.057-.182-.083c-.286-.068-.505-.234-.505-.385c0-.089-.052-.177-.203-.339c-.245-.276-.307-.396-.333-.661l-.021-.214l-.292-.208c-.167-.12-.75-.443-1.37-.755a18.569 18.569 0 0 1-1.385-.75c-.521-.349-.87-.766-1.068-1.26c-.036-.099-.083-.182-.099-.182c-.042 0-1.214 1.13-1.714 1.661c-1.234 1.302-2.083 2.432-2.62 3.479c-.135.26-.281.568-.323.682l-.078.208l.094.349c.057.188.177.495.271.677c.328.646.719 1.036 1.365 1.354c.693.344 1.307.464 2.333.448c.552-.005.714-.021.958-.094zM3.896 15.411c.875-.776 2.083-1.625 3.563-2.505c.969-.578 4.714-2.453 6.438-3.219c.313-.141.594-.271.625-.286c.031-.021.12-.245.203-.495c.365-1.156.547-1.385 1.208-1.536c.083-.021.104-.047.104-.13c0-.151.104-.5.193-.656c.068-.12.068-.125.01-.109c-.036.01-.255.073-.484.141c-3.177.917-5.953 2.135-8.349 3.656c-2.557 1.625-4.031 3.573-4.458 5.906l-.031.172l.313-.307c.167-.172.469-.453.667-.625zm23.568.443c.255-.13.651-.729.797-1.203c.042-.167.125-.323.245-.453c.385-.427.703-1.203.708-1.734c0-.828-.469-1.146-1.151-.792c-.089.042-.161.073-.172.063c-.036-.036.156-.224.391-.37c.307-.203.365-.323.365-.755a1.69 1.69 0 0 0-.297-.979c-.094-.141-.13-.234-.115-.292l.094-.349c.13-.464.083-.995-.12-1.333c-.302-.51-.672-.76-1.188-.802l-.302-.021l.177.198c.526.568.781 1.281.677 1.891c-.052.313-.099.375-.401.495l-.177.073l.021.24c.036.391-.031.677-.281 1.203c-.125.266-.219.505-.208.531c.031.089.375.255.646.323l.266.063l-.167.057c-.219.068-.266.167-.266.526c0 .328.047.464.286.823c.109.156.182.318.193.411c.021.146.016.156-.104.198a1.891 1.891 0 0 1-.417.068c-.49.031-.526.047-.745.255c-.198.188-.203.198-.203.406c0 .286.109.865.177.943c.089.094.583.339.776.375a.706.706 0 0 0 .495-.057zm-7.214-.39c.318-.25.568-.5.708-.714c.089-.13.094-.156.052-.266c-.073-.167-.552-.599-.818-.729a2.08 2.08 0 0 0-.557-.161l-.328-.042l-.203-.255c-.422-.521-.656-.927-.99-1.714c-.292-.667-.547-1.057-.953-1.443c-.167-.156-.286-.286-.276-.286c.021 0 .219.099.448.219c.38.203.427.219.599.193c.62-.073 1.167-.786 1.365-1.786c.057-.281.172-.568.292-.74c.005-.005.245.151.526.354c.714.505.87.583 1.276.599c.266.01.417-.01.896-.125c1.021-.25 2.125-.349 2.797-.26c.38.052.927.219 1.333.411c.401.188.479.198.609.083c.109-.094.109-.109.109-.458c-.005-.516-.193-1.073-.479-1.406c-.146-.172-.557-.453-.964-.667a28.154 28.154 0 0 1-.432-.234c-.193-.115-.411-.099-1.005.057c-.688.177-.87.177-1.656-.026c-.667-.167-.708-.172-1.365-.068c-.349.052-1.224.021-1.516-.057c-.146-.042-.292-.083-.432-.135c-.255-.099-.698-.115-1.099-.042c-.797.141-1.401.573-1.62 1.161c-.115.297-.099.438.052.531c.24.151.557.563.557.724c0 .01-.078-.057-.167-.151c-.224-.234-.427-.339-.667-.339a.834.834 0 0 0-.734.484a4.98 4.98 0 0 0-.177.563c-.146.531-.276.813-.552 1.188c-.245.339-.281.49-.193.87c.219.958.599 1.344 2.187 2.245c.833.474 1.26.74 1.573.974c.24.177.245.188.224.323c-.047.313.151.651.542.927c.099.068.161.141.161.193c0 .094.266.224.458.224c.109 0 .193-.047.417-.219zm6.422-1.756c.604.021.635-.026.313-.401c-.339-.391-.432-.708-.307-1.057l.052-.135l-.214-.104c-.073-.036-.146-.073-.219-.099c-.036.141-.073.276-.104.417c-.078.318-.172 1.141-.177 1.49c0 .031.052.021.141-.036c.125-.073.188-.083.516-.073zm-2.026-.031c.365-.021.74-.047.839-.063l.182-.026l.021-.599c.031-.854.156-1.359.526-2.167c.26-.573.375-1.073.318-1.448c-.021-.161-.031-.172-.25-.266a5.765 5.765 0 0 0-1.245-.339c-.411-.057-1.62-.026-2.073.063c-.188.031-.531.104-.76.161c-.568.13-.87.115-1.302-.073c-.427-.188-.698-.359-.953-.599c-.203-.188-.224-.198-.276-.135c-.042.047-.063.188-.078.49c-.016.464-.089.708-.292 1.036a1.266 1.266 0 0 0-.115.214c0 .016.156.198.349.396c.667.693.995.87 1.521.833c.172-.016.292-.01.292.01c0 .042-.339.307-.479.38c-.068.036-.083.073-.073.151l.083.547c.047.313.083.458.13.5c.125.104.771.438 1.177.604c.531.214.823.292 1.229.328c.5.042.51.042 1.229 0zm-4.307-.573c.01-.016-.026-.318-.094-.667c-.083-.474-.13-.646-.182-.693c-.036-.031-.229-.167-.422-.307a6.579 6.579 0 0 1-.719-.599l-.359-.354l-.193.099l-.203.109a.93.93 0 0 0 .083.234c.057.125.172.432.255.682c.219.651.391.964.823 1.531l.161.214l.307.047c.172.026.344.063.391.078c.073.031.083.016.104-.151c.01-.073.026-.151.047-.224zm6.599-6.479c.266-.026.313-.063.198-.182c-.073-.073-.24-.078-.375-.016c-.089.042-.109.031-.25-.12c-.146-.161-.156-.167-.339-.146c-.167.021-.193.016-.214-.052a1.342 1.342 0 0 0-.24-.302a1.156 1.156 0 0 0-.432-.307c-.323-.125-.505-.109-.813.063c-.891.484-.854.479-1.714.26c-.802-.203-1.401-.411-1.594-.542c-.161-.109-.505-.229-.792-.266c-.214-.031-.349.016-.552.182l-.109.089l.099.172c.135.24.12.255-.083.078c-.219-.182-.479-.307-.646-.313c-.12 0-.474.156-.516.224c-.016.021.094.047.24.057c.151.016.359.068.5.125c.365.156.552.208.885.24c.365.036 1.026-.005 1.104-.068c.042-.036.156-.042.396-.021c.318.021.448.052 1.203.255c.438.12.745.109 1.266-.031c.24-.068.542-.135.667-.151c.214-.021.255-.01.589.141c.531.24.813.391.969.531c.156.135.177.135.552.104zm-2.969-.911l.318-.167l-.01-.323c-.005-.224-.016-.443-.026-.661l-.026-.333l-.318.245c-.188.146-.37.255-.448.271c-.229.042-1.359 0-1.464-.057a3.056 3.056 0 0 1-.391-.344l-.292-.297l-.005.177c0 .094-.01.255-.031.354c-.026.188-.026.193.177.448c.109.141.198.266.198.281c0 .099 1.505.568 1.844.573c.109 0 .245-.047.474-.167zm-.604-1.183c.375-.073.557-.344.698-1.031c.146-.74.219-1.901.151-2.396c-.063-.448-.563-.646-1.516-.615c-.594.021-.839.078-1.042.25c-.125.104-.125.115-.182.609c-.104.948.052 2.297.323 2.802c.13.245.245.333.484.375c.271.047.849.047 1.083.005z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-950 text-violet-200 w-full p-5 md:p-10 lg:p-20 mt-5 md:mt-10 lg:mt-20">
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div>
                            <h3 className="text-xl font-semibold">Client</h3>
                            <p className="text-xl">Poeticcode.xyz</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Year</h3>
                            <p className="text-xl">2023</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Category</h3>
                            <p className="text-xl">Content Writing Website</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Duration</h3>
                            <p className="text-xl">6 months</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-10 lg:mt-20">
                        <h3 className="text-xl font-semibold">Background</h3>
                        <p className="text-xl md:text-2xl">
                            Poeticcode.xyz is a content writing website that
                            aims to provide a platform for writers to share
                            their thoughts and ideas with the world.
                        </p>
                    </div>
                    <div className="mt-10 lg:mt-20 mb-5">
                        <a
                            href="https://poeticcode.xyz"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-violet-400 px-10 py-5 text-xl md:text-2xl text-black"
                        >
                            VISIT WEBSITE
                        </a>
                    </div>
                </div>
                {/* End of first project */}

                {/* Start of second project */}
                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20 relative z-10">
                    <div className="border-2 pr-10 md:pr-20 border-black w-full text-xl md:text-2xl bg-lime-300 shadow-[10px_10px_0px_rgba(0,0,0,1)] h-fit">
                        <div className="m-5 md:m-10 mr-10 w-full border-2 border-black">
                            <img
                                src="images/project2.svg"
                                alt="project2"
                                className="w-full h-96 object-cover bg-violet-100"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20">
                    <div className="font-bold text-4xl sm:text-6xl lg:text-7xl relative z-20 w-full text-center">
                        <span className=" text-violet-500">2.</span>Pingofdeath
                        <span className="font-stroke-sm sm:font-stroke">
                            .tech
                        </span>
                    </div>
                    <p className="text-xl md:text-2xl text-center">
                        Resful blog API written in Django Rest Framework.
                    </p>
                    <div className="w-full flex flex-col items-center justify-center mt-5 md:mt-10 border-2 border-black p-5 md:p-10">
                        <h3 className="text-xl font-semibold">
                            Tools utilised
                        </h3>
                        <div className="flex gap-5 md:gap-10 lg:gap-20 mt-5 md:mt-10">
                            {/* Django logo */}
                            <div className="text-black p-2 md:p-5 bg-green-400 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300 flex item-center justify-center">
                                <svg
                                    className="w-6 h-6 md:w-10 md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        fill-rule="evenodd"
                                        d="M15.172 0h-4.176v5.932a7.21 7.21 0 0 0-1.816-.2C4.816 5.731 2 8.305 2 12.273c0 4.118 2.655 6.263 7.755 6.268c1.703 0 3.278-.15 5.417-.53V0ZM9.734 8.977c.516 0 .92.05 1.408.2v6.248c-.596.075-.972.1-1.434.1c-2.14 0-3.305-1.142-3.305-3.21c0-2.125 1.22-3.338 3.331-3.338Z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M22 15.233V6.215h-4.17v7.675c0 3.387-.188 4.674-.785 5.786c-.57 1.087-1.462 1.8-3.305 2.606L17.615 24c1.843-.862 2.735-1.643 3.412-2.88c.726-1.288.973-2.782.973-5.887ZM21.584 0H17.41v3.993h4.175V0Z"
                                    />
                                </svg>
                            </div>

                            {/* DRF logo */}
                            <div className="text-black p-2 md:p-5 bg-blue-400 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300 flex item-center justify-center">
                                <svg
                                    className="w-6 h-6 md:w-10 md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="128"
                                    height="128"
                                    viewBox="0 0 128 128"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12.061 28.416a.139.139 0 0 0-.125.139v2.744c0 .147.01.333.027.56c.008.096.014.15.022.229c-.11-.125-.208-.257-.344-.361c-.22-.174-.48-.31-.777-.41a3.256 3.256 0 0 0-1.041-.151c-.933 0-1.703.32-2.272.953c-.573.634-.85 1.561-.85 2.762c0 1.188.27 2.105.83 2.73c.561.621 1.331.934 2.272.934c.401 0 .752-.049 1.055-.15a.139.139 0 0 0 .002 0a2.61 2.61 0 0 0 .783-.424c.153-.122.264-.267.38-.409l.126.743a.139.139 0 0 0 .137.115h.879a.139.139 0 0 0 .138-.139v-9.726a.139.139 0 0 0-.138-.14h-1.09a.139.139 0 0 0-.014 0zm4.129.313a.835.835 0 0 0-.565.203c-.16.14-.232.36-.232.617c0 .254.073.47.23.615c.153.135.35.205.567.205c.208 0 .4-.07.55-.203c.167-.143.245-.362.245-.617c0-.259-.078-.48-.246-.62a.818.818 0 0 0-.55-.2zm21.768 2.296c-.593 0-1.104.094-1.533.288c-.43.193-.765.48-.994.853c-.23.371-.342.818-.342 1.33c0 .486.121.921.369 1.295a.139.139 0 0 0 .002.002c.203.297.472.508.775.668c-.215.144-.4.294-.527.457a1.197 1.197 0 0 0-.246.742c0 .245.077.47.226.66a.139.139 0 0 0 .002.002c.08.097.17.18.266.252c-.384.12-.723.288-.969.547a1.705 1.705 0 0 0-.465 1.195c0 .644.288 1.168.832 1.522v.002c.545.359 1.302.527 2.264.527c1.241 0 2.203-.202 2.885-.627c.681-.425 1.037-1.063 1.037-1.861c0-.632-.231-1.143-.686-1.48h-.002c-.449-.338-1.08-.497-1.882-.497h-1.268a2.82 2.82 0 0 1-.555-.047a.696.696 0 0 1-.308-.142c-.054-.052-.08-.113-.08-.217a.59.59 0 0 1 .133-.387a1.46 1.46 0 0 1 .423-.32c.196.028.39.047.578.047c.872 0 1.576-.208 2.092-.633c.516-.429.78-1.022.78-1.738c0-.294-.047-.566-.141-.813c-.062-.163-.153-.29-.238-.423l1.123-.133a.139.139 0 0 0 .123-.137v-.67a.139.139 0 0 0-.139-.139h-2.457a2.446 2.446 0 0 0-.299-.06a3.57 3.57 0 0 0-.388-.045a4.004 4.004 0 0 0-.39-.02h-.001zm-15.918.026a5.24 5.24 0 0 0-1.361.174a6.337 6.337 0 0 0-1.143.416a.139.139 0 0 0-.066.177l.334.79a.139.139 0 0 0 .187.07c.3-.14.617-.26.953-.362c.328-.1.674-.15 1.037-.15c.464 0 .802.11 1.037.32c.225.2.354.57.354 1.14v.286l-1.107.045c-1.178.034-2.067.234-2.67.623c-.603.388-.918.97-.918 1.691c0 .474.102.878.312 1.202a.139.139 0 0 0 0 .002c.212.317.502.557.861.713a.139.139 0 0 0 .002 0c.362.154.77.23 1.223.23c.425 0 .788-.042 1.09-.13a.139.139 0 0 0 .002 0a2.56 2.56 0 0 0 .805-.405a.139.139 0 0 0 .002-.002a4 4 0 0 0 .503-.504l.168.805a.139.139 0 0 0 .135.111h.795a.139.139 0 0 0 .139-.139v-4.658c0-.828-.216-1.461-.67-1.861c-.452-.398-1.126-.584-2.004-.584zm8.375.115a3.36 3.36 0 0 0-.965.137a2.745 2.745 0 0 0-.836.394c-.181.125-.333.28-.469.45l-.123-.739a.139.139 0 0 0-.136-.117h-.881a.139.139 0 0 0-.139.139v6.851a.139.139 0 0 0 .139.139h1.092a.139.139 0 0 0 .138-.139v-3.588c0-.798.159-1.39.457-1.785c.291-.385.799-.59 1.57-.59c.542 0 .917.135 1.155.383a.139.139 0 0 0 .002 0c.243.25.373.637.373 1.186v4.394a.139.139 0 0 0 .14.139h1.077a.139.139 0 0 0 .138-.139v-4.463c0-.902-.225-1.585-.7-2.015c-.472-.43-1.157-.637-2.032-.637zm15.529.014c-.706 0-1.325.143-1.848.435a2.918 2.918 0 0 0-1.199 1.266c-.28.549-.416 1.208-.416 1.974c0 .576.08 1.096.244 1.555c.168.457.404.849.707 1.168c.307.318.67.563 1.086.733a.139.139 0 0 0 .002 0c.42.165.88.248 1.377.248c.53 0 1.012-.083 1.438-.248a3.03 3.03 0 0 0 1.1-.733c.303-.32.536-.712.694-1.17c.16-.459.237-.977.237-1.552c0-.764-.141-1.422-.43-1.971a2.994 2.994 0 0 0-1.203-1.27c-.514-.292-1.113-.435-1.79-.435zm-30.326.111a.139.139 0 0 0-.125.139v7.959c0 .396-.09.636-.229.756c-.155.134-.357.205-.63.205a2.5 2.5 0 0 1-.45-.036a.139.139 0 0 0-.004-.001a2.667 2.667 0 0 1-.392-.088a.139.139 0 0 0-.18.132v.844a.139.139 0 0 0 .094.131c.13.045.282.081.453.111c.178.036.38.053.61.053c.462 0 .854-.08 1.17-.254c.312-.171.55-.425.702-.75v-.002c.151-.318.223-.694.223-1.127V31.43a.139.139 0 0 0-.139-.139h-1.09a.139.139 0 0 0-.013 0zm22.3.781c.499 0 .852.12 1.087.348a.139.139 0 0 0 .002.002c.233.222.357.56.357 1.049c0 .454-.12.774-.351.994c-.23.218-.582.336-1.08.336c-.481 0-.829-.117-1.069-.338c-.24-.221-.363-.533-.363-.973c0-.484.124-.827.36-1.058c.24-.237.583-.36 1.058-.36zm-27.944.235c.774 0 1.267.217 1.539.636c.285.434.437 1.077.437 1.932v.187c0 .803-.158 1.39-.45 1.772c-.287.374-.78.57-1.526.57c-.643 0-1.092-.207-1.398-.629c-.305-.425-.467-1.045-.467-1.869c0-.828.165-1.465.476-1.922a.139.139 0 0 0 0-.002c.309-.456.753-.675 1.389-.675zm35.943.025c.488 0 .873.103 1.164.3c.295.201.513.482.658.86a.139.139 0 0 0 0 .002c.146.376.22.829.22 1.361c0 .538-.076.999-.222 1.383c-.144.382-.362.669-.662.873a.139.139 0 0 0-.002 0c-.292.202-.67.307-1.148.307c-.483 0-.865-.105-1.156-.307c-.296-.204-.514-.49-.659-.873c-.145-.384-.22-.845-.22-1.383c0-.813.168-1.433.49-1.873l.002-.001c.322-.433.816-.649 1.535-.649zm-22.557 2.59v.486c0 .647-.188 1.104-.56 1.412c-.38.315-.868.475-1.483.475c-.39 0-.688-.087-.908-.252c-.213-.16-.319-.396-.319-.758c0-.412.155-.705.49-.93c.327-.218.941-.361 1.827-.394l.953-.04zm13.988 3.226h1.248c.361 0 .663.025.904.073a.139.139 0 0 0 .004 0c.234.042.394.124.5.234c.1.109.16.277.16.53a.931.931 0 0 1-.258.667a.139.139 0 0 0-.001.004c-.17.19-.44.344-.817.451a.139.139 0 0 0 0 .002c-.371.112-.853.168-1.44.168c-.593 0-1.037-.097-1.333-.273a.139.139 0 0 0 0-.002c-.295-.172-.424-.393-.424-.723c0-.257.057-.462.166-.623c.115-.163.274-.285.494-.373c.22-.088.486-.135.797-.135zm43.719 6.963c-.1 0-.199 0-.297.002c-1.515.024-4.762.018-7.67 1.334c-2.907 1.316-5.463 4.042-5.463 9.246c0 2.2.735 4.102 1.887 5.73H46.313v-10.51H61.55v-5.35H40.186v5.35h.002v10.512h-.002v5.352h.002V79.23l-3.58-.022l-4.955.023l-7.754-12.047c1.817-.75 3.595-1.829 4.965-3.34c1.489-1.643 2.486-3.79 2.486-6.447v-.763c0-3.888-1.48-6.675-3.899-8.453c-2.417-1.778-5.726-2.565-9.402-2.649H6.25v5.412h.03v12.707h-.03v5.051h.03v15.855h6.127v-15.87l6.16-.018l8.457 13.76l.011.015c.717.949 2.206 3.056 4.612 4.572l.203.127l4.861-2.562l3.895-.024h20.943v-5.56H46.313V66.775h30.129l.031.014c1.866.853 4.133 1.625 5.896 2.738c1.764 1.112 2.997 2.49 2.997 4.676c0 2.353-1.062 3.586-2.559 4.334s-3.454.933-5.065.933h-.002c-3.087.02-6.717-1.292-9.818-2.328l-.549-.183v5.882l.244.112c3.044 1.387 7.552 1.93 10.135 1.832c1.854-.001 5.237-.364 8.225-1.86c2.992-1.497 5.584-4.21 5.584-8.722c0-3.492-1.313-5.996-3.152-7.787c-1.84-1.792-4.183-2.892-6.276-3.707h-.002c-.793-.307-2.298-.908-3.795-1.723c-1.494-.814-2.972-1.853-3.71-2.944c-.46-.746-.744-1.576-.793-2.36c.004-2.38 1.114-3.664 2.55-4.42c1.44-.76 3.23-.921 4.4-.837c2.356.17 6.414 1.5 7.712 2.055l.414.176l.601-1.766h16.242v33.668h6.127V50.89h11.01v-5.303h-11.01v-.023h-6.127v.023H84.586c-1.175-.283-2.358-.466-3.52-.476zm-.283.834h.275c1.1.01 2.242.182 3.39.463l.05.012h22.088v-.023h4.459v.023h11.012v3.639h-11.012v33.666h-4.46V50.059H88.914l-.51 1.496c-1.638-.65-5.155-1.786-7.559-1.96c-1.3-.093-3.207.063-4.85.928c-1.642.866-2.996 2.51-2.996 5.17v.014l.002.012c.058.953.393 1.915.922 2.771l.004.006l.004.008c.883 1.307 2.457 2.37 4.008 3.215c1.551.844 3.088 1.457 3.893 1.767c2.05.8 4.29 1.863 5.996 3.526c1.706 1.663 2.902 3.905 2.902 7.191c0 4.2-2.313 6.57-5.125 7.977s-6.122 1.771-7.861 1.771h-.016c-2.357.091-6.681-.44-9.522-1.658v-4.176c2.97 1.002 6.408 2.205 9.541 2.186c1.67 0 3.732-.17 5.434-1.02s3.02-2.46 3.02-5.08c0-2.51-1.5-4.19-3.387-5.38c-1.887-1.19-4.187-1.966-5.992-2.792l-.112-.05l-.082-.04H45.48v13.89h15.236v3.894H40.602l-4.1.025l-4.605 2.428c-2.117-1.397-3.468-3.269-4.185-4.219l-8.68-14.123l-7.459.022v15.867H7.114V67.87h-.031v-3.385h.031V50.11h-.031v-3.744h10.949c3.568.081 6.707.853 8.926 2.484c2.218 1.632 3.56 4.103 3.56 7.783v.764c0 2.45-.898 4.374-2.271 5.889c-1.373 1.515-3.231 2.61-5.12 3.324l-.48.182c2.863 4.417 5.704 8.849 8.553 13.275l5.406-.026l4.414.026V65.94h-.002v-3.684h.002V50.079h-.002v-3.686h19.7v3.686h-15.24v12.178h25.727l-.558-.682c-1.35-1.643-2.178-3.578-2.178-5.882c0-4.94 2.282-7.27 4.974-8.489c2.693-1.218 5.809-1.235 7.34-1.26zm-69.211 4.166v14.376h5.056c2.127 0 4.362-.313 6.114-1.368s2.972-2.901 2.972-5.72v-.764c0-2.855-1.603-4.554-3.336-5.451c-1.732-.898-3.576-1.073-4.337-1.073h-6.47zm.834.834h5.634c.62 0 2.404.175 3.956.979c1.55.804 2.886 2.158 2.886 4.71v.764c0 2.589-1.029 4.078-2.57 5.006s-3.642 1.248-5.684 1.248h-4.222V50.945zm43.06 38.566c-.506 0-.945.087-1.31.27a1.866 1.866 0 0 0-.844.863c-.192.385-.283.872-.283 1.461v.352l-1.172.316a.139.139 0 0 0-.101.133v.5a.139.139 0 0 0 .138.138h1.135v5.9a.139.139 0 0 0 .139.14h1.09a.139.139 0 0 0 .138-.14v-5.9h1.655a.139.139 0 0 0 .138-.138v-.813a.139.139 0 0 0-.138-.138h-1.655v-.362c0-.529.1-.899.268-1.115c.173-.221.43-.334.816-.334c.183 0 .36.02.534.059a.139.139 0 0 0 .003.002c.185.036.35.077.493.12a.139.139 0 0 0 .172-.087l.283-.818a.139.139 0 0 0-.088-.178a5.17 5.17 0 0 0-.627-.16a3.98 3.98 0 0 0-.783-.07zm61.095.069a.139.139 0 0 0-.125.138v9.727a.139.139 0 0 0 .138.139h1.084a.139.139 0 0 0 .139-.14v-2.417l.715-.625l2.451 3.129a.139.139 0 0 0 .11.053h1.314a.139.139 0 0 0 .11-.225l-3.032-3.83l2.81-2.838a.139.139 0 0 0-.099-.236h-1.281a.139.139 0 0 0-.098.04l-2.39 2.426a.139.139 0 0 0-.002.002c-.126.133-.279.306-.46.52a.139.139 0 0 0-.001 0l-.182.219l.014-.272a.139.139 0 0 0 0-.002c.013-.243.021-.448.021-.619v-5.05a.139.139 0 0 0-.138-.14h-1.084a.139.139 0 0 0-.014 0zM86.658 92.2c-.665 0-1.253.154-1.754.46a3.077 3.077 0 0 0-1.156 1.308c-.27.56-.4 1.22-.4 1.973c0 .772.144 1.435.443 1.98a3.01 3.01 0 0 0 1.252 1.245a.139.139 0 0 0 .002 0c.539.278 1.167.416 1.877.416c.492 0 .92-.036 1.287-.11c.369-.073.74-.188 1.11-.345a.139.139 0 0 0 .085-.13v-.911a.139.139 0 0 0-.192-.13c-.37.152-.726.267-1.068.344c-.338.077-.73.116-1.178.116c-.713 0-1.243-.2-1.62-.59c-.353-.365-.546-.896-.58-1.602h4.821a.139.139 0 0 0 .14-.138v-.645c0-.638-.12-1.203-.364-1.687a2.697 2.697 0 0 0-1.059-1.145c-.462-.273-1.014-.406-1.646-.406V92.2zm18.799 0c-.707 0-1.325.146-1.848.438a2.918 2.918 0 0 0-1.2 1.266c-.278.549-.415 1.208-.415 1.974c0 .576.082 1.096.246 1.555c.168.457.402.847.705 1.166a.139.139 0 0 0 .002.002c.306.318.668.563 1.084.733a.139.139 0 0 0 .002 0c.42.165.882.248 1.379.248c.53 0 1.01-.083 1.435-.248c.429-.17.799-.416 1.102-.735c.304-.32.534-.71.693-1.168c.16-.459.238-.977.238-1.553c0-.763-.14-1.421-.43-1.97a2.998 2.998 0 0 0-1.204-1.27c-.514-.292-1.113-.435-1.79-.435V92.2zm-39.098.014a5.24 5.24 0 0 0-1.362.174a6.337 6.337 0 0 0-1.142.416a.139.139 0 0 0-.067.178l.336.79a.139.139 0 0 0 .186.07c.3-.14.617-.26.953-.362c.328-.1.673-.15 1.037-.15c.463 0 .801.11 1.037.32c.224.2.356.57.356 1.14v.286l-1.11.045c-1.177.034-2.066.234-2.67.623c-.602.388-.918.97-.918 1.691c0 .474.103.878.313 1.201a.139.139 0 0 0 0 .002c.211.318.502.558.861.713a.139.139 0 0 0 .002 0c.361.154.77.23 1.223.23c.425 0 .788-.042 1.09-.13a.139.139 0 0 0 .002 0c.303-.092.571-.227.804-.405a.139.139 0 0 0 .002-.001c.177-.138.34-.32.504-.504l.168.804a.139.139 0 0 0 .135.112h.795a.139.139 0 0 0 .138-.139V94.66c0-.829-.216-1.462-.67-1.862c-.45-.398-1.125-.584-2.003-.584zm-5.162.116a2.4 2.4 0 0 0-.989.199c-.29.131-.547.311-.77.535c-.146.145-.258.317-.376.484l-.09-.966a.139.139 0 0 0-.139-.127h-.906a.139.139 0 0 0-.139.138v6.852a.139.139 0 0 0 .14.139h1.095a.139.139 0 0 0 .138-.139v-3.676c0-.34.054-.642.157-.912a.139.139 0 0 0 0-.002c.103-.277.244-.507.424-.697a.139.139 0 0 0 .001-.002c.18-.195.386-.34.622-.442a.139.139 0 0 0 .002 0a1.89 1.89 0 0 1 .765-.156a3.408 3.408 0 0 1 .768.09a.139.139 0 0 0 .17-.115l.138-.963a.139.139 0 0 0-.11-.156a3.663 3.663 0 0 0-.437-.059a4.467 4.467 0 0 0-.464-.025zm13.273 0c-.32 0-.623.043-.909.13a2.551 2.551 0 0 0-.777.391a2.212 2.212 0 0 0-.428.434l-.12-.715a.139.139 0 0 0-.137-.115h-.881a.139.139 0 0 0-.139.138v6.852a.139.139 0 0 0 .139.139h1.09a.139.139 0 0 0 .138-.14V95.82c0-.526.064-.964.184-1.31v-.003c.123-.347.312-.595.574-.765c.26-.169.615-.26 1.074-.26c.32 0 .574.06.766.17a.139.139 0 0 0 .002.002c.197.107.34.263.44.484a.139.139 0 0 0 0 .002c.102.222.157.51.157.867v4.438a.139.139 0 0 0 .139.139h1.084a.139.139 0 0 0 .139-.139v-3.832c0-.726.154-1.256.441-1.606c.283-.344.74-.525 1.41-.525c.469 0 .793.128 1.012.373a.139.139 0 0 0 .002.002c.222.241.346.617.346 1.15v4.438a.139.139 0 0 0 .138.139h1.077a.139.139 0 0 0 .138-.139v-4.488c0-.892-.205-1.567-.644-1.994h-.002c-.436-.428-1.073-.633-1.889-.633c-.508 0-.981.102-1.412.306h-.002a2.32 2.32 0 0 0-.932.815c-.18-.347-.434-.633-.783-.813c-.393-.208-.872-.308-1.435-.308zm39.352 0a2.4 2.4 0 0 0-.99.199c-.29.131-.548.311-.77.535c-.147.145-.257.318-.375.484l-.092-.966a.139.139 0 0 0-.139-.127h-.906a.139.139 0 0 0-.139.138v6.852a.139.139 0 0 0 .14.139h1.097a.139.139 0 0 0 .138-.139v-3.676c0-.34.052-.642.155-.912a.139.139 0 0 0 0-.002c.103-.277.246-.507.425-.697a.139.139 0 0 0 0-.002a1.89 1.89 0 0 1 1.389-.598a3.408 3.408 0 0 1 .768.09a.139.139 0 0 0 .172-.115l.138-.963a.139.139 0 0 0-.111-.156a3.627 3.627 0 0 0-.436-.059h-.002a4.43 4.43 0 0 0-.462-.025zm-22.947.125a.139.139 0 0 0-.133.177l1.984 6.852a.139.139 0 0 0 .133.1h1.228a.139.139 0 0 0 .131-.094l1.34-3.967v-.002a8.55 8.55 0 0 0 .166-.514c.048-.17.093-.333.133-.488v-.004c.03-.104.052-.194.076-.287c.025.093.048.182.074.287a.139.139 0 0 0 .002.006l.139.475a.139.139 0 0 0 0 .004l.166.502l1.28 3.986a.139.139 0 0 0 .132.096h1.268a.139.139 0 0 0 .133-.1l1.99-6.852a.139.139 0 0 0-.133-.177h-1.111a.139.139 0 0 0-.133.101l-1.051 3.783c-.07.26-.14.514-.205.764a.139.139 0 0 0 0 .002c-.06.243-.111.464-.158.668a15.685 15.685 0 0 0-.178-.629v-.002a15.821 15.821 0 0 0-.191-.627v-.002l-1.282-3.963a.139.139 0 0 0-.13-.095h-1.176a.139.139 0 0 0-.133.095l-1.326 3.97a16.63 16.63 0 0 0-.285.973l-.079.321l-.007-.037a10.87 10.87 0 0 0-.164-.691v-.002a26.794 26.794 0 0 0-.198-.745l-1.039-3.783a.139.139 0 0 0-.133-.101h-1.13zm-4.23.875c.391 0 .7.083.935.24c.239.155.415.37.533.66a.139.139 0 0 0 0 .004a2.6 2.6 0 0 1 .18.88h-3.485c.08-.544.254-.98.545-1.284c.32-.335.738-.5 1.291-.5zm18.786.025c.488 0 .87.103 1.162.3c.295.201.514.482.658.86a.139.139 0 0 0 0 .002c.146.376.221.829.221 1.361c0 .538-.075.999-.22 1.383a1.774 1.774 0 0 1-.665.871a.139.139 0 0 0-.002.002c-.291.202-.67.307-1.148.307c-.483 0-.865-.105-1.156-.307a1.78 1.78 0 0 1-.658-.873c-.146-.384-.221-.845-.221-1.383c0-.813.17-1.433.492-1.873v-.001c.322-.433.818-.649 1.537-.649zm-37.752 2.73v.487c0 .647-.188 1.103-.56 1.412c-.38.315-.868.475-1.483.475c-.39 0-.686-.087-.906-.252c-.213-.16-.32-.396-.32-.758c0-.412.155-.706.49-.93c.327-.218.94-.361 1.826-.394l.953-.04z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-950 text-violet-200 w-full p-5 md:p-10 lg:p-20 mt-5 md:mt-10 lg:mt-20">
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5">
                        <div>
                            <h3 className="text-xl font-semibold">Client</h3>
                            <p className="text-xl">Pingofdeath.tech</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Year</h3>
                            <p className="text-xl">2022</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Category</h3>
                            <p className="text-xl">Micro service</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Duration</h3>
                            <p className="text-xl">3 months</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-10 lg:mt-20">
                        <h3 className="text-xl font-semibold">Background</h3>
                        <p className="text-xl md:text-2xl">
                            Pingofdeath.tech is a micro service that aims to
                            provide a platform for developers to integrate
                            blogging features into their frontend applications.
                        </p>
                    </div>
                    <div className="mt-10 lg:mt-20 mb-5">
                        <a
                            href="https://pingofdeath.tech"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-violet-400 px-10 py-5 text-xl md:text-2xl text-black"
                        >
                            VISIT WEBSITE
                        </a>
                    </div>
                </div>
                {/* End of second project */}

                {/* build something section  */}
                <div className="bg-rose-300 text-violet-200 w-full mt-5 md:mt-10 lg:mt-20 h-[32rem] overflow-hidden relative">
                    <div className="absolute -left-40 top-24 text-teal-400">
                        <svg
                            className="w-80 h-80"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="currentColor"
                                d="m15.9 5.7l-2-3.4L10 4.5V0H6v4.5L2 2.3L0 5.7L3.9 8L0 10.3l2 3.4l4-2.2V16h4v-4.5l3.9 2.2l2-3.4l-4-2.3z"
                            />
                        </svg>
                    </div>
                    <div className="absolute -right-40 top-24 text-teal-400">
                        <svg
                            className="w-80 h-80"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill="currentColor"
                                d="m15.9 5.7l-2-3.4L10 4.5V0H6v4.5L2 2.3L0 5.7L3.9 8L0 10.3l2 3.4l4-2.2V16h4v-4.5l3.9 2.2l2-3.4l-4-2.3z"
                            />
                        </svg>
                    </div>
                    <div
                        className="absolute inset-0 text-black flex flex-col gap-10 md:gap-20 items-center justify-center p-10 md:p-20"
                        id="hire-me"
                    >
                        <h1 className="font-semibold text-4xl sm:text-7xl md:text-8xl text-center">
                            Lets build
                            <br />
                            something <br />
                            <span className="font-stroke-sm sm:font-stroke">
                                together.
                            </span>
                        </h1>
                        <a
                            href="#"
                            className="bg-rose-400 p-5 sm:px-10 py-2 text-xl md:text-2xl border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] flex w-fit overflow-visible"
                        >
                            <p className="flex-nowrap text-ellipsis min-w-max">
                                HIRE ME
                            </p>
                        </a>
                    </div>
                </div>
                {/* End of build something section  */}

                {/* Contact section */}
                <Contact />
            </div>
        </main>
    );
}
