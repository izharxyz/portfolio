export default function Hero() {
    return (
        <div className="w-full">
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
        </div>
    );
}
