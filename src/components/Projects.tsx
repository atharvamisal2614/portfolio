// "use client";

// const projects = [
//     {
//         title: "Resort Website",
//         description: "A Full Fledged Resort Booking Website",
//         tags: ["Next.js", "React", "Tailwind Css", "Airpay"],
//         gradient: "from-cyan-500 to-blue-500",
//     },
//     {
//         title: "AI / Automation Softwares",
//         description: "A Chatbot for AI Analytics",
//         tags: ["React", "Tailwind Css", "Node.js", "Python", "Ollama"],
//         gradient: "from-purple-500 to-pink-500",
//     },
//     {
//         title: "E-commerce Websites",
//         description: "A Full Fledged E-commerce Website",
//         tags: ["Next.js", "Tailwind Css", "Airpay", "MongoDB", "Stripe"],
//         gradient: "from-green-500 to-teal-500",
//     },
// ];

// export default function Projects() {
//     return (
//         <section id="projects" className="py-20 px-6 md:px-20 relative">

//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center md:text-left">
//                     Featured <span className="text-neon-blue">Projects</span>
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projects.map((project, index) => (
//                         <div
//                             key={index}
//                             className="group relative bg-glass-bg border border-glass-border rounded-xl overflow-hidden hover:border-neon-blue/50 transition-colors duration-300"
//                         >
//                             <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                             <div className="relative z-10">
//                                 {/* Project Preview */}
//                                 <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center border-b border-white/5`}>
//                                     <div className="text-6xl">🚀</div>
//                                 </div>

//                                 <div className="p-6">
//                                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
//                                         {project.title}
//                                     </h3>
//                                     <p className="text-gray-400 mb-4 text-sm">
//                                         {project.description}
//                                     </p>

//                                     <div className="flex flex-wrap gap-2">
//                                         {project.tags.map((tag, i) => (
//                                             <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
//                                                 {tag}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }




// "use client";

// const projects = [
//     {
//         title: "Resort Website",
//         description: "A Full Fledged Resort Booking Website",
//         tags: ["Next.js", "React", "Tailwind Css", "Airpay"],
//         gradient: "from-cyan-500 to-blue-500",
//         image: "/blu-hero1.webp",
//     },
//     {
//         title: "AI / Automation Softwares",
//         description: "A Chatbot for AI Analytics",
//         tags: ["React", "Tailwind Css", "Node.js", "Python", "Ollama"],
//         gradient: "from-purple-500 to-pink-500",
//         image: "/ai.jpg",
//     },
//     {
//         title: "E-commerce Websites",
//         description: "A Full Fledged E-commerce Website",
//         tags: ["Next.js", "Tailwind Css", "Airpay", "MongoDB", "Stripe"],
//         gradient: "from-green-500 to-teal-500",
//         image: "e-commerce.jpg",
//     },
// ];


// export default function Projects() {
//     return (
//         <section id="projects" className="py-20 px-6 md:px-20 relative">

//             <div className="max-w-7xl mx-auto">
//                 <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center md:text-left">
//                     Featured <span className="text-neon-blue">Projects</span>
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projects.map((project, index) => (
//                         <div
//                             key={index}
//                             className="group relative bg-glass-bg border border-glass-border rounded-xl overflow-hidden hover:border-neon-blue/50 transition-colors duration-300"
//                         >
//                             <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                             <div className="relative z-10">
//                                 {/* Project Preview */}
//                                 <div className="h-48 w-full overflow-hidden border-b border-white/5">
//                                     <img
//                                         src={project.image}
//                                         alt={project.title}
//                                         className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
//                                     />
//                                 </div>


//                                 <div className="p-6">
//                                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
//                                         {project.title}
//                                     </h3>
//                                     <p className="text-gray-400 mb-4 text-sm">
//                                         {project.description}
//                                     </p>

//                                     <div className="flex flex-wrap gap-2">
//                                         {project.tags.map((tag, i) => (
//                                             <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
//                                                 {tag}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import Link from "next/link";

const projects = [
    {
        title: "Resort Website",
        description: "A Full Fledged Resort Booking Website",
        tags: ["Next.js", "React", "Tailwind Css", "Airpay"],
        gradient: "from-cyan-500 to-blue-500",
        image: "/blu-hero1.webp",
        link: "/resorts",
    },
    {
        title: "AI / Automation Softwares",
        description: "A Chatbot for AI Analytics",
        tags: ["React", "Tailwind Css", "Node.js", "Python", "Ollama"],
        gradient: "from-purple-500 to-pink-500",
        image: "/ai.jpg",
        link: "/ai-automation",
    },
    {
        title: "Other Websites",
        description: "A Full Fledged E-commerce Website",
        tags: ["Next.js", "Tailwind Css", "Airpay", "MongoDB", "Stripe"],
        gradient: "from-green-500 to-teal-500",
        image: "/e-commerce.jpg",
        link: "/other",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 md:px-20 relative">

            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center md:text-left">
                    Featured <span className="text-neon-blue">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link href={project.link} key={index}>
                            <div
                                className="group cursor-pointer relative bg-glass-bg border border-glass-border rounded-xl overflow-hidden hover:border-neon-blue/50 transition-colors duration-300"
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">

                                    {/* Project Image */}
                                    <div className="h-48 w-full overflow-hidden border-b border-white/5">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 mb-4 text-sm">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
