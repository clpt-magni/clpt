"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroVideo() {
  const [fadeText, setFadeText] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (iframeLoaded) {
      // Wait a few seconds after the video is fully loaded before hiding the text
      const timer = setTimeout(() => {
        setFadeText(true);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [iframeLoaded]);

  return (
    <section className="relative h-[650px] flex items-center justify-center overflow-hidden bg-primary-dark">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none bg-black">
        <iframe
          src="https://www.youtube.com/embed/XMNprHkEz_Q?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=XMNprHkEz_Q&playsinline=1&modestbranding=1"
          title="CLPT Background"
          className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] md:w-[150vw] md:h-[150vh] xl:w-[120vw] xl:h-[120vw] -translate-x-1/2 -translate-y-1/2 opacity-40 scale-125 transition-opacity duration-1000"
          style={{ opacity: iframeLoaded ? 0.4 : 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          onLoad={() => setIframeLoaded(true)}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div 
          className={`max-w-5xl transition-all duration-1000 transform ${
            fadeText ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white drop-shadow-2xl font-poppins">
            Welcome to Chalapathi Institute <br className="hidden md:block"/> of Pharmaceutical Sciences
          </h1>
          
          <blockquote className="relative text-xl md:text-2xl mb-12 text-white/90 font-light max-w-3xl mx-auto drop-shadow-lg font-roboto italic border-l-[5px] border-secondary pl-8 text-left bg-white/5 p-6 rounded-r-2xl backdrop-blur-sm border-y border-r border-white/10">
            <span className="text-5xl text-secondary absolute -top-4 left-2 opacity-50 font-serif">"</span>
            Join a premier autonomous institution committed to excellence in pharmaceutical sciences, research, and holistic development.
          </blockquote>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/academics">
              <Button size="lg" className="bg-primary hover:bg-primary-light text-white px-10 py-7 text-lg font-bold rounded-2xl transition-all transform hover:-translate-y-1 shadow-2xl pointer-events-auto border-none">
                Explore Programs
              </Button>
            </Link>
            <Link href="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light text-primary-dark px-10 py-7 text-lg font-bold rounded-2xl transition-all transform hover:-translate-y-1 shadow-2xl pointer-events-auto border-none">
                Admission Now Open
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
