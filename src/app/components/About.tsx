import useDownloader from "react-use-downloader";

export default function About() {
    const { download } = useDownloader();

    const fileUrl = "/media/resume-izhar.pdf";
    const filename = "resume-izhar.pdf";
    return (
        <div className="w-full">
            <div className="w-full px-5 md:px-10 lg:px-20">
                <div className="font-bold text-4xl sm:text-7xl md:text-8xl w-fit relative z-20">
                    <span className="font-stroke-sm sm:font-stroke">About</span>
                    me
                    <div className="absolute -right-10 -bottom-2 md:-bottom-5 bg-teal-400 h-8 sm:h-14 md:h-20 w-48 sm:w-72 md:w-96 -z-10"></div>
                </div>
            </div>

            <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20">
                <div className="border-2 border-black w-full p-5 md:p-10 text-xl md:text-2xl bg-teal-400 shadow-[10px_10px_0px_rgba(0,0,0,1)] relative">
                    I am a passionate student based in India, currently pursuing
                    a Bachelor's degree in Computer Science at Ajeenkya DY Patil
                    University. My academic focus includes Mobile Development,
                    UX Design, Web Development, and Security. <br /> <br />
                    In addition to my studies, I have a strong inclination
                    towards sharing knowledge and experiences gained throughout
                    my journey in Software Development. I create valuable
                    content to help fellow members of the Dev Community on
                    various topics. You can explore my blogs
                    <a
                        href="https://poeticcode.xyz"
                        className="text-blue-600 underline"
                    >
                        here
                    </a>
                    . <br /> <br />I welcome connections and followers on my
                    LinkedIn profile, where I regularly share insights and
                    engage in discussions. <br /> <br />I am actively seeking
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
        </div>
    );
}
