import { SparksIcon } from "@/app/Icons";

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
                            <SparksIcon className="w-32 h-32 md:h-48 md:w-48" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
