export default function Skills() {
    return (
        <div className="w-full">
            <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20">
                <div className="font-bold text-4xl sm:text-7xl md:text-8xl w-fit relative z-20">
                    My
                    <span className="font-stroke-sm sm:font-stroke">
                        Skills
                    </span>
                    <div className="absolute -right-10 -bottom-2 md:-bottom-5 bg-orange-300 h-8 sm:h-14 md:h-20 w-48 sm:w-72 md:w-96 -z-10"></div>
                </div>
            </div>

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
                            <span className="hidden md:block">Programming</span>
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
                                    <span className="md:hidden">Tailwind</span>
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
        </div>
    );
}
