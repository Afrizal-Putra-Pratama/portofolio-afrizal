"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, Github, X, ArrowRight, LayoutTemplate, Users, Layers, Activity, Component } from "lucide-react";
import { SiReact, SiLaravel, SiPython, SiFigma, SiMysql, SiFirebase } from "react-icons/si";
import { useLanguage } from "../LanguageProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectImages = [
  "/images/projects/posturely.jpg", 
  "/images/projects/adsa.jpg", 
  "/images/projects/shesafe.jpg", 
  "/images/projects/sdit.jpg", 
];

const projectLinks = [
  { github: "https://github.com/Afrizal-Putra-Pratama/kidposture-web", demo: "https://posturely-app.vercel.app/" },
  { github: "https://github.com/Afrizal-Putra-Pratama/AdsaWonokerso", demo: "https://adsawonokerso.my.id/" },
  { github: null, demo: "https://www.figma.com/proto/NS5Wdu1jaGIMa3MlFgfdhu/Gemastik--25?node-id=1-3&t=jQYEaUOYT7ANoqCD-1" },
  { github: null, demo: "https://www.figma.com/proto/RxqHfsDjv58RuoFAbJsi0Q/Overlogic-SDIT-Project---Overlogic-Universe?node-id=108-2&t=XkVpg8YObXNnHZdO-1" }
];

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("laravel")) return <SiLaravel className="w-4 h-4 text-[#FF2D20]" />;
  if (t.includes("react")) return <SiReact className="w-4 h-4 text-[#61DAFB]" />;
  if (t.includes("mysql")) return <SiMysql className="w-4 h-4 text-[#4479A1]" />;
  if (t.includes("python")) return <SiPython className="w-4 h-4 text-[#3776AB]" />;
  if (t.includes("figma")) return <SiFigma className="w-4 h-4 text-[#F24E1E]" />;
  if (t.includes("firebase")) return <SiFirebase className="w-4 h-4 text-[#FFCA28]" />;
  if (t.includes("mediapipe")) return <Activity className="w-4 h-4 text-[#111827] dark:text-[#FFFFFF]" />;
  if (t.includes("research") || t.includes("user")) return <Users className="w-4 h-4 text-[#111827] dark:text-[#FFFFFF]" />;
  if (t.includes("wireframe") || t.includes("prototype") || t.includes("system")) return <LayoutTemplate className="w-4 h-4 text-[#111827] dark:text-[#FFFFFF]" />;
  if (t.includes("component")) return <Component className="w-4 h-4 text-[#111827] dark:text-[#FFFFFF]" />;
  return <Layers className="w-4 h-4 text-[#111827] dark:text-[#FFFFFF]" />;
};

