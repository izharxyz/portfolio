export default function BuildSomething() {
    return (
        <div className="w-full">
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
        </div>
    );
}
