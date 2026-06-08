"use client";

import { useEffect, useRef } from "react";
import { Calendar, MessageCircle, Heart, Shield, Rocket } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Minimal umur 15 tahun": <Calendar className="w-6 h-6" />,
  "Memiliki akun Discord": <MessageCircle className="w-6 h-6" />,
  "Aktif dan sopan": <Heart className="w-6 h-6" />,
  "Tidak toxic": <Shield className="w-6 h-6" />,
  "Mau belajar dan berkembang": <Rocket className="w-6 h-6" />,
};

export default function Requirements() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".req-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up");
                (card as HTMLElement).style.opacity = "1";
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    "Minimal umur 15 tahun",
    "Memiliki akun Discord",
    "Aktif dan sopan",
    "Tidak toxic",
    "Mau belajar dan berkembang",
  ];

  return (
    <section
      ref={sectionRef}
      id="requirements"
      className="py-24 px-6 relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#818CF8]/10 border border-[#818CF8]/20 text-[#818CF8] text-sm font-medium mb-4 font-body">
            📋 Syarat & Ketentuan
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Persyaratan
          </h2>
          <p className="font-body text-[#94A3B8] mt-4 text-lg">
            Beberapa hal yang perlu kamu persiapkan sebelum bergabung
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, index) => (
            <div
              key={item}
              className="req-card group flex items-center gap-5 bg-[#1E293B] border border-[#38BDF8]/10 hover:border-[#38BDF8]/40 p-6 rounded-2xl hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:-translate-y-1 transition-all duration-500 opacity-0 font-body"
              style={{ transform: "translateY(30px)" }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#818CF8]/20 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {iconMap[item]}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg group-hover:text-[#38BDF8] transition-colors duration-300">
                  {item}
                </h3>
                <p className="text-[#94A3B8] text-sm mt-1">
                  Persyaratan ke-{index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}