export default function Projects() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [selectedProject, mouseX, mouseY]);

  useGSAP(() => {
    gsap.fromTo(
      ".gsap-proj-reveal",
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
      id="projects" 
      ref={containerRef}
      // Background dibuat polos total tanpa grid
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-[#F4F4F5] dark:bg-[#111827] font-mono transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* =========================================
            HEADER SECTION (Lebih Bersih)
            ========================================= */}
        <div className="gsap-proj-reveal mb-12 md:mb-20 flex flex-col items-start text-left">
          {/* Badge PORTFOLIO dihapus sesuai permintaan */}
          <h2 className="text-[40px] md:text-[64px] lg:text-[80px] font-black text-[#111827] dark:text-[#FFFFFF] tracking-tighter uppercase leading-[0.9]">
            {t.projects.title}
          </h2>
          <p className="mt-4 md:mt-6 text-[#111827]/70 dark:text-[#FFFFFF]/70 text-[14px] md:text-[18px] max-w-xl font-medium">
            {t.projects.subtitle}
          </p>
        </div>

        {/* =========================================
            TAMPILAN DESKTOP: Brutalist List Hover
            ========================================= */}
        <div className="hidden md:flex flex-col w-full border-t-[3px] border-[#111827] dark:border-[#FFFFFF]">
          {t.projects.items.map((project, index) => (
            <div
              key={`desktop-proj-${index}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(index)}
              // Sudut hover dibuat kotak membulat tipis (rounded-[8px])
              className="gsap-proj-reveal group relative flex items-center justify-between py-8 border-b-[3px] border-[#111827] dark:border-[#FFFFFF] cursor-pointer hover:bg-[#ea580c] transition-colors duration-300 px-6 -mx-6 rounded-[8px]"
            >
              <div className="flex items-center gap-8 relative z-10 pointer-events-none">
                <span className="text-[#111827]/40 dark:text-[#FFFFFF]/40 font-black text-[24px] transition-colors group-hover:text-[#FFFFFF]/80">
                  0{index + 1}
                </span>
                <h3 className="text-[32px] lg:text-[48px] font-black text-[#111827] dark:text-[#FFFFFF] uppercase tracking-tighter transition-all duration-300 group-hover:text-[#FFFFFF] group-hover:translate-x-4">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-6 relative z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                <span className="text-[14px] font-bold text-[#FFFFFF] uppercase tracking-widest border-2 border-[#FFFFFF] px-4 py-1.5 rounded-[8px]">
                  {project.category.split("•")[0]}
                </span>
                <div className="w-12 h-12 rounded-[8px] border-[3px] border-[#FFFFFF] flex items-center justify-center bg-[#FFFFFF] transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-[#ea580c] -rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            TAMPILAN MOBILE: Compact List (Hemat Ruang)
            ========================================= */}
        <div className="flex flex-col gap-4 md:hidden">
          {t.projects.items.map((project, index) => (
            <div
              key={`mobile-proj-${index}`}
              onClick={() => setSelectedProject(index)}
              // Bentuk kartu memanjang ke samping, sudut rounded-lg (8px), shadow lebih kecil
              className="gsap-proj-reveal group flex items-center bg-[#FFFFFF] dark:bg-[#111827] border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] p-3 cursor-pointer shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#111827] dark:hover:shadow-[2px_2px_0px_0px_#FFFFFF] transition-all active:translate-y-[4px] active:shadow-none"
            >
              {/* Gambar Thumb - Kotak kecil di kiri */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 border-[2px] border-[#111827] dark:border-[#FFFFFF] rounded-[6px] overflow-hidden bg-[#111827]/5">
                <Image 
                  src={projectImages[index % projectImages.length]} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
              </div>
              
              {/* Detail Teks */}
              <div className="ml-4 flex-1 flex flex-col justify-center overflow-hidden">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#ea580c] font-black text-[10px] sm:text-[12px] uppercase tracking-widest line-clamp-1">
                    0{index + 1} • {project.category.split("•")[0]}
                  </span>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-black text-[#111827] dark:text-[#FFFFFF] uppercase tracking-tight leading-tight line-clamp-1 mb-1">
                  {project.title}
                </h3>
                <p className="text-[#111827]/70 dark:text-[#FFFFFF]/70 text-[12px] sm:text-[14px] line-clamp-1 font-medium">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* =========================================
          FLOATING IMAGE KURSOR (Desktop Only)
          ========================================= */}
      <motion.div
        // Mengurangi border-radius kursor menjadi rounded-[8px]
        className="fixed top-0 left-0 w-[300px] lg:w-[400px] aspect-[4/3] rounded-[8px] overflow-hidden pointer-events-none z-50 hidden md:block border-[3px] border-[#111827] dark:border-[#FFFFFF] shadow-[6px_6px_0px_0px_#ea580c]"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{
          opacity: hoveredProject !== null ? 1 : 0,
          scale: hoveredProject !== null ? 1 : 0.5,
          rotate: hoveredProject !== null ? 5 : -10,
        }}
        transition={{ duration: 0.4, ease: "backOut" }}
      >
        <AnimatePresence mode="wait">
          {hoveredProject !== null && (
            <motion.div
              key={hoveredProject}
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#F4F4F5] dark:bg-[#000000]"
            >
              <Image 
                src={projectImages[hoveredProject % projectImages.length]} 
                alt="Preview" 
                fill 
                className="object-cover grayscale" 
                priority 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* =========================================
          MODAL POP-UP DETAIL PROYEK
          ========================================= */}
      <AnimatePresence>
        {selectedProject !== null && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#111827]/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Modal Container: rounded-[12px] "Kotak tapi ga terlalu kotak" */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-[#FFFFFF] dark:bg-[#111827] rounded-[12px] overflow-hidden shadow-[8px_8px_0px_0px_#ea580c] flex flex-col z-10 border-[3px] border-[#111827] dark:border-[#FFFFFF]"
            >
              
              {/* Header Modal - Image & Close */}
              <div className="relative w-full h-[200px] sm:h-[300px] bg-[#111827]/5 border-b-[3px] border-[#111827] dark:border-[#FFFFFF] shrink-0">
                <Image src={projectImages[selectedProject % projectImages.length]} alt={t.projects.items[selectedProject].title} fill className="object-cover" />
                <button 
                  onClick={() => setSelectedProject(null)} 
                  className="absolute top-4 right-4 p-2 border-[3px] border-[#111827] dark:border-[#FFFFFF] bg-[#FFFFFF] dark:bg-[#111827] text-[#111827] dark:text-[#FFFFFF] rounded-[8px] transition-colors hover:bg-[#ea580c] hover:text-[#FFFFFF] dark:hover:bg-[#ea580c] focus-visible:outline-none"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Body Modal */}
              <div className="overflow-y-auto flex-1 custom-scrollbar p-6 md:p-8">
                
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 rounded-[6px] border-2 border-[#111827] dark:border-[#FFFFFF] bg-[#ea580c] text-[#FFFFFF] text-[12px] font-black uppercase tracking-widest mb-4 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#FFFFFF]">
                    {t.projects.items[selectedProject].category}
                  </span>
                  <h3 className="text-[32px] md:text-[48px] font-black text-[#111827] dark:text-[#FFFFFF] uppercase tracking-tighter leading-[0.9]">
                    {t.projects.items[selectedProject].title}
                  </h3>
                </div>

                <p className="text-[#111827]/80 dark:text-[#FFFFFF]/80 text-[14px] md:text-[16px] leading-relaxed font-medium mb-8">
                  {t.projects.items[selectedProject].description}
                </p>

                {/* Tech Stack */}
                {/* rounded diubah ke [8px] */}
                <div className="mb-8 p-5 md:p-6 bg-[#FFFFFF] dark:bg-[#111827] rounded-[8px] border-[3px] border-[#111827] dark:border-[#FFFFFF] shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF]">
                  <h4 className="text-[14px] font-black text-[#111827] dark:text-[#FFFFFF] uppercase tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {t.projects.items[selectedProject].tech.map((techItem, i) => (
                      <span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-[#F4F4F5] dark:bg-[#000000] text-[#111827] dark:text-[#FFFFFF] text-[12px] font-bold uppercase rounded-[6px] border-2 border-[#111827]/10 dark:border-[#FFFFFF]/10">
                        {getTechIcon(techItem)}
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons (GitHub & Demo) */}
                {/* Tombol dibuat rounded-[8px] agar selaras kotak */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  {projectLinks[selectedProject % projectLinks.length].github && (
                    <a 
                      href={projectLinks[selectedProject % projectLinks.length].github!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#FFFFFF] dark:bg-[#111827] text-[#111827] dark:text-[#FFFFFF] font-black text-[14px] uppercase tracking-widest rounded-[8px] border-[3px] border-[#111827] dark:border-[#FFFFFF] transition-all shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#111827] dark:hover:shadow-[2px_2px_0px_0px_#FFFFFF] active:translate-y-[4px] active:shadow-none"
                    >
                      <Github className="w-5 h-5" /> CODE
                    </a>
                  )}

                  {projectLinks[selectedProject % projectLinks.length].demo ? (
                    <a 
                      href={projectLinks[selectedProject % projectLinks.length].demo!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#ea580c] text-[#FFFFFF] font-black text-[14px] uppercase tracking-widest rounded-[8px] border-[3px] border-[#111827] dark:border-[#FFFFFF] transition-all shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#111827] dark:hover:shadow-[2px_2px_0px_0px_#FFFFFF] active:translate-y-[4px] active:shadow-none"
                    >
                      <ExternalLink className="w-5 h-5" /> DEMO
                    </a>
                  ) : (
                    <button disabled className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#111827]/10 dark:bg-[#FFFFFF]/10 text-[#111827]/40 dark:text-[#FFFFFF]/40 font-black text-[14px] uppercase tracking-widest rounded-[8px] border-[3px] border-[#111827]/10 dark:border-[#FFFFFF]/10 cursor-not-allowed">
                      <ExternalLink className="w-5 h-5" /> SOON
                    </button>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}