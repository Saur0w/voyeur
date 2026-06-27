"use client";

import styles from "./page.module.css";
import Landing from "@/components/Landing";
import Header from "@/components/Header";
import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    lenis.on("scroll", ScrollTrigger.update);
    const updateTick = (time: number) => {
      lenis.raf(time * 1000); 
    };
    
    gsap.ticker.add(updateTick);
    gsap.ticker.lagSmoothing(0); 
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTick);
    };
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <Landing />
    </div>
  );
}