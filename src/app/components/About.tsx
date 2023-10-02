import useDownloader from "react-use-downloader";

import {
    GithubIcon,
    LeetcodeIcon,
    LinkedinIcon,
    SparkMultiColorIcon,
    StarsIcon,
    TwitterIcon,
} from "@/app/Icons";

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
                    various topics. You can explore my blogs on my blog site
                    <a
                        href="https://poeticcode.xyz"
                        className="text-black ml-2 underline font-semibold"
                    >
                        poeticcode.xyz
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
                        <StarsIcon className="h-32 w-32 md:h-48 md:w-48" />
                    </div>
                    <div className="w-full flex items-center justify-center mt-5 md:mt-10">
                        <button
                            onClick={() => download(fileUrl, filename)}
                            className="bg-rose-400 p-5 sm:px-10 py-2 text-xl md:text-2xl border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] relative"
                        >
                            DOWNLOAD MY RESUME
                            <div className="absolute -top-10 -right-16">
                                <SparkMultiColorIcon className="w-20 h-20" />
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
                                aria-label="linkedin"
                                className="text-black p-2 md:p-5 bg-blue-300 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300"
                            >
                                <LinkedinIcon className="w-6 h-6 md:w-10 md:h-10" />
                            </a>
                            {/* Github */}
                            <a
                                href="https://github.com/zzedddd"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="github"
                                className="text-black p-2 md:p-5 bg-gray-200 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300"
                            >
                                <GithubIcon className="w-6 h-6 md:w-10 md:h-10" />
                            </a>
                            {/* Twitter */}
                            <a
                                href="https://x.com/The_0neTrueG0D"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="twitter"
                                className="text-black p-2 md:p-5 bg-blue-400 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300"
                            >
                                <TwitterIcon className="w-6 h-6 md:w-10 md:h-10" />
                            </a>
                            {/* Leetcode */}
                            <a
                                href="https://leetcode.com/zzedddd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="leetcode"
                                className="text-black p-2 md:p-5 bg-orange-300 border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] md:hover:scale-110 duration-300"
                            >
                                <LeetcodeIcon className="w-6 h-6 md:w-10 md:h-10" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
