"use client";

import React from "react";
import { motion } from "framer-motion";
import { PenTool, Code2, Server, Terminal, LayoutTemplate, Users, Layers, MonitorPlay, Sparkles, Activity } from "lucide-react";
// Import logo asli dari react-icons
import { SiFigma, SiReact, SiNextdotjs, SiTailwindcss, SiFramer, SiPhp, SiLaravel, SiNodedotjs, SiMysql, SiFirebase, SiGit, SiPython } from "react-icons/si";
import { useLanguage } from "../LanguageProvider";

const icons = [
  <PenTool key="1" className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />,
  <Code2 key="2" className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />,
  <Server key="3" className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />,
  <Terminal key="4" className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
];

// Fungsi pemeta logo: Mencocokkan nama skill dengan logonya
const getSkillIcon = (skill: string) => {
  switch (skill) {
    // Logo Brand Asli
    case "Figma": return <SiFigma className="w-4 h-4 text-[#F24E1E]" />;
    case "React": return <SiReact className="w-4 h-4 text-[#61DAFB]" />;
    case "Next.js": return <SiNextdotjs className="w-4 h-4 text-black dark:text-white" />;
    case "Tailwind CSS": return <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />;
    case "Framer Motion": return <SiFramer className="w-4 h-4 text-black dark:text-white" />;
    case "PHP": return <SiPhp className="w-4 h-4 text-[#777BB4]" />;
    case "Laravel": return <SiLaravel className="w-4 h-4 text-[#FF2D20]" />;
    case "Node.js": return <SiNodedotjs className="w-4 h-4 text-[#339933]" />;
    case "MySQL": return <SiMysql className="w-4 h-4 text-[#4479A1]" />;
    case "Firebase (FCM)": return <SiFirebase className="w-4 h-4 text-[#FFCA28]" />;
    case "Git": return <SiGit className="w-4 h-4 text-[#F05032]" />;
    case "Python": return <SiPython className="w-4 h-4 text-[#3776AB]" />;
    
    // Ikon Konseptual (Untuk skill yang bukan brand)
    case "Design Systems": return <LayoutTemplate className="w-4 h-4 text-zinc-500" />;
    case "User Research": return <Users className="w-4 h-4 text-zinc-500" />;
    case "Wireframing": return <Layers className="w-4 h-4 text-zinc-500" />;
    case "High-Fidelity Prototyping": return <MonitorPlay className="w-4 h-4 text-zinc-500" />;
    case "Shadcn UI": return <div className="w-3 h-3 rounded-full bg-black dark:bg-white border border-zinc-300 dark:border-zinc-700" />;
    case "Aceternity": return <Sparkles className="w-4 h-4 text-zinc-500" />;
    case "VPS Deployment": return <Server className="w-4 h-4 text-zinc-500" />;
    case "Mediapipe": return <Activity className="w-4 h-4 text-zinc-500" />;
    default: return null;
  }
};

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-white dark:bg-zinc-950 transition-colors duration-300" id="tech-stack">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {t.techStack.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            {t.techStack.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.techStack.categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-zinc-200 dark:border-zinc-800 pt-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    // ANIMASI HOVER DITAMBAHKAN DI SINI
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-md transition-colors rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 cursor-pointer"
                  >
                    {getSkillIcon(skill)}
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}