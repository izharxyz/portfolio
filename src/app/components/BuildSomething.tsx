import { AsteriskIcon } from "@/app/Icons";

export default function BuildSomething() {
    return (
        <div className="w-full">
            <div className="bg-rose-300 text-violet-200 w-full mt-5 md:mt-10 lg:mt-20 h-[32rem] overflow-hidden relative">
                <div className="absolute -left-40 top-24 text-teal-400">
                    <AsteriskIcon className="w-80 h-80" />
                </div>
                <div className="absolute -right-40 top-24 text-teal-400">
                    <AsteriskIcon className="w-80 h-80" />
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
