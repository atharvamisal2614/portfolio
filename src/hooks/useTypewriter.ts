"use client";

import { useState, useEffect } from "react";

export function useTypewriter(texts: string[], speed: number = 100, pauseTime: number = 2000) {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentTextIndex];

        if (!isDeleting && currentIndex < currentText.length) {
            // Typing
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + currentText[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (!isDeleting && currentIndex === currentText.length) {
            // Pause before deleting
            const timeout = setTimeout(() => {
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(timeout);
        } else if (isDeleting && displayText.length > 0) {
            // Deleting
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev.slice(0, -1));
            }, speed / 2);
            return () => clearTimeout(timeout);
        } else if (isDeleting && displayText.length === 0) {
            // Move to next text
            setIsDeleting(false);
            setCurrentIndex(0);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
    }, [currentIndex, displayText, isDeleting, texts, currentTextIndex, speed, pauseTime]);

    return displayText;
}
