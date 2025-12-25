"use client";

import Image from "next/image";

const skills = [
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Data Structures", logo: "https://cdn.programiz.com/sites/tutorial2program/files/tree_0.png" },
    { name: "REST API", logo: "https://img.freepik.com/free-vector/hand-drawn-api-illustration_23-2149388656.jpg?semt=ais_hybrid&w=740&q=80" },
    { name: "Automation", icon: "🤖" },


];

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 md:px-20 relative bg-black/50">

            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white text-center">
                    Tech <span className="text-neon-blue">Stack</span>
                </h2>
                <p className="text-gray-400 text-center mb-12">
                    Technologies, tools, and concepts I work with
                </p>

                {/* All Skills in One Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative p-6 bg-glass-bg border border-white/10 rounded-xl text-center hover:border-neon-blue/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                                    {skill.logo ? (
                                        <Image
                                            src={skill.logo}
                                            alt={skill.name}
                                            width={64}
                                            height={64}
                                            className="transform group-hover:scale-110 transition-transform duration-300 invert-0 dark:invert"
                                        />
                                    ) : (
                                        <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                                            {skill.icon}
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-medium text-sm text-white group-hover:text-neon-blue transition-colors">
                                    {skill.name}
                                </h3>
                            </div>

                            <div className="absolute inset-0 rounded-xl shadow-[0_0_0px_rgba(0,243,255,0)] group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-shadow duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
