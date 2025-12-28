"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import IntroPreloader from "@/components/IntroPreloader";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
// import RestoProjects from "@/components/RestoProjects";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Check if preloader has been shown before
    const hasSeenPreloader = localStorage.getItem("hasSeenPreloader");

    if (!hasSeenPreloader) {
      setShowPreloader(true);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    // Mark that the preloader has been shown
    localStorage.setItem("hasSeenPreloader", "true");
  };

  return (
    <>
      {showPreloader && <IntroPreloader onComplete={handlePreloaderComplete} />}
      <SmoothScrollProvider>
        <main className="min-h-screen bg-background text-foreground selection:bg-neon-blue selection:text-black">

          <Hero />
          <Stats />
          <About />
          <Skills />
          <Projects />
          <Contact />
          {/* <RestoProjects/> */}
        </main>
      </SmoothScrollProvider>
    </>
  );
}



