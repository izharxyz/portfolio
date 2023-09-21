import Image from "next/image";

export default function Contact() {
    return (
        <div className="w-full">
            <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20">
                <div className="font-bold text-4xl sm:text-7xl md:text-8xl w-fit relative z-20">
                    <span className="font-stroke-sm sm:font-stroke">
                        Contact
                    </span>
                    me
                    <div className="absolute -right-10 -bottom-2 md:-bottom-5 bg-lime-300 h-8 sm:h-14 md:h-20 w-48 sm:w-72 md:w-96 -z-10"></div>
                </div>
            </div>

            <div className="w-full px-5 md:px-10 lg:px-20 mt-5 md:mt-10 lg:mt-20 relative z-10">
                <div className="w-full p-5 md:p-10 text-xl md:text-2xl grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                    <div className="w-full flex flex-col items-center justify-start">
                        <p className="text-xl md:text-2xl">
                            I believe in the power of meaningful connections.
                            Whether you're looking to discuss a project, share
                            ideas, or just have a friendly tech chat, I'm here
                            to listen and engage. Your thoughts and inquiries
                            are important to me.
                        </p>
                        <Image
                            src={"/images/cactus.svg"}
                            alt="cactus"
                            className="object-cover"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="w-full flex items-start justify-center">
                        <form
                            action=""
                            className="w-full flex flex-col gap-5 md:gap-10"
                        >
                            <div className="w-full">
                                <label htmlFor="name">Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="full border-black border-2 p-2.5 bg-violet-300 focus:bg-violet-400 focus:outline-none w-full"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="full border-black border-2 p-2.5 bg-violet-300 focus:bg-violet-400 focus:outline-none w-full"
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    className="full border-black border-2 p-2.5 bg-violet-300 focus:bg-violet-400 focus:outline-none w-full"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-rose-400 p-5 sm:px-10 py-2 text-xl md:text-2xl border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
