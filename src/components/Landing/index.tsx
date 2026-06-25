"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function Landing() {
    const landingRef = useRef<HTMLDivElement>(null);
    const loaderTextRef = useRef<HTMLDivElement>(null);
    const firstImageContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power4.inOut"
            }
        });

        gsap.set(firstImageContainerRef.current, {
            width: "120px",
            height: "6px",
            transformOrigin: "center center",
            rotation: -4
        });
        tl.to(loaderTextRef.current, {
            opacity: 0,
            duration: 0.6,
            delay: 1.5
        })
            .to(firstImageContainerRef.current, {
                rotation: 0,
                width: "100vw",
                height: "100vh",
                duration: 1.4,
            }, "-=0.2")

    }, { scope: landingRef });

    return (
        <section className={styles.landing} ref={landingRef}>
            <div ref={loaderTextRef} className={styles.loaderContainer}>
                <p className={styles.loadingWord}>LOADING...011</p>
                <h2 className={styles.loaderTitle}>Truth: I&#39;m the Shadows</h2>
            </div>
            <div className={styles.firstImageContainer} ref={firstImageContainerRef}>
                <Image
                    src="/images/batman.jpg"
                    alt="Landing"
                    fill
                    priority
                    quality={100}
                    unoptimized
                    />
            </div>
        </section>
    );
}