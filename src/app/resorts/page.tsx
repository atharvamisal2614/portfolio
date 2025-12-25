import React from "react";

export default function Resort() {
  const resorts = [
    {
      title: "Blu Water Resort",
      image: "/blu-hero1.webp",
      url: "https://bluwaterresort.in/"
    },
    {
      title: "Malshej Agro Tourism",
      image: "/mhalshej agro.webp",
      url: "https://malshejagro.com/"
    },
    {
      title: "Ocean Breeze Beach Resort",
      image: "/ocean breeze.webp",
      url: "https://ocean-breeze.vercel.app/"
    }
  ];

  return (
    <>
      <section className="section-space px-4 md:px-10 lg:px-20 py-12">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Resort <span className="text-neon-blue">Projects</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        {/* Resort Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {resorts.map((resort, index) => (
            <div key={index}>
              {/* Resort Title */}
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center 
                             hover:text-neon-blue transition-colors duration-300">
                {resort.title}
              </h2>

              {/* Image Container */}
              <div className="relative">
                <img
                  src={resort.image}
                  alt={resort.title}
                  className="w-full h-72 lg:h-80 object-cover clip-arch
                           border-1 border-cyan-200 drop-shadow-[0_0_15px_rgba(0,243,255,0.6)]
                           transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Visit Button */}
              <div className="text-center p-6 lg:p-8">
                <a
                  className="button-animation inline-block"
                  href={resort.url}
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

        {/* And Much More Button */}
        <div className="text-center mt-12">
          <button
            className="button-animation inline-block"
          >
            And Much More
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </section>
    </>
  );
}
