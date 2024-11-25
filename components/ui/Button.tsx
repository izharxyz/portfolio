import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-full p-[2px] md:p-[3px]">
            {/* gradient blue-500 purple-600 blue-500 */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#9333ea_50%,#3b82f6_100%)] text-pur" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-5 py-2 text-sm font-medium backdrop-blur-3xl">
                {children}
            </span>
        </button>
    );
}
