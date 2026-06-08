"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "backdrop-blur-xl bg-[#0F172A]/90 border-b border-[#1E293B] shadow-lg shadow-black/20" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="group cursor-pointer">
          <h1 className="font-heading font-bold text-xl group-hover:text-[#38BDF8] transition-colors duration-300">
            Mid Night Campus
          </h1>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#roles" className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300 text-sm font-medium font-body">
            Role Kampus
          </a>
          <a href="#benefits" className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300 text-sm font-medium font-body">
            Keuntungan
          </a>
          <a href="#requirements" className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300 text-sm font-medium font-body">
            Persyaratan
          </a>
          <a
            href="#apply"
            className="bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 px-6 py-2.5 rounded-xl text-[#0F172A] font-bold text-sm font-heading hover:scale-105 active:scale-95"
          >
            Join Discord
          </a>
        </div>

        <button 
          className="md:hidden text-[#F8FAFC] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="px-6 py-4 space-y-4 bg-[#0F172A]/95 backdrop-blur-xl border-t border-[#1E293B]">
          <a href="#roles" className="block text-[#94A3B8] hover:text-[#F8FAFC] transition-colors font-body" onClick={() => setMobileOpen(false)}>
            Role Kampus
          </a>
          <a href="#benefits" className="block text-[#94A3B8] hover:text-[#F8FAFC] transition-colors font-body" onClick={() => setMobileOpen(false)}>
            Keuntungan
          </a>
          <a href="#requirements" className="block text-[#94A3B8] hover:text-[#F8FAFC] transition-colors font-body" onClick={() => setMobileOpen(false)}>
            Persyaratan
          </a>
          <a
            href="#apply"
            className="block text-center bg-gradient-to-r from-[#38BDF8] to-[#818CF8] px-6 py-3 rounded-xl text-[#0F172A] font-bold font-heading"
            onClick={() => setMobileOpen(false)}
          >
            Join Discord
          </a>
        </div>
      </div>
    </nav>
  );
}