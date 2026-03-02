"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
// Tambahkan ArrowLeft di import lucide-react
import { ExternalLink, Github, X, ArrowUpRight, ArrowRight, ArrowLeft, LayoutTemplate, Users, Layers, Activity, Component } from "lucide-react";
import { SiReact, SiLaravel, SiPython, SiFigma, SiMysql, SiFirebase } from "react-icons/si";
import { useLanguage } from "../LanguageProvider";

const projectImages = [
  "/images/projects/project-1.jpg", 
  "/images/projects/project-2.jpg", 
  "/images/projects/project-3.jpg", 
  "/images/projects/project-4.jpg", 
  "/images/projects/project-5.jpg", 
  "/images/projects/project-6.jpg", 
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
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  useEffect(() => {
    if (selectedProject !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-12 bg-[#F8F9FA] dark:bg-black transition-colors duration-300 min-h-screen" id="projects">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Minimalis */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-start md:items-center text-left md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight uppercase mb-3">
            {t.projects.title}
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mb-4" />
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-xl">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* =========================================
            TAMPILAN MOBILE: Card Tipis Horizontal
            ========================================= */}
        <div className="flex flex-col gap-4 md:hidden">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={`mobile-${index}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(index)}
              className="group flex flex-row overflow-hidden rounded-2xl cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm h-[120px] relative hover:border-blue-300 transition-all active:scale-95"
            >
              {/* Thumbnail Kiri */}
              <div className="relative w-[110px] sm:w-[130px] h-full shrink-0 overflow-hidden border-r border-zinc-100 dark:border-zinc-800">
                <Image
                  src={projectImages[index]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Teks Kanan */}
              <div className="flex flex-col justify-center p-3.5 flex-1 min-w-0">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-[9px] uppercase tracking-widest mb-1 truncate">
                  {project.category.split("•")[0]}
                </span>
                <h3 className="text-sm font-black text-zinc-900 dark:text-white tracking-tight leading-snug line-clamp-2 pr-1 mb-1">
                  {project.title}
                </h3>
                
                {/* CTA Profesional Pengganti "Ketuk untuk melihat..." */}
                <div className="mt-auto flex items-center gap-1 text-[10px] font-bold text-zinc-400 group-hover:text-blue-600 dark:text-zinc-500 dark:group-hover:text-blue-400 transition-colors">
                  Lihat detail <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            TAMPILAN DESKTOP: Typography List & Sticky Image
            ========================================= */}
        <div className="hidden md:flex flex-row gap-10 lg:gap-16 items-start">
          
          <div className="w-1/3 sticky top-24">
            <div className="relative w-full aspect-[9/16] max-h-[75vh] rounded-[2rem] overflow-hidden bg-zinc-200 dark:bg-zinc-900 shadow-xl shadow-blue-900/5 dark:shadow-none border border-zinc-200 dark:border-zinc-800">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={projectImages[hoveredIndex]}
                    alt="Project Preview"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="w-2/3 flex flex-col pt-0">
            <div className="border-t border-zinc-300 dark:border-zinc-800">
              {t.projects.items.map((project, index) => (
                <motion.div
                  key={`desktop-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onClick={() => setSelectedProject(index)}
                  className="group flex items-center justify-between py-6 lg:py-8 border-b border-zinc-300 dark:border-zinc-800 cursor-pointer hover:px-6 -mx-6 transition-all duration-500"
                >
                  <div className="flex flex-col gap-1.5 relative z-10">
                    <span className="text-blue-600 dark:text-blue-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest">
                      0{index + 1} {"//"} {project.category.split("•")[0]}
                    </span>
                    
                    <h3 className="text-2xl lg:text-4xl font-black text-zinc-900 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors duration-300 tracking-tight">
                      {project.title}
                    </h3>
                    
                    <div className="hidden md:flex flex-wrap gap-2 mt-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-[9px] uppercase font-bold text-zinc-500 tracking-wider">
                          {tech} {i < project.tech.length - 1 && "•"}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-zinc-300 dark:border-zinc-700 items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 -rotate-45 group-hover:rotate-0 shadow-sm shrink-0">
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* =========================================
          MODAL POP-UP (Universal untuk HP & Desktop)
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
                
                {/* Header Image Modal */}
                <div className="relative w-full h-[180px] sm:h-[260px] bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
                  <Image src={projectImages[selectedProject]} alt={t.projects.items[selectedProject].title} fill className="object-cover" />
                  <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 md:top-4 md:right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors shadow-sm">
                    <X className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

                {/* Body Content Modal */}
                <div className="p-5 md:p-8">
                  <div className="mb-5">
                    <span className="inline-block px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                      {t.projects.items[selectedProject].category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
                      {t.projects.items[selectedProject].title}
                    </h3>
                  </div>

                  <div className="mb-6">
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {t.projects.items[selectedProject].description}
                    </p>
                  </div>

                  <div className="mb-8 p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-xl border border-zinc-100 dark:border-zinc-800/50">
                    <h4 className="text-[11px] font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-3">Teknologi & Perangkat</h4>
                    <div className="flex flex-wrap gap-2">
                      {t.projects.items[selectedProject].tech.map((techItem, i) => (
                        <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 text-[11px] font-bold rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm hover:border-blue-500 hover:text-blue-600 transition-colors">
                          {getTechIcon(techItem)}
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex w-full sm:w-auto gap-3 order-2 sm:order-1">
                      <a href="#" className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-3 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold text-xs rounded-xl transition-colors">
                        <Github className="w-4 h-4" /> Code
                      </a>
                      <a href="#" className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-600/20">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    </div>
                    
                    {/* Tombol Kembali dengan Fill Tipis dan Ikon Kiri */}
                    <button 
                      onClick={() => setSelectedProject(null)} 
                      className="w-full sm:w-auto px-5 py-3 bg-zinc-100/80 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold text-xs rounded-xl transition-colors order-1 sm:order-2 flex items-center justify-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" /> Kembali ke galeri
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