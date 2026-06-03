"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ArchiveItem {
  project: string;
  projectName: string;
  role: string;
  category: string;
  link: string;
}

const archiveLinks = [
  "https://www.figma.com/proto/zJMPCRney6lcxfUp5r5Wup/CAPSTONE?node-id=328-1609&t=u5cHQxKk3J2Du3VE-1", 
  "https://www.figma.com/proto/lAcwho98VwPjYi7EXoSYTM/Techno?node-id=0-1&t=KnTxjD5cwcZ3oKLU-1", 
  "https://www.figma.com/proto/8ti5er1MGp3FvrPjNX9fa3/Lomba-Riset-Sawit?node-id=27-2890&starting-point-node-id=12%3A88", 
  "https://www.figma.com/proto/KvMj06JQKeVmduwgs8J3pd/Eco-Actions?node-id=0-1&t=Tzic8cc3NCMxtNZh-1", 
  "https://www.figma.com/proto/igJjQpJVwxEWrVrgrTNPBa/Dinacom-Ui---Girantra?node-id=15-98&t=q0j8uMmmB2ArQ7TQ-1", 
  "https://www.figma.com/proto/RMb1Ard8N96zbNk9SGLrTj/UMKM-Tas-Bu-Hartono?node-id=738-1728&t=8kIjRmuLz616nF12-1", 
  "https://www.figma.com/proto/T6E9hAV1xkztl9cDGacLJN/parky?node-id=313-424&t=deKF589IApW07A6J-1", 
  "https://www.figma.com/proto/lQl9nhpII1kLuXNBijU1mi/quran-qolbu?node-id=17-154&t=zU1oxLDHZCLKJcTK-1", 
  "https://www.figma.com/proto/OzoIxZGinwMz7wpYsU4Yo4/BIG-PROJET?node-id=54-222",  
  "https://www.figma.com/proto/ccpavcW9mk9Z6uiQNmUZM1/Tugas-APS-%7C-IMK?node-id=0-1&t=WJ7hsLWdENp6fJm3-1", 
  "https://www.figma.com/design/c801KY8hyBAKxZtZhhPYOz/OVER-CONTENT?node-id=0-1&t=cC4xVCPE3VMBpPYd-1", 
  "https://www.figma.com/design/tadFm4F3wf8Lore0IedT4q/ID-CARD-WAVE-PROJECT?node-id=0-1&t=dezTSWsJt3o9boB1-1" 
];

