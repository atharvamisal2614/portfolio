"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 px-6 md:px-20 relative bg-black/50">


            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    About <span className="text-neon-blue">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                        <p>
                            I&apos;m a detail-oriented Full Stack Web Developer with a strong foundation in modern web technologies and a focus on clean, efficient, and scalable development. I enjoy turning complex ideas into smooth, high-quality user experiences.
                        </p>
                        <p>
                            Specialized in building high-performance websites, I use modern tech stacks to create fast, responsive, and reliable applications. I stay updated with new tools and trends to consistently deliver impactful and optimized solutions.
                        </p>
                    </div>

                    <div className="relative h-[400px] w-full bg-glass-bg border border-neon-blue/30 rounded-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Image
                            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWk4MGlsaDhjeTB2b3ZzM2FzN2FvZ3U3bzU3ZTBrdWdpajI4aXExZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif"
                            alt="Technology visualization"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
