"use client";

import { useEffect, useRef } from "react";
import { Code2, Users, Gamepad2, Briefcase, FolderGit2, BookOpen } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Belajar Programming": <Code2 className="w-8 h-8" />,
  "Networking": <Users className="w-8 h-8" />,
  "Gaming Community": <Gamepad2 className="w-8 h-8" />,
  "Sharing Career": <Briefcase className="w-8 h-8" />,
  "Project Collaboration": <FolderGit2 className="w-8 h-8" />,
  "Study Group": <BookOpen className="w-8 h-8" />,
};

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".benefit-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up");
                (card as HTMLElement).style.opacity = "1";
              }, i * 100);
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

  const benefits = [
    "Belajar Programming",
    "Networking",
    "Gaming Community",
    "Sharing Career",
    "Project Collaboration",
    "Study Group",
  ];

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="py-24 px-6 relative"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#38BDF8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#818CF8]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4 font-body">
            ✨ Keuntungan
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Kenapa Bergabung?
          </h2>
          <p className="font-body text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
            Temukan berbagai manfaat yang akan membantu kamu berkembang
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="benefit-card group bg-[#1E293B] rounded-2xl p-8 border border-transparent hover:border-[#38BDF8]/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-500 cursor-default opacity-0"
              style={{ transform: "translateY(30px)" }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#38BDF8]/20 to-[#818CF8]/20 flex items-center justify-center text-[#38BDF8] mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {iconMap[benefit]}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-[#38BDF8] transition-colors duration-300">
                {benefit}
              </h3>
              <p className="font-body text-[#94A3B8] text-sm leading-relaxed">
                Bergabunglah untuk menikmati pengalaman {benefit.toLowerCase()} bersama komunitas yang supportive.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}