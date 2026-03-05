"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

// Array link berurutan sesuai dengan daftar di dictionary Anda
const archiveLinks = [
  "https://www.figma.com/proto/zJMPCRney6lcxfUp5r5Wup/CAPSTONE?node-id=328-1609&t=u5cHQxKk3J2Du3VE-1", // 1. Signargi
  "https://www.figma.com/proto/lAcwho98VwPjYi7EXoSYTM/Techno?node-id=0-1&t=KnTxjD5cwcZ3oKLU-1", // 2. Platipus
  "https://www.figma.com/proto/8ti5er1MGp3FvrPjNX9fa3/Lomba-Riset-Sawit?node-id=27-2890&starting-point-node-id=12%3A88", // 3. Satern
  "https://www.figma.com/proto/KvMj06JQKeVmduwgs8J3pd/Eco-Actions?node-id=0-1&t=Tzic8cc3NCMxtNZh-1", // 4. EcoAction
  "https://www.figma.com/proto/igJjQpJVwxEWrVrgrTNPBa/Dinacom-Ui---Girantra?node-id=15-98&t=q0j8uMmmB2ArQ7TQ-1", // 5. Girantra
  "https://www.figma.com/proto/RMb1Ard8N96zbNk9SGLrTj/UMKM-Tas-Bu-Hartono?node-id=738-1728&t=8kIjRmuLz616nF12-1", // 6. Toko Buhartono
  "https://www.figma.com/proto/T6E9hAV1xkztl9cDGacLJN/parky?node-id=313-424&t=deKF589IApW07A6J-1", // 7. Parky
  "https://www.figma.com/proto/lQl9nhpII1kLuXNBijU1mi/quran-qolbu?node-id=17-154&t=zU1oxLDHZCLKJcTK-1", // 8. Quran Qolbu
  "https://www.figma.com/proto/OzoIxZGinwMz7wpYsU4Yo4/BIG-PROJET?node-id=54-222", // 9. UMS UIID (Pengganti MyPresensi UMS)
  "https://www.figma.com/proto/ccpavcW9mk9Z6uiQNmUZM1/Tugas-APS-%7C-IMK?node-id=0-1&t=WJ7hsLWdENp6fJm3-1", // 10. Capcut App
  "https://www.figma.com/design/c801KY8hyBAKxZtZhhPYOz/OVER-CONTENT?node-id=0-1&t=cC4xVCPE3VMBpPYd-1", // 11. Overcontent
  "https://www.figma.com/design/tadFm4F3wf8Lore0IedT4q/ID-CARD-WAVE-PROJECT?node-id=0-1&t=dezTSWsJt3o9boB1-1" // 12. Dewave
];

export default function Archive() {
  const { t } = useLanguage();

  return (
    <section className="pt-10 md:pt-12 pb-20 md:pb-24 px-4 sm:px-6 lg:px-12 bg-white dark:bg-zinc-950 transition-colors duration-300" id="archive">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight uppercase mb-3">
            {t.archive.title}
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mb-4" />
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-lg">
            {t.archive.subtitle}
          </p>
        </motion.div>

        {/* TAMPILAN MOBILE */}
        <div className="flex flex-col gap-4 md:hidden">
          {t.archive.items.map((item, index) => {
            // Mengubah nama MyPresensi UMS menjadi UMS UIID secara otomatis
            const projectName = item.project === "MyPresensi UMS" ? "UMS UIID" : item.project;
            
            return (
              <motion.a
                href={archiveLinks[index] || "#"}
                target="_blank"
                rel="noopener noreferrer"
                key={`mobile-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col p-5 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-blue-300 dark:hover:border-blue-800 transition-all active:scale-95 relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base font-black text-zinc-900 dark:text-white leading-tight pr-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {projectName}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 shrink-0 mt-0.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                
                <div className="flex flex-col gap-2 mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 w-16">Peran:</span>
                    <span className="text-[11px] font-bold text-zinc-700 dark:text-zinc-300 px-2.5 py-1 bg-white dark:bg-zinc-800 rounded-md border border-zinc-200 dark:border-zinc-700 shadow-sm">
                      {item.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 w-16">Kategori:</span>
                    <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* TAMPILAN DESKTOP */}
        <div className="hidden md:block w-full">
          <div className="grid grid-cols-12 gap-4 px-6 pb-4 border-b-2 border-zinc-200 dark:border-zinc-800 text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            <div className="col-span-5">{t.archive.headers.project}</div>
            <div className="col-span-3">{t.archive.headers.role}</div>
            <div className="col-span-3">{t.archive.headers.category}</div>
            <div className="col-span-1 text-right">{t.archive.headers.link}</div>
          </div>

          <div className="flex flex-col">
            {t.archive.items.map((item, index) => {
              // Mengubah nama MyPresensi UMS menjadi UMS UIID secara otomatis
              const projectName = item.project === "MyPresensi UMS" ? "UMS UIID" : item.project;

              return (
                <motion.a
                  href={archiveLinks[index] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`desktop-${index}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group grid grid-cols-12 gap-4 items-center px-6 py-5 border-b border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors"
                >
                  <div className="col-span-5 flex items-center gap-3">
                    <h3 className="text-sm lg:text-base font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {projectName}
                    </h3>
                  </div>

                  <div className="col-span-3">
                    <span className="text-xs lg:text-sm text-zinc-500 dark:text-zinc-400">
                      {item.role}
                    </span>
                  </div>

                  <div className="col-span-3">
                    <span className="inline-block px-3 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 text-[11px] font-bold rounded-full border border-zinc-200 dark:border-zinc-800 group-hover:border-blue-200 dark:group-hover:border-blue-900/50 transition-colors">
                      {item.category}
                    </span>
                  </div>

                  <div className="col-span-1 flex justify-end">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400 transition-all -translate-x-2 group-hover:translate-x-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}