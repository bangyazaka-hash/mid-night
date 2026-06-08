"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.opacity = "1";
      contentRef.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#818CF8]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-[#818CF8]/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "0.7s" }} />
      </div>

      <div 
        ref={contentRef}
        className="text-center max-w-4xl relative z-10 opacity-0 transition-all duration-1000 ease-out"
        style={{ transform: "translateY(40px)" }}
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#818CF8]/10 border border-[#818CF8]/30 text-[#818CF8] text-sm font-medium mb-8 hover:bg-[#818CF8]/20 transition-colors duration-300 font-body">
          <span className="animate-pulse">🌙</span>
          Community Recruitment
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-[#818CF8] via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent leading-[0.9] tracking-tight">
          MID NIGHT<br />CAMPUS
        </h1>

        <p className="font-body text-[#94A3B8] text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Komunitas Discord untuk mahasiswa, programmer, gamer, designer, dan pembelajar yang aktif berkembang bahkan saat malam tiba.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#apply"
            className="group bg-[#38BDF8] text-[#0F172A] px-8 py-4 rounded-xl font-bold text-lg font-heading hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Daftar Sekarang
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#benefits"
            className="border border-[#818CF8]/50 px-8 py-4 rounded-xl font-semibold text-lg font-body hover:bg-[#818CF8]/10 hover:border-[#818CF8] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
}