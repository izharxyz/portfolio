"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    textList: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
    textList,
    typingSpeed = 150,
    deletingSpeed = 150,
    pauseTime = 1500,
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = textList[currentWordIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            // Typing phase
            if (displayedText.length < currentText.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(
                        currentText.slice(0, displayedText.length + 1)
                    );
                }, typingSpeed);
            } else {
                // Word fully typed, pause before deleting
                timeout = setTimeout(() => setIsDeleting(true), pauseTime);
            }
        } else {
            // Deleting phase
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(
                        currentText.slice(0, displayedText.length - 1)
                    );
                }, deletingSpeed);
            } else {
                // Word fully deleted, move to the next word
                setIsDeleting(false);
                setCurrentWordIndex(
                    (prevIndex) => (prevIndex + 1) % textList.length
                );
            }
        }

        return () => clearTimeout(timeout);
    }, [
        displayedText,
        isDeleting,
        typingSpeed,
        deletingSpeed,
        pauseTime,
        textList,
        currentWordIndex,
    ]);

    return (
        <div className="text-center text-4xl md:text-5xl text-purple-600 font-bold space-x-3">
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
            >
                {displayedText}
            </motion.span>
            <motion.div className="inline-block w-2 h-10 md:h-12 -mb-2 bg-purple-600 rounded-sm" />
        </div>
    );
};

export default Typewriter;
