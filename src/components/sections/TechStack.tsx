"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { 
  SiFigma, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiPhp, SiLaravel, SiMysql, SiFirebase, 
  SiGit, SiPython, SiVercel, SiPostman, SiNotion 
} from "react-icons/si";
import { LayoutTemplate, Users, MonitorSmartphone, Layers, Blocks, Server, Activity, TerminalSquare, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  
  if (s.includes("figma")) return <SiFigma className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("design system")) return <Layers className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("research")) return <Users className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("wirefram")) return <LayoutTemplate className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("prototyp")) return <MonitorSmartphone className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  
  if (s.includes("react")) return <SiReact className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("next")) return <SiNextdotjs className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("tailwind")) return <SiTailwindcss className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("framer")) return <SiFramer className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("shadcn") || s.includes("aceternity")) return <Blocks className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  
  if (s.includes("php")) return <SiPhp className="w-5 h-5 md:w-7 md:h-7 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("laravel")) return <SiLaravel className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("mysql")) return <SiMysql className="w-5 h-5 md:w-7 md:h-7 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("firebase")) return <SiFirebase className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  
  if (s.includes("git")) return <SiGit className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("vercel")) return <SiVercel className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("postman")) return <SiPostman className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("notion")) return <SiNotion className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("vps") || s.includes("deploy")) return <Server className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("python")) return <SiPython className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
  if (s.includes("mediapipe")) return <Activity className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;

  return <TerminalSquare className="w-4 h-4 md:w-6 md:h-6 text-[#111827] dark:text-[#FFFFFF]" />;
};

export default function TechStack() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const categories = t.techStack.categories;

  // Dua State Berbeda: Desktop (Tab) & Mobile (Accordion)
  const [activeDesktopTab, setActiveDesktopTab] = useState(0);
  const [activeMobileTab, setActiveMobileTab] = useState<number | null>(0); // Boleh tertutup semua (null)

  useGSAP(() => {
    gsap.fromTo(
      ".gsap-tech-reveal",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      id="tech" 
      ref={containerRef}
      className="relative pt-20 pb-24 md:pt-28 md:pb-32 px-4 sm:px-6 lg:px-12 bg-[#F4F4F5] dark:bg-[#111827] font-mono transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* =========================================
            HEADER SECTION 
            ========================================= */}
        <div className="gsap-tech-reveal mb-10 md:mb-16 flex flex-col items-start text-left">
          <h2 className="text-[40px] md:text-[64px] lg:text-[80px] font-black text-[#111827] dark:text-[#FFFFFF] tracking-tighter uppercase leading-[0.9]">
            {t.techStack.title}
          </h2>
          <p className="mt-4 md:mt-6 text-[#111827]/70 dark:text-[#FFFFFF]/70 text-[14px] md:text-[18px] max-w-xl font-medium">
            {t.techStack.subtitle}
          </p>
        </div>

        {/* =========================================
            UI MOBILE: BRUTALIST ACCORDION
            (Tampil hanya di layar HP)
            ========================================= */}
        <div className="md:hidden flex flex-col gap-4 gsap-tech-reveal relative z-20">
          {categories.map((category, index) => {
            const isActive = activeMobileTab === index;
            
            return (
              <div 
                key={index} 
                className={`border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] overflow-hidden bg-[#FFFFFF] dark:bg-[#111827] transition-all shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] ${isActive ? 'translate-y-[-2px] !shadow-[4px_4px_0px_0px_#ea580c] dark:!shadow-[4px_4px_0px_0px_#ea580c]' : ''}`}
              >
                {/* Header Accordion */}
                <button
                  onClick={() => setActiveMobileTab(isActive ? null : index)}
                  className={`w-full flex items-center justify-between p-4 font-black uppercase tracking-widest text-[14px] transition-colors ${
                    isActive 
                      ? 'bg-[#ea580c] text-[#FFFFFF]' 
                      : 'bg-[#FFFFFF] dark:bg-[#111827] text-[#111827] dark:text-[#FFFFFF] active:bg-[#F4F4F5] dark:active:bg-[#000000]'
                  }`}
                >
                  <span>{category.title}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
                </button>

                {/* Konten Laci (Keahlian) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden bg-[#F4F4F5] dark:bg-[#000000] border-t-[3px] border-[#111827] dark:border-[#FFFFFF]"
                    >
                      {/* Grid 2 Kolom Super Rapi */}
                      <div className="p-4 grid grid-cols-2 gap-3">
                        {category.skills.map((skill, sIdx) => (
                          <div 
                            key={sIdx} 
                            className="flex items-center gap-2 bg-[#FFFFFF] dark:bg-[#111827] border-[2px] border-[#111827] dark:border-[#FFFFFF] rounded-[6px] p-2.5 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#FFFFFF]"
                          >
                            <div className="shrink-0 flex items-center justify-center">
                              {getSkillIcon(skill)}
                            </div>
                            <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-tight text-[#111827] dark:text-[#FFFFFF] truncate">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* =========================================
            UI DESKTOP: BRUTALIST TABS & CARDS
            (Tampil hanya di layar Tablet ke atas)
            ========================================= */}
        <div className="hidden md:block">
          <div className="gsap-tech-reveal flex flex-wrap gap-4 mb-12 relative z-20">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveDesktopTab(index)}
                className={`px-6 py-3.5 border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] text-[14px] font-black uppercase tracking-widest transition-all ${
                  activeDesktopTab === index 
                    ? "bg-[#ea580c] text-[#FFFFFF] shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] translate-y-[-2px] border-transparent dark:border-transparent" 
                    : "bg-[#FFFFFF] dark:bg-[#111827] text-[#111827] dark:text-[#FFFFFF] hover:bg-[#ea580c] hover:text-[#FFFFFF] shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#FFFFFF] active:translate-y-[2px] active:shadow-none"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="min-h-[220px] relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDesktopTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-6"
              >
                {categories[activeDesktopTab].skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group flex flex-row items-center gap-3 px-6 py-5 bg-[#FFFFFF] dark:bg-[#111827] border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#ea580c] transition-all cursor-default w-auto"
                  >
                    <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {getSkillIcon(skill)}
                    </div>
                    <span className="text-[18px] font-black uppercase text-[#111827] dark:text-[#FFFFFF] group-hover:text-[#ea580c] transition-colors tracking-tight">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}