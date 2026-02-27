"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

// Ikon dipisahkan dari teks karena ikon tidak perlu diterjemahkan
const icons = [
  <Users key="1" className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />,
  <BookOpen key="2" className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />,
  <Award key="3" className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />,
  <GraduationCap key="4" className="w-6 h-6 text-zinc-600 dark:text-zinc-300" />
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-white dark:bg-zinc-950 transition-colors duration-300" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.experience.items.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-transparent flex items-center justify-center mb-6 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-700 transition-colors">
                {/* Memanggil ikon berdasarkan indeks */}
                {icons[index]}
              </div>
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-2 block">{exp.period}</span>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{exp.title}</h3>
              <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4">{exp.organization}</h4>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}