// components/roles.tsx
"use client";

import { useEffect, useRef } from "react";

const campuses = [
  { name: "ITB", fullName: "Institut Teknologi Bandung", color: "from-[#1E3A5F] to-[#2E5A8F]" },
  { name: "UNPAD", fullName: "Universitas Padjadjaran", color: "from-[#1B4D3E] to-[#2E7D5A]" },
  { name: "UPI", fullName: "Universitas Pendidikan Indonesia", color: "from-[#8B1E3F] to-[#B52E5A]" },
  { name: "POLBAN", fullName: "Politeknik Negeri Bandung", color: "from-[#1E3A8A] to-[#3B82F6]" },
  { name: "POLMAN", fullName: "Politeknik Manufaktur", color: "from-[#374151] to-[#6B7280]" },
  { name: "UI", fullName: "Universitas Indonesia", color: "from-[#1E40AF] to-[#3B82F6]" },
  { name: "TEL-U", fullName: "Telkom University", color: "from-[#DC2626] to-[#EF4444]" },
  { name: "UNPAR", fullName: "Universitas Katolik Parahyangan", color: "from-[#7C3AED] to-[#A78BFA]" },
  { name: "UNPAS", fullName: "Universitas Pasundan", color: "from-[#059669] to-[#10B981]" },
  { name: "UNISBA", fullName: "Universitas Islam Bandung", color: "from-[#0E7490] to-[#06B6D4]" },
  { name: "UNIKOM", fullName: "Universitas Komputer Indonesia", color: "from-[#4338CA] to-[#6366F1]" },
  { name: "ULBI", fullName: "Universitas Logistik & Bisnis", color: "from-[#B45309] to-[#F59E0B]" },
  { name: "ITENAS", fullName: "Institut Teknologi Nasional", color: "from-[#BE123C] to-[#F43F5E]" },
];

export default function Roles() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".campus-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up");
                (card as HTMLElement).style.opacity = "1";
              }, i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="roles" className="py-24 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#38BDF8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#818CF8]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium mb-4 font-body">
            🎓 Komunitas Kampus
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">
            Role Kampus Tersedia
          </h2>
          <p className="font-body text-[#94A3B8] mt-4 text-lg max-w-2xl mx-auto">
            Pilih role sesuai kampusmu dan terhubung dengan sesama mahasiswa
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {campuses.map((campus) => (
            <div
              key={campus.name}
              className="campus-card group relative bg-[#1E293B] hover:bg-[#1E293B]/80 border border-[#38BDF8]/10 hover:border-[#38BDF8]/40 rounded-2xl p-5 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] opacity-0"
              style={{ transform: "translateY(30px)" }}
            >
              {/* Logo Placeholder - Ganti dengan SVG logo asli */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${campus.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <span className="font-heading font-bold text-white text-lg">
                  {campus.name.charAt(0)}
                </span>
              </div>

              <h3 className="font-heading font-bold text-sm text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors duration-300">
                {campus.name}
              </h3>
              <p className="font-body text-[#94A3B8] text-xs mt-1 leading-tight">
                {campus.fullName}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#38BDF8]/0 to-[#818CF8]/0 group-hover:from-[#38BDF8]/5 group-hover:to-[#818CF8]/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}