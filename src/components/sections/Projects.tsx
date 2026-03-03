"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink, Github, X, ArrowRight, LayoutTemplate, Users, Layers, Activity, Component } from "lucide-react";
import { SiReact, SiLaravel, SiPython, SiFigma, SiMysql, SiFirebase } from "react-icons/si";
import { useLanguage } from "../LanguageProvider";

// Berisi 4 gambar sesuai jumlah proyek di dictionary terbaru
const projectImages = [
  "/images/projects/project-1.jpg", 
  "/images/projects/project-2.jpg", 
  "/images/projects/project-3.jpg", 
  "/images/projects/project-4.jpg", 
];

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes("laravel")) return <SiLaravel className="w-3.5 h-3.5 text-[#FF2D20]" />;
  if (t.includes("react")) return <SiReact className="w-3.5 h-3.5 text-[#61DAFB]" />;
  if (t.includes("mysql")) return <SiMysql className="w-3.5 h-3.5 text-[#4479A1]" />;
  if (t.includes("python")) return <SiPython className="w-3.5 h-3.5 text-[#3776AB]" />;
  if (t.includes("figma")) return <SiFigma className="w-3.5 h-3.5 text-[#F24E1E]" />;
  if (t.includes("firebase")) return <SiFirebase className="w-3.5 h-3.5 text-[#FFCA28]" />;
  if (t.includes("mediapipe")) return <Activity className="w-3.5 h-3.5 text-zinc-500" />;
  if (t.includes("research") || t.includes("user")) return <Users className="w-3.5 h-3.5 text-zinc-500" />;
  if (t.includes("wireframe") || t.includes("prototype") || t.includes("system")) return <LayoutTemplate className="w-3.5 h-3.5 text-zinc-500" />;
  if (t.includes("component")) return <Component className="w-3.5 h-3.5 text-zinc-500" />;
  return <Layers className="w-3.5 h-3.5 text-zinc-500" />;
};

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // --- LOGIKA KURSOR MELAYANG (Khusus Desktop) ---
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

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-[#F8F9FA] dark:bg-black transition-colors duration-300 min-h-screen relative" id="projects">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Header Ukuran Normal */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 flex flex-col items-start"
        >
          <div className="w-10 h-1 bg-blue-600 rounded-full mb-4" />
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight uppercase mb-3">
            {t.projects.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-xl">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* =========================================
            TAMPILAN DESKTOP: Typography Hover Reveal (Ukuran Normal)
            ========================================= */}
        <div className="hidden md:flex flex-col w-full border-t border-zinc-200 dark:border-zinc-800">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={`desktop-proj-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(index)}
              className="group relative flex items-center justify-between py-6 lg:py-8 border-b border-zinc-200 dark:border-zinc-800 cursor-pointer hover:bg-white/50 dark:hover:bg-zinc-900/20 px-4 -mx-4 rounded-xl transition-colors duration-300"
            >
              <div className="flex items-center gap-6 lg:gap-8 relative z-10 pointer-events-none">
                <span className="text-zinc-400 dark:text-zinc-600 font-bold text-xs lg:text-sm transition-colors group-hover:text-blue-600">
                  0{index + 1}
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-zinc-500 dark:text-zinc-500 uppercase tracking-tight transition-all duration-300 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-2">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-6 relative z-10 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] lg:text-xs font-bold text-zinc-500 uppercase tracking-widest transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.category.split("•")[0]}
                </span>
                <div className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            TAMPILAN MOBILE: List Kartu Bersih
            ========================================= */}
        <div className="flex flex-col gap-6 md:hidden">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={`mobile-proj-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(index)}
              className="group flex flex-col gap-3 cursor-pointer"
            >
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-zinc-200 dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800">
                <Image src={projectImages[index % projectImages.length]} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="px-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-blue-600 dark:text-blue-500 font-bold text-[9px] uppercase tracking-widest">
                    0{index + 1} {"//"} {project.category.split("•")[0]}
                  </span>
                </div>
                <h3 className="text-xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* =========================================
          FLOATING IMAGE KURSOR (Ukuran Disesuaikan)
          ========================================= */}
      <motion.div
        className="fixed top-0 left-0 w-[280px] lg:w-[320px] aspect-[4/3] rounded-xl overflow-hidden pointer-events-none z-50 hidden md:block shadow-2xl border border-white/10"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
        animate={{
          opacity: hoveredProject !== null ? 1 : 0,
          scale: hoveredProject !== null ? 1 : 0.5,
          rotate: hoveredProject !== null ? 0 : -5,
        }}
        transition={{ duration: 0.3, ease: "backOut" }}
      >
        <AnimatePresence mode="wait">
          {hoveredProject !== null && (
            <motion.div
              key={hoveredProject}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image 
                src={projectImages[hoveredProject % projectImages.length]} 
                alt="Preview" 
                fill 
                className="object-cover" 
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
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-zinc-950 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col z-10 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="overflow-y-auto flex-1 custom-scrollbar">
                
                <div className="relative w-full h-[200px] sm:h-[300px] bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
                  <Image src={projectImages[selectedProject % projectImages.length]} alt={t.projects.items[selectedProject].title} fill className="object-cover" />
                  <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2.5 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors shadow-sm">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                      {t.projects.items[selectedProject].category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                      {t.projects.items[selectedProject].title}
                    </h3>
                  </div>

                  <div className="mb-8">
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                      {t.projects.items[selectedProject].description}
                    </p>
                  </div>

                  <div className="mb-8 p-5 md:p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800/50">
                    <h4 className="text-[11px] font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-4">Teknologi & Perangkat</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {t.projects.items[selectedProject].tech.map((techItem, i) => (
                        <span key={i} className="flex items-center gap-2 px-3.5 py-2 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 text-xs font-bold rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
                          {getTechIcon(techItem)}
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex w-full sm:w-auto gap-3 order-2 sm:order-1">
                      <a href="#" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold text-sm rounded-xl transition-colors">
                        <Github className="w-4 h-4" /> Code
                      </a>
                      <a href="#" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-blue-600/20">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedProject(null)} 
                      className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-bold text-sm rounded-xl transition-colors order-1 sm:order-2 flex items-center justify-center gap-2"
                    >
                      Lihat yang lain
                    </button>
                  </div>
                </div>
                
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}