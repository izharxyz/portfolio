"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
    const dots = Array.from({ length: 4 });

    return (
        <div className="flex justify-center items-center h-full w-full">
            {dots.map((_, index) => (
                <motion.div
                    key={index}
                    className="w-3 h-3 bg-muted-foreground rounded-full mx-1"
                    initial={{ opacity: 0.3, scale: 0.5 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: index * 0.15,
                        },
                    }}
                />
            ))}
        </div>
    );
}
