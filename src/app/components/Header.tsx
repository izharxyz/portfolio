import { Logo } from "@/app/Icons";
export default function Header() {
    return (
        <div className="w-full">
            <div className="w-full border-b-2 border-black flex">
                <div className="w-full h-28 mx-5 md:mx-10 lg:mx-20 border-x-2 border-black  flex items-center justify-between p-5 md:p-10">
                    <div className="lg:hidden">
                        {/* mobile nav */}
                        <Logo className="h-10 w-10 text-violet-500" />
                    </div>
                    <a
                        href="#projects"
                        className="text-xl md:text-2xl hidden lg:flex gap-2"
                    >
                        MY WORK
                    </a>

                    <div className="hidden lg:flex flex-row items-center font-bold text-xl md:text-2xl gap-1">
                        <h1>Mohamed</h1>
                        <Logo className="h-10 w-10 text-violet-500" />
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
        </div>
    );
}
