import React from "react";

export default function Others() {
    const projects = [
        {
            title: "Business Websites",
            image: "/taxbhai.jpeg",
            url: "https://app.taxbhai.in"
        },
        {
            title: "Personal Keeper App",
            image: "/keeper-app.png",
            url: "https://keeper-app-gamma-five.vercel.app"
        },
        {
            title: "Import Export Website",
            image: "/eagle-global.png",
            url: "https://eglnew.vercel.app/"
        },
        {
            title: "IndiaMart Clone",
            image: "/getbuyers.png",
            url: "https://getbuyers.vercel.app/"
        },
        {
            title: "Shreem Classes",
            image: "/shreem.png",
            url: "https://www.shreemclasses.com/"
        },
        {
            title: "Shree Balaji Import Export",
            image: "/shree-balaji.png",
            url: "https://shreebalaji-plum.vercel.app/"
        },
        {
            title: "PG Websites",
            image: "/smart-living.png",
            url: "https://pg-living.vercel.app/"
        },
        {
            title: "Bike Accessories",
            image: "/moto-equip.png",
            url: "https://moto-equips.vercel.app/"
        },
        {
            title: "Hospital Website",
            image: "/sarthak-hospital.png",
            url: "https://sarthak-hospital.vercel.app/"
        }
    ];

    return (
        <>
            <section className="section-space px-4 md:px-10 lg:px-20 py-12">
                {/* Page Title */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                        Other <span className="text-neon-blue">Projects</span>
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
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-72 lg:h-80 object-cover clip-arch
                           border-1 border-cyan-200 drop-shadow-[0_0_15px_rgba(0,243,255,0.6)]
                           transition-transform duration-700 hover:scale-110"
                                />
                            </div>

                            {/* Visit Button */}
                            <div className="text-center p-6 lg:p-8">
                                <a
                                    className="button-animation inline-block"
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Website
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
