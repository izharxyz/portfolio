import { Logo, HeartIcon, GithubIcon } from "@/app/Icons";

export default function Footer() {
    return (
        <div className="w-full">
            <div className="bg-gray-950 text-rose-100 w-full p-5 md:p-10 lg:p-20 mt-5 md:mt-10 lg:mt-20">
                <div className="w-full flex items-center justify-between">
                    <div className="w-full flex flex-col gap-5">
                        <p className="text-xl md:text-2xl font-semibold">
                            Hire me on
                        </p>
                        <a href="#" className="text-xl">
                            Upwork
                        </a>
                        <a href="#" className="text-xl">
                            Fiverr
                        </a>
                        <a href="#" className="text-xl">
                            Freelancer
                        </a>
                    </div>
                    <div className="w-full flex flex-col gap-5">
                        <p className="text-xl md:text-2xl font-semibold">
                            Socials
                        </p>
                        <a href="#" className="text-xl">
                            Linkedin
                        </a>
                        <a href="#" className="text-xl">
                            Github
                        </a>
                        <a href="#" className="text-xl">
                            Twitter
                        </a>
                    </div>
                    <div className="w-32 h-44 bg-rose-100 text-black flex items-center justify-center">
                        <Logo className="h-36 w-28" />
                    </div>
                </div>
                <div className="w-full border-t border-rose-100 mt-5 md:mt-10 lg:mt-20"></div>
                <div className="flex items-center justify-between mt-5 md:mt-10 lg:mt-20">
                    <p className="text-xl flex gap-2 flex-wrap items-center">
                        Made with
                        <HeartIcon className="h-5 w-5 text-red-400" />
                        using Nextjs
                    </p>
                    <a
                        href="https://github.com/zzedddd/portfolio"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl flex gap-2 flex-wrap items-center justify-center text-center"
                    >
                        <GithubIcon className="h-5 w-5" />
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    );
}
