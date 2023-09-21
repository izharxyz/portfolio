export default function Home() {
    return (
        <main className="flex min-h-screen items-center justify-center p-5 md:p-10 lg:p-20">
            <div className="flex flex-col min-h-screen w-full items-center justify-center bg-violet-200 border-2 border-black overflow-hidden">
                {/* navbar */}
                <div className="w-full border-b-2 border-black flex">
                    <div className="w-full h-28 mx-5 md:mx-10 lg:mx-20 border-x-2 border-black  flex items-center justify-between p-5 md:p-10">
                        <a href="#" className="text-xl md:text-2xl">
                            MY WORK
                        </a>

                        <div className="flex flex-row items-center font-bold text-xl md:text-2xl gap-1">
                            <h1>Mohamed</h1>
                            <div className="rounded-3xl w-12 h-6 bg-violet-500"></div>
                            <h1>Izhar</h1>
                        </div>

                        <div className="flex items-center justify-center">
                            <a
                                href="#"
                                className="bg-rose-400 px-10 py-2 text-xl md:text-2xl border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)]"
                            >
                                LET'S TALK
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
                                className="bg-teal-400 px-10 py-2 text-xl md:text-2xl border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)]"
                            >
                                MORE ABOUT ME
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
                        Community on various topics. You can explore my blogs{" "}
                        <a href="#" className="text-blue-600 underline">
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
                        <div>{/* add social links here  */}</div>
                    </div>
                </div>

                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20">
                    <div className="font-bold text-4xl sm:text-7xl md:text-8xl w-fit relative z-20">
                        My
                        <span className="font-stroke-sm sm:font-stroke">
                            {" "}
                            Skills
                        </span>
                        <div className="absolute -right-10 -bottom-2 md:-bottom-5 bg-orange-300 h-8 sm:h-14 md:h-20 w-48 sm:w-72 md:w-96 -z-10"></div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20 relative z-10">
                    {/* # svg image */}
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
                            <h2 className="text-3xl font-semibold">
                                Programming languages
                            </h2>
                            <div className="w-full h-full flex items-center justify-center gap-10">
                                <div className="w-1/4 text-right flex flex-col gap-3 md:gap-4 font-normal md:font-medium">
                                    <div className="relative z-10 uppercase">
                                        Rust
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 w-20 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10 uppercase">
                                        Python
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 w-24 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10 uppercase">
                                        Javascript
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 w-32 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10 uppercase">
                                        Kotlin
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 w-20 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10 uppercase">
                                        Bash
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 w-24 bg-rose-300"></div>
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
                            <h2 className="text-3xl font-semibold">
                                Technologies
                            </h2>
                            <div className="w-full h-full flex items-center justify-center gap-10">
                                <div className="w-1/4 text-right flex flex-col gap-3 md:gap-4 font-normal md:font-medium">
                                    <div className="relative z-10 uppercase">
                                        Svelte
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 w-24 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10 uppercase">
                                        Django
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 w-24 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10 uppercase">
                                        TailwindCSS
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 w-32 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10 uppercase">
                                        Nextjs
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 w-20 bg-rose-300"></div>
                                    </div>
                                    <div className="relative z-10 uppercase">
                                        Flutter
                                        <div className="absolute -bottom-1 -right-2 -z-10 h-5 md:h-6 w-28 bg-rose-300"></div>
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
                    </div>
                </div>
                {/* End of Skills section */}

                {/* Start of Projects section */}
                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20">
                    <div className="font-bold text-4xl sm:text-7xl md:text-8xl w-fit relative z-20">
                        My
                        <span className="font-stroke-sm sm:font-stroke">
                            {" "}
                            Projects
                        </span>
                        <div className="absolute -right-10 -bottom-2 md:-bottom-5 bg-rose-300 h-8 sm:h-14 md:h-20 w-56 sm:w-96 md:w-[33rem] -z-10"></div>
                    </div>
                </div>
                <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20 relative z-10">
                    <div className="border-2 border-black w-full text-xl md:text-2xl bg-rose-300 shadow-[10px_10px_0px_rgba(0,0,0,1)] h-96"></div>
                </div>
            </div>
        </main>
    );
}
