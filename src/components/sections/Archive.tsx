"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

// Mendefinisikan struktur data secara eksplisit untuk mengatasi Error TypeScript
interface ArchiveItem {
  project: string;
  projectName: string;
  role: string;
  category: string;
  link: string;
}

const archiveLinks = [
  "https://www.figma.com/proto/zJMPCRney6lcxfUp5r5Wup/CAPSTONE?node-id=328-1609&t=u5cHQxKk3J2Du3VE-1", // 1. Signargi
  "https://www.figma.com/proto/lAcwho98VwPjYi7EXoSYTM/Techno?node-id=0-1&t=KnTxjD5cwcZ3oKLU-1", // 2. Platipus
  "https://www.figma.com/proto/8ti5er1MGp3FvrPjNX9fa3/Lomba-Riset-Sawit?node-id=27-2890&starting-point-node-id=12%3A88", // 3. Satern
  "https://www.figma.com/proto/KvMj06JQKeVmduwgs8J3pd/Eco-Actions?node-id=0-1&t=Tzic8cc3NCMxtNZh-1", // 4. EcoAction
  "https://www.figma.com/proto/igJjQpJVwxEWrVrgrTNPBa/Dinacom-Ui---Girantra?node-id=15-98&t=q0j8uMmmB2ArQ7TQ-1", // 5. Girantra
  "https://www.figma.com/proto/RMb1Ard8N96zbNk9SGLrTj/UMKM-Tas-Bu-Hartono?node-id=738-1728&t=8kIjRmuLz616nF12-1", // 6. Toko Buhartono
  "https://www.figma.com/proto/T6E9hAV1xkztl9cDGacLJN/parky?node-id=313-424&t=deKF589IApW07A6J-1", // 7. Parky
  "https://www.figma.com/proto/lQl9nhpII1kLuXNBijU1mi/quran-qolbu?node-id=17-154&t=zU1oxLDHZCLKJcTK-1", // 8. Quran Qolbu
  "https://www.figma.com/proto/OzoIxZGinwMz7wpYsU4Yo4/BIG-PROJET?node-id=54-222", // 9. UMS UIID 
  "https://www.figma.com/proto/ccpavcW9mk9Z6uiQNmUZM1/Tugas-APS-%7C-IMK?node-id=0-1&t=WJ7hsLWdENp6fJm3-1", // 10. Capcut App
  "https://www.figma.com/design/c801KY8hyBAKxZtZhhPYOz/OVER-CONTENT?node-id=0-1&t=cC4xVCPE3VMBpPYd-1", // 11. Overcontent
  "https://www.figma.com/design/tadFm4F3wf8Lore0IedT4q/ID-CARD-WAVE-PROJECT?node-id=0-1&t=dezTSWsJt3o9boB1-1" // 12. Dewave
];

export default function Archive() {
  const { t } = useLanguage();

  const allItems: ArchiveItem[] = t.archive.items.map((item, index) => ({
    ...item,
    link: archiveLinks[index] || "#",
    projectName: item.project === "MyPresensi UMS" ? "UMS UIID" : item.project,
  }));

  const row1 = allItems.slice(0, 4);
  const row2 = allItems.slice(4, 8);
  const row3 = allItems.slice(8, 12);

  return (
    <section className="pt-10 md:pt-12 pb-20 md:pb-24 bg-white dark:bg-zinc-950 transition-colors duration-300 overflow-hidden" id="archive">
      
      {/* CSS untuk menyembunyikan Scrollbar tapi tetap bisa di-scroll */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-10 md:mb-14 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight uppercase mb-3">
            {t.archive.title}
          </h2>
          <div className="w-10 h-1 bg-blue-600 rounded-full mb-4 mx-auto" />
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-lg">
            {t.archive.subtitle}
          </p>
        </motion.div>
      </div>

      <div className="relative w-full max-w-[100vw] flex flex-col gap-4 md:gap-5">
        
        {/* Efek Fade-Out di Kiri & Kanan Layar */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Ticker Rows */}
        <TickerRow items={row1} direction="right" />
        <TickerRow items={row2} direction="left" />
        <TickerRow items={row3} direction="right" />

      </div>
    </section>
  );
}

/* =========================================
   KOMPONEN TICKER ROW (DRAGGABLE & AUTO-SCROLL)
   ========================================= */
interface TickerRowProps {
  items: ArchiveItem[];
  direction: "left" | "right";
}

const TickerRow = ({ items, direction }: TickerRowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveredOrDragged = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = direction === "left" ? 1 : -1;

    // Mempersiapkan posisi awal agar loop tidak kosong
    if (direction === "right") {
      container.scrollLeft = container.scrollWidth / 3;
    }

    const autoScroll = () => {
      if (!isHoveredOrDragged.current && container) {
        container.scrollLeft += speed;

        // Logika Seamless Infinite Loop (Scroll menyambung tanpa putus)
        const singleSetWidth = container.scrollWidth / 3;
        
        if (direction === "left" && container.scrollLeft >= singleSetWidth) {
          container.scrollLeft -= singleSetWidth;
        } else if (direction === "right" && container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [direction]);

  // --- Fungsi Mouse Drag (Untuk Desktop) ---
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    isHoveredOrDragged.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    
    // Matikan klik link saat mulai drag
    if (containerRef.current) containerRef.current.style.pointerEvents = "none";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Kecepatan sensitivitas geser
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
    isHoveredOrDragged.current = false;
    
    // Nyalakan kembali klik link dengan sedikit delay (mencegah klik tak sengaja)
    setTimeout(() => {
      if (containerRef.current) containerRef.current.style.pointerEvents = "auto";
    }, 50);
  };

  return (
    <div 
      ref={containerRef}
      className="flex w-full overflow-x-auto py-1 cursor-grab active:cursor-grabbing hide-scrollbar"
      onMouseEnter={() => (isHoveredOrDragged.current = true)}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onTouchStart={() => (isHoveredOrDragged.current = true)}
      onTouchEnd={() => (isHoveredOrDragged.current = false)}
    >
      {/* Container utama dengan lebar maksimum yang sesuai */}
      <div className="flex w-max gap-3 md:gap-4 pr-3 md:pr-4">
        {/* Render 3 Set data sekaligus agar perputaran infinite loop mulus */}
        {[1, 2, 3].map((setIndex) => (
          <div key={`set-${setIndex}`} className="flex gap-3 md:gap-4">
            {items.map((item, idx) => (
              <ArchiveCard key={`card-${setIndex}-${idx}`} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================
   KOMPONEN KARTU UI/UX (COMPACT & RECTANGULAR)
   ========================================= */
const ArchiveCard = ({ item }: { item: ArchiveItem }) => (
  <a 
    href={item.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    draggable={false} // Mencegah browser menarik gambar/link secara default
    className="group w-[250px] md:w-[290px] shrink-0 bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 flex flex-col hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-2 pointer-events-none">
      <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[9px] md:text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider line-clamp-1">
        {item.category}
      </div>
      <div className="text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform duration-300 -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
        <ExternalLink size={14} />
      </div>
    </div>

    <h3 className="text-base md:text-lg font-black text-zinc-900 dark:text-white leading-tight tracking-tight line-clamp-1 pointer-events-none">
      {item.projectName}
    </h3>

    <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-1.5 pointer-events-none">
      <span className="text-[10px] text-zinc-500 font-medium">Peran:</span>
      <span className="text-[10px] md:text-xs font-bold text-zinc-700 dark:text-zinc-300 line-clamp-1">
        {item.role}
      </span>
    </div>
  </a>
);