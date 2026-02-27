"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function Archive() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-zinc-50 dark:bg-black transition-colors duration-300" id="archive">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {t.archive.title}
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            {t.archive.subtitle}
          </p>
        </motion.div>

        <div className="w-full">
          {/* Header Tabel */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-zinc-200 dark:border-zinc-800 text-sm font-semibold text-zinc-500 mb-2">
            <div className="col-span-2">{t.archive.headers.year}</div>
            <div className="col-span-4">{t.archive.headers.project}</div>
            <div className="col-span-3">{t.archive.headers.role}</div>
            <div className="col-span-3">{t.archive.headers.category}</div>
          </div>

          <div className="flex flex-col">
            {t.archive.items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-5 border-b border-zinc-200 dark:border-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors group items-center"
              >
                <div className="md:col-span-2 text-zinc-500 text-sm font-mono">{item.year}</div>
                
                <div className="md:col-span-4 font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition-colors flex items-center gap-2">
                  {item.project}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hidden md:block" />
                </div>
                
                <div className="md:col-span-3 text-zinc-600 dark:text-zinc-400 text-sm">{item.role}</div>
                <div className="md:col-span-3 text-zinc-500 text-sm">{item.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}