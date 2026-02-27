"use client";

import React from "react";
import Image from "next/image"; // Menambahkan modul Image dari Next.js
import { motion } from "framer-motion";
import { ArrowUpRight, Database, Activity, Shield, Layout } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

// Menambahkan path gambar ke dalam konfigurasi visual
const visualConfig = [
  { 
    icon: <Database className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />, 
    span: "md:col-span-2",
    image: "/images/projects/project-1.jpg" // Ganti ekstensi jika Anda menggunakan .png
  },
  { 
    icon: <Activity className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />, 
    span: "md:col-span-1",
    image: "/images/projects/project-2.jpg"
  },
  { 
    icon: <Shield className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />, 
    span: "md:col-span-1",
    image: "/images/projects/project-3.jpg"
  },
  { 
    icon: <Layout className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />, 
    span: "md:col-span-2",
    image: "/images/projects/project-4.jpg"
  }
];

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-zinc-100/50 dark:bg-black transition-colors duration-300" id="projects">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-600 transition-all group relative overflow-hidden ${visualConfig[index].span}`}
            >
              {/* Gambar Background dengan Efek Fade */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={visualConfig[index].image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-10 group-hover:opacity-30 dark:opacity-20 dark:group-hover:opacity-40 transition-opacity duration-500"
                />
                {/* Gradient Overlay agar teks tetap terbaca tajam */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/10 dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-900/20" />
              </div>
              
              <div className="relative z-10 flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-zinc-50/80 dark:bg-zinc-800/80 backdrop-blur-sm border border-zinc-200 dark:border-transparent flex items-center justify-center">
                  {visualConfig[index].icon}
                </div>
                <button className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              <div className="relative z-10">
                <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((techItem, i) => (
                    <span key={i} className="px-3 py-1 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-full text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}