"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  

];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 backdrop-blur-md bg-glass-bg border-b border-neon-blue/30 shadow-[0_0_20px_rgba(0,243,255,0.1)]"
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,243,255,0.5)] cursor-pointer"
            >
                PORTFOLIO
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10">
                {navLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative text-base font-semibold text-gray-300 hover:text-white transition-colors duration-300 group cursor-pointer"
                    >
                        {link.name}
                        <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden text-neon-blue hover:text-neon-purple transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-neon-blue/30 p-6 md:hidden flex flex-col gap-4"
                >
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xl font-semibold text-gray-300 hover:text-neon-blue transition-colors py-2 border-b border-white/5 hover:border-neon-blue/50 cursor-pointer"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
