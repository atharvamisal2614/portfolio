"use client";

import { useState } from "react";
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
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <>
      {showPreloader && <IntroPreloader onComplete={() => setShowPreloader(false)} />}
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



