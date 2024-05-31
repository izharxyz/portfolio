"use client";

import * as React from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <button
            onClick={() => toggleTheme()}
            className="flex h-full items-center justify-center cursor-pointer p-2"
        >
            <div
                className={`absolute transition-transform duration-500 ${
                    isDark ? "animate-rotate" : "animate-rotate-back"
                }`}
            >
                {isDark ? (
                    <MdOutlineDarkMode className="h-5 w-5 text-foreground" />
                ) : (
                    <MdOutlineLightMode className="h-5 w-5 text-foreground" />
                )}
            </div>
        </button>
    );
}
