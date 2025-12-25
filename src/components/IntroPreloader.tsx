"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const greetings = [
    "Hello",
    "नमस्ते",
    "नमस्कार",
    "নমস্কার",
    "నమస్తే",
    "வணக்கம்",
    "നമസ്കാരം",
    "ನಮಸ್ಕಾರ",
    "ਨਮਸਤੇ",
    "નમસ્તે",
    "నమస్కారం",
    "ନମସ୍କାର",
    "सलाम",
    "নমস্কাৰ",
    "হ্যালো",
    "ꯍꯥꯎ",
    "السلام علیکم",
    "জোহর",
    "नमस्ते",
];


export default function IntroPreloader({ onComplete }: { onComplete: () => void }) {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (index === greetings.length - 1) {
            setTimeout(() => {
                setIsVisible(false);
                setTimeout(onComplete, 800); // Wait for exit animation
            }, 1000);
            return;
        }

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, 100); // Fast cycle

        return () => clearTimeout(timeout);
    }, [index, onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] text-white"
                >
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-center gap-4"
                    >
                        <span className="text-4xl md:text-6xl font-bold tracking-tighter flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-neon-blue shadow-[0_0_10px_#00f3ff]"></span>
                            {greetings[index]}
                        </span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

