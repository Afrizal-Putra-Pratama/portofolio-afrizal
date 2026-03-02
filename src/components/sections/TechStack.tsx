"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

import { 
  SiFigma, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiPhp, SiLaravel, SiMysql, SiFirebase, 
  SiGit, SiPython, SiVercel, SiPostman, SiNotion 
} from "react-icons/si";
import { LayoutTemplate, Users, MonitorSmartphone, Layers, Blocks, Server, Activity, TerminalSquare } from "lucide-react";

const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  
  if (s.includes("figma")) return <SiFigma className="w-5 h-5 text-[#F24E1E]" />;
  if (s.includes("design system")) return <Layers className="w-5 h-5 text-purple-500" />;
  if (s.includes("research")) return <Users className="w-5 h-5 text-blue-500" />;
  if (s.includes("wirefram")) return <LayoutTemplate className="w-5 h-5 text-zinc-500" />;
  if (s.includes("prototyp")) return <MonitorSmartphone className="w-5 h-5 text-pink-500" />;
  
  if (s.includes("react")) return <SiReact className="w-5 h-5 text-[#61DAFB]" />;
  if (s.includes("next")) return <SiNextdotjs className="w-5 h-5 text-black dark:text-white" />;
  if (s.includes("tailwind")) return <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />;
  if (s.includes("framer")) return <SiFramer className="w-5 h-5 text-black dark:text-white" />;
  if (s.includes("shadcn") || s.includes("aceternity")) return <Blocks className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />;
  
  if (s.includes("php")) return <SiPhp className="w-6 h-6 text-[#777BB4]" />;
  if (s.includes("laravel")) return <SiLaravel className="w-5 h-5 text-[#FF2D20]" />;
  if (s.includes("mysql")) return <SiMysql className="w-6 h-6 text-[#4479A1]" />;
  if (s.includes("firebase")) return <SiFirebase className="w-5 h-5 text-[#FFCA28]" />;
  
  if (s.includes("git")) return <SiGit className="w-5 h-5 text-[#F05032]" />;
  if (s.includes("vercel")) return <SiVercel className="w-5 h-5 text-black dark:text-white" />;
  if (s.includes("postman")) return <SiPostman className="w-5 h-5 text-[#FF6C37]" />;
  if (s.includes("notion")) return <SiNotion className="w-5 h-5 text-black dark:text-white" />;
  if (s.includes("vps") || s.includes("deploy")) return <Server className="w-5 h-5 text-emerald-500" />;
  if (s.includes("python")) return <SiPython className="w-5 h-5 text-[#3776AB]" />;
  if (s.includes("mediapipe")) return <Activity className="w-5 h-5 text-cyan-500" />;

  return <TerminalSquare className="w-5 h-5 text-zinc-400" />;
};

export default function TechStack() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const categories = t.techStack.categories;

  return (
    // PERUBAHAN: Menghapus min-h-[80vh] dan mengubah padding bawah (pb) menjadi lebih kecil
    <section className="pt-20 md:pt-24 pb-10 md:pb-12 px-4 sm:px-6 lg:px-12 bg-white dark:bg-zinc-950 transition-colors duration-300" id="tech">
      <div className="max-w-4xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight uppercase mb-3">
            {t.techStack.title}
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mb-4" />
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-lg">
            {t.techStack.subtitle}
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-2xl w-full sm:w-max border border-zinc-200 dark:border-zinc-800">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative flex-1 sm:flex-none min-w-[130px] sm:min-w-0 px-4 py-3 sm:py-2.5 text-xs md:text-sm font-bold rounded-xl transition-colors duration-300 z-10 ${
                  activeTab === index 
                    ? "text-blue-600 dark:text-white" 
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                }`}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-700"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* PERUBAHAN: Menyesuaikan min-height agar tidak menyisakan ruang kosong besar */}
        <div className="min-h-[220px] relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {categories[activeTab].skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group flex items-center gap-3 px-4 py-3 md:px-5 md:py-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-800 transition-all cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center border border-zinc-100 dark:border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                    {getSkillIcon(skill)}
                  </div>
                  <span className="text-sm md:text-base font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}