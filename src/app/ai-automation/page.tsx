import React from "react";

export default function AIAutomation() {
    const projects = [
        {
            title: "RAG (Offline GPT)",
            image: "/rag.jpeg",
            url: "#"
        },
        {
            title: "GST Filing Automation",
            image: "/gst-automation.jpeg",
            url: "#"
        },
        {
            title: "ERPNext Automation",
            image: "/frappe.jpeg",
            url: "#"
        },
        {
            title: "Nextcloud Automation",
            image: "/nextcloud.jpeg",
            url: "#"
        },
        {
            title: "Bhagwad Geeta GPT",
            image: "/geeta-gpt.png",
            url: "#"
        },
        {
            title: "Banking Prediction",
            image: "/valuation.jpeg",
            url: "#"
        }
    ];

    return (
        <>
            <section className="section-space px-4 md:px-10 lg:px-20 py-12">
                {/* Page Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                        AI & Automation <span className="text-neon-blue">Projects</span>
                    </h1>
                    <div className="h-1 w-32 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index}>
                            {/* Project Title */}
                            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center 
                             hover:text-neon-blue transition-colors duration-300">
                                {project.title}
                            </h2>

                            {/* Image Container */}
                            <div className="relative mt05">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-72 lg:h-80 object-cover clip-arch
                           border-1 border-cyan-200 drop-shadow-[0_0_15px_rgba(0,243,255,0.6)]
                           transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            {/* Visit Button */}
                  
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