export default function Archive() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const allItems: ArchiveItem[] = t.archive.items.map((item, index) => ({
    ...item,
    link: archiveLinks[index] || "#",
    projectName: item.project === "MyPresensi UMS" ? "UMS UIID" : item.project,
  }));

  const row1 = allItems.slice(0, 4);
  const row2 = allItems.slice(4, 8);
  const row3 = allItems.slice(8, 12);

  useGSAP(() => {
    gsap.fromTo(
      ".gsap-arc-reveal",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      id="archive" 
      ref={containerRef}
      className="relative pt-20 md:pt-28 pb-32 md:pb-40 bg-[#F4F4F5] dark:bg-[#111827] font-mono transition-colors duration-500 overflow-hidden"
    >
      
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left relative z-10">
        <div className="gsap-arc-reveal flex flex-col items-center md:items-start">
          <h2 className="text-[40px] md:text-[64px] lg:text-[80px] font-black text-[#111827] dark:text-[#FFFFFF] tracking-tighter uppercase leading-[0.9]">
            {t.archive.title}
          </h2>
          <p className="mt-4 md:mt-6 text-[#111827]/70 dark:text-[#FFFFFF]/70 text-[14px] md:text-[18px] max-w-xl font-medium">
            {t.archive.subtitle}
          </p>
        </div>
      </div>

      <div className="gsap-arc-reveal relative w-full max-w-[100vw] flex flex-col gap-4 md:gap-5 z-20">
        <TickerRow items={row1} direction="right" speedMultiplier={0.8} />
        <TickerRow items={row2} direction="left" speedMultiplier={1} />
        <TickerRow items={row3} direction="right" speedMultiplier={0.9} />
      </div>

    </section>
  );
}

/* =========================================
   KOMPONEN TICKER ROW (DIPERBAIKI)
   ========================================= */
interface TickerRowProps {
  items: ArchiveItem[];
  direction: "left" | "right";
  speedMultiplier?: number;
}

const TickerRow = ({ items, direction, speedMultiplier = 1 }: TickerRowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveredOrDragged = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = direction === "left" ? (1 * speedMultiplier) : (-1 * speedMultiplier);

    if (direction === "right") {
      container.scrollLeft = container.scrollWidth / 3;
    }

    const autoScroll = () => {
      if (!isHoveredOrDragged.current && container) {
        container.scrollLeft += speed;

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
  }, [direction, speedMultiplier]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    isHoveredOrDragged.current = true;
    
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].pageX;
    } else {
      clientX = e.pageX;
    }

    startX.current = clientX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    
    // PERBAIKAN: pointerEvents tidak dimatikan di sini agar tap tetap terbaca
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].pageX;
    } else {
      clientX = (e as React.MouseEvent).pageX;
    }

    const x = clientX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; 

    // PERBAIKAN: Hanya matikan pointerEvents (blokir klik) JIKA user menggeser lebih dari 5px
    if (Math.abs(x - startX.current) > 5) {
      if (e.cancelable) e.preventDefault(); 
      containerRef.current.style.pointerEvents = "none";
    }

    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
    isHoveredOrDragged.current = false;
    
    setTimeout(() => {
      if (containerRef.current) containerRef.current.style.pointerEvents = "auto";
    }, 50);
  };

  return (
    <div 
      ref={containerRef}
      className="flex w-full overflow-x-auto py-2 cursor-grab active:cursor-grabbing hide-scrollbar"
      onMouseEnter={() => (isHoveredOrDragged.current = true)}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUpOrLeave}
    >
      <div className="flex w-max gap-4 pr-4">
        {[1, 2, 3].map((setIndex) => (
          <div key={`set-${setIndex}`} className="flex gap-4">
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
   KOMPONEN KARTU NEO-BRUTALIST
   ========================================= */
const ArchiveCard = ({ item }: { item: ArchiveItem }) => (
  <a 
    href={item.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    draggable={false} 
    className="group w-[260px] md:w-[320px] shrink-0 bg-[#FFFFFF] dark:bg-[#111827] border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] p-5 flex flex-col shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#ea580c] dark:hover:shadow-[6px_6px_0px_0px_#ea580c] transition-all duration-300"
  >
    <div className="flex justify-between items-start mb-4 gap-3 pointer-events-none">
      <div className="bg-[#111827] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#111827] text-[10px] md:text-[12px] font-black px-3 py-1.5 rounded-[4px] uppercase tracking-widest border-[2px] border-[#111827] dark:border-[#FFFFFF] flex-1 overflow-hidden">
        <div className="truncate w-full">{item.category}</div>
      </div>
      
      <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#ea580c] rounded-[4px] border-[2px] border-[#111827] dark:border-[#FFFFFF] shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#FFFFFF] text-[#FFFFFF] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
        <ExternalLink size={16} />
      </div>
    </div>

    <h3 className="text-[20px] md:text-[24px] font-black text-[#111827] dark:text-[#FFFFFF] uppercase tracking-tighter leading-none truncate pointer-events-none mb-4 group-hover:text-[#ea580c] transition-colors">
      {item.projectName}
    </h3>

    <div className="mt-auto pt-4 border-t-[3px] border-[#111827]/10 dark:border-[#FFFFFF]/10 flex flex-col gap-1 pointer-events-none overflow-hidden">
      <span className="text-[10px] text-[#111827]/60 dark:text-[#FFFFFF]/60 font-black uppercase tracking-widest">ROLE</span>
      <span className="text-[12px] md:text-[14px] font-bold text-[#111827] dark:text-[#FFFFFF] uppercase tracking-tight truncate">
        {item.role}
      </span>
    </div>
  </a>
);