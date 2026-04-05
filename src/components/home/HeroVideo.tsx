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
          style={{ opacity: iframeLoaded ? 0.9 : 0 }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          onLoad={() => setIframeLoaded(true)}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div
          className={`max-w-4xl transition-all duration-1000 transform ${fadeText ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
            }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug tracking-tight !text-white drop-shadow-2xl font-poppins">
            Welcome to Chalapathi Institute <br className="hidden md:block" /> of Pharmaceutical Sciences
          </h1>

          <blockquote className="relative text-base sm:text-lg md:text-xl mb-10 text-white/90 font-light max-w-2xl mx-auto drop-shadow-lg font-roboto italic border-l-[4px] border-secondary pl-6 text-left bg-white/10 p-5 rounded-r-2xl backdrop-blur-sm border-y border-r border-white/10">
            <span className="text-4xl text-secondary absolute -top-3 left-2 opacity-50 font-serif">"</span>
            Join a premier autonomous institution committed to excellence in pharmaceutical sciences, research, and holistic development.
          </blockquote>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/programs">
              <Button className="bg-primary hover:bg-primary-light text-white px-6 py-5 md:px-8 md:py-6 text-sm md:text-base font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-2xl pointer-events-auto border-none">
                Explore Programs
              </Button>
            </Link>
            <Link href="/admissions">
              <Button className="bg-secondary hover:bg-secondary-light text-primary-dark px-6 py-5 md:px-8 md:py-6 text-sm md:text-base font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-2xl pointer-events-auto border-none">
                Admission Now Open
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
