"use client";

import React, { useRef } from "react";
import { Github, Linkedin, Instagram, ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".gsap-footer-reveal",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <footer 
      id="contact"
      ref={containerRef}
      // min-h-screen DIHAPUS agar tidak memakan ruang kosong, background diubah agar kontras
      className="relative bg-[#FFFFFF] dark:bg-[#000000] font-mono transition-colors duration-500 overflow-hidden flex flex-col" 
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-footer-seamless {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee-seamless {
          animation: marquee-footer-seamless 60s linear infinite;
        }
      `}} />

      {/* =========================================
          AREA UTAMA: OVERSIZED CENTERED CTA
          ========================================= */}
      {/* Padding py-20 md:py-32 dikecilkan menjadi py-12 md:py-16 agar lebih rapat */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12 md:py-16 w-full z-10 border-t-[3px] border-[#111827] dark:border-[#FFFFFF]">
        
        <h2 className="gsap-footer-reveal text-[13vw] md:text-[9vw] lg:text-[100px] font-black text-[#111827] dark:text-[#FFFFFF] leading-[0.85] tracking-tighter uppercase mb-4 md:mb-6">
          {language === "id" ? "MULAI PROYEK" : "START A"}<br/>
          <span className="text-[#ea580c]">
            {language === "id" ? "BARU" : "NEW PROJECT"}
          </span>
        </h2>

        {/* Margin text description diperkecil */}
        <p className="gsap-footer-reveal text-[#111827]/70 dark:text-[#FFFFFF]/70 text-[14px] md:text-[18px] max-w-xl mb-8 md:mb-10 font-medium">
          {t.footer.description}
        </p>

        <a 
          href="mailto:afrizzalputrapratama@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="gsap-footer-reveal group flex items-center gap-3 px-6 py-4 md:px-10 md:py-5 bg-[#F4F4F5] dark:bg-[#111827] border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-full shadow-[6px_6px_0px_0px_#111827] dark:shadow-[6px_6px_0px_0px_#FFFFFF] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#ea580c] dark:hover:shadow-[8px_8px_0px_0px_#ea580c] transition-all active:translate-y-[2px] active:shadow-none"
        >
          <span className="text-[14px] sm:text-[16px] md:text-[20px] font-bold text-[#111827] dark:text-[#FFFFFF] group-hover:text-[#ea580c] transition-colors lowercase tracking-wide">
            afrizzalputrapratama@gmail.com
          </span>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#111827] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#111827] flex items-center justify-center group-hover:bg-[#ea580c] group-hover:text-[#FFFFFF] transition-colors group-hover:rotate-45">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </div>
        </a>

      </div>

      {/* =========================================
          BOTTOM DOCK: LOKASI & SOSMED
          ========================================= */}
      <div className="w-full border-t-[3px] border-[#111827] dark:border-[#FFFFFF] flex flex-col md:flex-row bg-[#F4F4F5] dark:bg-[#000000] z-10 shrink-0">
        
        <div className="flex-1 p-6 flex flex-col justify-center items-center md:items-start border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#111827] dark:border-[#FFFFFF]">
          <div className="flex items-center gap-2 text-[#111827] dark:text-[#FFFFFF] text-[14px] md:text-[16px] font-black uppercase tracking-widest mb-2">
            {/* Lokasi diubah menjadi Batang */}
            <MapPin className="w-5 h-5 text-[#ea580c]" /> Batang, Indonesia
          </div>
          <p className="text-[#111827]/60 dark:text-[#FFFFFF]/60 text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-center md:text-left">
            &copy; {new Date().getFullYear()} Afrizal Putra Pratama.
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end items-center p-6 gap-4 md:gap-6 bg-[#FFFFFF] dark:bg-[#111827]">
          {[
            { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/afpupra/" },
            { name: "GitHub", icon: Github, link: "https://github.com/Afrizal-Putra-Pratama" },
            { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/afzapp" },
          ].map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-12 h-12 bg-[#FFFFFF] dark:bg-[#111827] border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] flex items-center justify-center text-[#111827] dark:text-[#FFFFFF] shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] hover:bg-[#ea580c] hover:text-[#FFFFFF] dark:hover:bg-[#ea580c] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#111827] dark:hover:shadow-[6px_6px_0px_0px_#FFFFFF] transition-all active:translate-y-[2px] active:shadow-none"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

      </div>

      {/* =========================================
          MARQUEE BANNER SEAMLESS (Pita Bawah)
          ========================================= */}
      <div className="w-full bg-[#111827] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#111827] py-3 md:py-4 border-t-[3px] border-[#111827] dark:border-[#FFFFFF] overflow-hidden flex items-center shrink-0">
        <div className="flex w-max animate-marquee-seamless">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((set) => (
            <div key={set} className="flex items-center px-2 md:px-4">
              <span className="text-[12px] md:text-[16px] font-black uppercase tracking-widest whitespace-nowrap">AFRIZAL PUTRA PRATAMA</span>
              <span className="text-[#a7a7a7] font-black text-[16px] mx-4 md:mx-6">•</span>
              <span className="text-[12px] md:text-[16px] font-black uppercase tracking-widest whitespace-nowrap">UI/UX DESIGNER</span>
              <span className="text-[#a7a7a7] font-black text-[16px] mx-4 md:mx-6">•</span>
              <span className="text-[12px] md:text-[16px] font-black uppercase tracking-widest whitespace-nowrap">WEB DEV ENTHUSIAST</span>
              <span className="text-[#a7a7a7] font-black text-[16px] mx-4 md:mx-6">•</span>
            </div>
          ))}
        </div>
      </div>

    </footer>
  );
}