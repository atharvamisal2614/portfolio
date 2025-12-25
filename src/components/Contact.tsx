"use client";

import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

export default function Contact() {
    const socialLinks = [
        {
            name: "Contact",
            icon: IoCallOutline,
            href: "tel:+919322177366", // your phone number
            color: "from-blue-500 to-cyan-400",
            shadowColor: "rgba(59, 130, 246, 0.5)"
        },

        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            href: "https://wa.me/919322177366", // Replace with your WhatsApp number
            color: "from-green-500 to-green-400",
            shadowColor: "rgba(34, 197, 94, 0.5)"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "hwww.linkedin.com/in/atharva-misal-945620246", // Replace with your LinkedIn profile
            color: "from-blue-600 to-blue-500",
            shadowColor: "rgba(37, 99, 235, 0.5)"
        },
        {
            name: "Gmail",
            icon: Mail,
            href: "mailto:misalatharva407@gmail.com", // Replace with your email
            color: "from-red-500 to-red-400",
            shadowColor: "rgba(239, 68, 68, 0.5)"
        }
    ];

    return (
        <section id="contact" className="py-20 px-6 md:px-20 relative bg-black/50">

            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                    Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-pink-500">Something Amazing</span> Together!
                </h2>

                <p className="text-gray-300 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
                    Ready to turn ideas into reality? Reach out through any of these platforms and let's start a conversation!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-black/40 backdrop-blur-sm border-2 border-transparent rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-neon-blue hover:shadow-[0_0_30px_rgba(0,191,255,0.4)]"
                            style={{
                                boxShadow: `0 0 20px ${social.shadowColor}`,
                            }}
                        >
                            {/* Neon border gradient effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${social.shadowColor}, transparent)`
                                }}
                            />

                            {/* Icon */}
                            <div className={`mx-auto w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <social.icon size={36} className="text-white" />
                            </div>

                            {/* Name */}
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                {social.name}
                            </h3>

                            {/* Hover effect text */}
                            <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Connect Now
                            </p>

                            {/* Animated border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-neon-purple opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                        </a>
                    ))}
                </div>

                {/* Bottom tagline */}
                <div className="mt-16">
                    <p className="text-gray-500 text-sm md:text-base">
                        Available for freelance opportunities and exciting collaborations 🚀
                    </p>
                </div>

            </div>


        </section>
    );
}
