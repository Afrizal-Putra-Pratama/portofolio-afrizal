"use client";

import React, { useEffect } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <ReactLenis root options={{ 
      lerp: 0.2,            // Angka 0.2 sangat responsif (hampir instan, tidak ada delay)
      smoothWheel: true,
      wheelMultiplier: 1.2, // Jarak tempuh per putaran mouse diperjauh agar tidak pegal
      touchMultiplier: 2,   // Responsif untuk layar sentuh/trackpad
    }}>
      {children as any}
    </ReactLenis>
  );
}