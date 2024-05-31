import React from "react";
import Link from "next/link";
import HorizontalLine from "@/components/ui/HorizontalLine";

import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import Logo from "@/components/ui/Logo";

export default function Footer() {
    return (
        <footer className="w-full border-t overflow-hidden p-5 md:p-10 py-16 md:py-16 bg-card">
            <div className="container flex flex-col gap-10 items-center justify-center">
                <div className="text-center uppercase text-sm md:text-base">
                    <Logo height={64} width={64} />
                    <div className="flex gap-5 mt-5 flex-wrap items-center justify-center text-muted-foreground">
                        <Link href="mailto:mohamed@izhar.xyz">
                            mohamed@izhar.xyz
                        </Link>
                    </div>
                </div>
                <HorizontalLine />
                <nav className="flex gap-5 text-sm md:text-base uppercase text-muted-foreground items-center justify-center flex-wrap">
                    <Link
                        href="#about"
                        className="hover:text-primary duration-300"
                    >
                        About
                    </Link>
                    <Link
                        href="#work"
                        className="hover:text-primary duration-300"
                    >
                        Work
                    </Link>
                    <Link
                        href="#stories"
                        className="hover:text-primary duration-300"
                    >
                        Customer Stories
                    </Link>
                    <Link href="#contact" className="hover:text-primary">
                        Contact
                    </Link>
                    <Link
                        href="#blog"
                        className="hover:text-primary duration-300"
                    >
                        Blog
                    </Link>
                    <Link
                        href="https://github.com/izharxyz/portfolio"
                        className="hover:text-primary duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Source Code
                    </Link>
                </nav>
                <HorizontalLine />
                <div className="flex items-center justify-center gap-5 text-muted-foreground">
                    <Link
                        href="#"
                        className="hover:text-primary hover:scale-110 duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="h-6 w-6 md:h-7 md:w-7" />
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary hover:scale-110 duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaXTwitter className="h-6 w-6 md:h-7 md:w-7" />
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary hover:scale-110 duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="h-6 w-6 md:h-7 md:w-7" />
                    </Link>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                    &copy; 2024 Mohamed Izhar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
