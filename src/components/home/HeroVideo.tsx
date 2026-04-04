"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroVideo() {
  const [fadeText, setFadeText] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeText(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[650px] flex items-center overflow-hidden bg-primary-dark">
      {/* YouTube Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none bg-black">
        <iframe
          src="https://www.youtube.com/embed/XMNprHkEz_Q?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=XMNprHkEz_Q&playsinline=1&modestbranding=1"
          title="CLPT Background"
          className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] md:w-[150vw] md:h-[150vh] xl:w-[120vw] xl:h-[120vw] -translate-x-1/2 -translate-y-1/2 opacity-40 scale-125"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl border-l-[5px] border-secondary pl-8 transition-opacity duration-1000 ${
            fadeText ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl font-poppins">
            Empowering the Next Generation of Pharmacy Professionals
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 font-light max-w-2xl drop-shadow-lg font-roboto">
            Join a premier autonomous institution committed to excellence in pharmaceutical sciences, research, and holistic development.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/academics">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg pointer-events-auto">
                Explore Programs
              </Button>
            </Link>
            <Link href="/admissions">
              <Button size="lg" className="bg-secondary hover:bg-secondary-light text-primary-dark px-8 py-6 text-lg font-semibold rounded-xl transition-all transform hover:-translate-y-1 shadow-lg pointer-events-auto">
                Admission Now Open
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
