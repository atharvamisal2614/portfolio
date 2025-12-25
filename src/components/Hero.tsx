"use client";

import Scene from "./Scene";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function Hero() {
    const roles = ["Software Engineer", "Front-End Developer", "Back-End Developer", "IT Professional", "Full-Stack Engineer"];
    const typewriterText = useTypewriter(roles, 100, 2000);

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#050505] z-0" />

            {/* 3D Scene */}
            <div className="absolute inset-0 z-10">
                <Scene />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-2xl md:text-3xl text-gray-400 mb-2"
                    style={{ willChange: "opacity, transform" }}
                >
                    I am, <span className="text-white font-semibold">Atharva Misal</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-7xl font-bold tracking-tight mb-4 text-white"
                    style={{ willChange: "opacity, transform" }}
                >
                    <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.6)]">{typewriterText}</span>
                    <span className="animate-pulse">|</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
                    style={{ willChange: "opacity, transform" }}
                >
                    Building immersive digital experiences with code and creativity.
                </motion.p>


            </div>
        </section>
    );
}
