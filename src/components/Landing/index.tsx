"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const titleText = "FIERCE KINDNESS";
const desText = (
    <>
        The&nbsp;&nbsp;Gentle&nbsp;&nbsp;Symbol <br /> of&nbsp;&nbsp;Hope
    </>
);

export default function Landing() {
    const landingRef = useRef<HTMLDivElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);
    const loaderTextRef = useRef<HTMLDivElement>(null);
    const firstImageContainerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);
    const desRef = useRef<HTMLDivElement>(null);
    const leftDesRef = useRef<HTMLDivElement>(null);
    const rightDesRef = useRef<HTMLDivElement>(null);
    const capsuleRef = useRef<HTMLDivElement>(null);
    const leftImageContainer = useRef<HTMLDivElement>(null);
    const rightImageContainer = useRef<HTMLDivElement>(null);
    const desTextRef = useRef<HTMLHeadingElement>(null);

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
            rotation: -6
        });
        gsap.set(progressRef.current, {
            scaleX: 0,
            transformOrigin: "left center"
        });
        gsap.set(`.${styles.mainImage}`, {
            opacity: 0
        });
        gsap.set(titleRef.current, {
            y: "110%"
        });
        gsap.set([`.${styles.loadingWord}`, `.${styles.loaderTitle}`], {
            y: "100%"
        });
        gsap.set(desTextRef.current, {
            y: "110%" 
        });

        tl.to([`.${styles.loadingWord}`, `.${styles.loaderTitle}`], {
            y: "0%",
            duration: 1,
            stagger: 0.1,
            ease: "power4.out"
        });

        const counterObj = { value: 0 };

        tl.to(progressRef.current, {
            scaleX: 1,
            duration: 1.4,
            ease: "power2.inOut"
        }, "-=0.4")
        .to(counterObj, {
            value: 100,
            duration: 1.6,
            ease: "power2.inOut",
            onUpdate: () => {
                if (counterRef.current) {
                    counterRef.current.innerText = String(Math.floor(counterObj.value)).padStart(3, '0');
                }
            }
        }, "<")
        .to(loaderTextRef.current, {
            opacity: 0,
            duration: 0.41,
        })
        .to(firstImageContainerRef.current, {
            rotation: 0,
            width: "100vw",
            height: "100vh",
            duration: 1.2,
            ease: "power4.inOut"
        }, "-=0.2")
        .to(progressRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=1.5")
        .to(`.${styles.mainImage}`, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
        }, "-=1.5")
        .to(titleRef.current, {
            y: "0%",
            duration: 1,
            ease: "power3.out"
        }, "-=.4")
        
        
        
        .to(desRef.current, {
            opacity: 1,
            duration: 0.8
        }, "-=0.5")
        

        
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: landingRef.current,
                start: "top top",
                end: "+=4500", 
                scrub: 1,      
                pin: true,     
                invalidateOnRefresh: true,
            }
        });

        scrollTl.to(leftDesRef.current, { 
            clipPath: "inset(0% 0% 0% 0%)", 
            ease: "none", 
            duration: 2 
        })
        .to(rightDesRef.current, { 
            clipPath: "inset(0% 0% 0% 0%)", 
            ease: "none", 
            duration: 2 
        }, "<") 
        .to(loaderRef.current, { 
            opacity: 0, 
            ease: "none", 
            duration: 2 
        }, "<")

        .to(capsuleRef.current, { 
            opacity: 1, 
            duration: 0.1, 
            ease: "none" 
        }, 1.9)


        .to(capsuleRef.current, { 
            rotation: 80, 
            height: "85vh",
            duration: 3, 
            ease: "power2.out" 
        }, "+=0.2")


        .to(capsuleRef.current, { 
            backgroundColor: "#D71C30", 
            height: "0vh", 
            duration: 2, 
            ease: "power2.inOut" 
        }, "+=0.2")
        .to(`.${styles.leftDes} .${styles.textContainer}`, { 
            left: "50%", 
            duration: 2, 
            ease: "power2.inOut" 
        }, "<") 
        .to(`.${styles.rightDes} .${styles.textContainer}`, { 
            right: "50%", 
            duration: 2, 
            ease: "power2.inOut" 
        }, "<") 

        .to(leftImageContainer.current, { 
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 3,
            ease: "power2.out"
        }, "+=0.1")
        .to(rightImageContainer.current, { 
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 3,
            ease: "power2.out"
        }, "<")

        .to(desTextRef.current, { 
            y: "0%",
            duration:1.5,
            ease: "power2.out"
        }, "-=0.8")

    }, { scope: landingRef });

    return (
        <section className={styles.landing} ref={landingRef}>
            <div className={styles.loader} ref={loaderRef}>
                <div ref={loaderTextRef} className={styles.loaderContainer}>
                    <div className={styles.textMask}>
                        <p className={styles.loadingWord}>
                            LOADING...<span ref={counterRef}>000</span>
                        </p>
                    </div>
                    <div className={styles.textMask}>
                        <h2 className={styles.loaderTitle}>Truth:<br /> I&#39;m the Shadows</h2>
                    </div>
                </div>
                <div className={styles.firstImageContainer} ref={firstImageContainerRef}>
                    <Image
                        src="/images/main.jpg"
                        alt="Landing"
                        fill
                        priority
                        quality={100}
                        unoptimized
                        className={styles.mainImage}
                    />
                    <div ref={progressRef} className={styles.progressBar} />
                </div>
                <div className={styles.titleWrapper}>
                    <h1 ref={titleRef}>
                        {titleText}
                    </h1>
                </div>
            </div>

            <div className={styles.des} ref={desRef}>
                <div className={styles.desTextContainer}>
                    <h1 ref={desTextRef}>{desText}</h1>
                </div>
                <div className={styles.leftDes} ref={leftDesRef}>
                    <div className={styles.leftImageContainer} ref={leftImageContainer}>
                        <Image
                            src="/images/warmth.jpg"
                            alt="left des"
                            fill
                            priority
                            quality={100}
                            unoptimized
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={styles.subHeading}>Meaning:</span>
                        <h1 className={styles.heading}>Lueur</h1>
                        <p className={styles.paragraph}>
                            Represents a soft, gentle light, often associated with hope, warmth, and quiet optimism.
                        </p>
                    </div>
                </div>

                <div className={styles.capsule} ref={capsuleRef} />

                <div className={styles.rightDes} ref={rightDesRef}>
                    <div className={styles.rightImageContainer} ref={rightImageContainer}>
                        <Image
                            src="/images/blue.jpg"
                            alt="right des"
                            fill
                            priority
                            quality={100}
                            unoptimized
                        />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.splitSub}>
                            <span>Creative</span>
                            <span>Studio</span>
                        </div>
                        <h1 className={styles.heading}>Étoile</h1>
                        <p className={styles.paragraph}>
                            Symbolizes hope, guidance, ambition, and the light that shines even in the darkest moments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}