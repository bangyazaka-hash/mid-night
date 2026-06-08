"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            (entry.target as HTMLElement).style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="apply"
      className="py-24 px-6 relative overflow-hidden opacity-0"
      style={{ transform: "translateY(30px)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#818CF8]/10 to-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-6 font-body">
          <Sparkles className="w-4 h-4" />
          Ayo Mulai!
        </div>
        
        <h2 className="font-heading text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#818CF8] via-[#38BDF8] to-[#818CF8] bg-clip-text text-transparent tracking-tight">
          Siap Bergabung?
        </h2>

        <p className="font-body text-[#94A3B8] text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Jangan lewatkan kesempatan untuk menjadi bagian dari komunitas yang aktif berkembang bahkan saat malam tiba.
        </p>

        <a
          href="https://discord.gg/r7ZKKUSrJE"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#818CF8] to-[#38BDF8] text-[#0F172A] font-bold px-10 py-5 rounded-2xl text-lg font-heading hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-glow"
        >
          Join Mid Night Campus
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="font-body text-[#94A3B8]/60 text-sm mt-8">
          Gratis dan terbuka untuk semua yang ingin belajar
        </p>
      </div>
    </footer>
  );
}