"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power4.out",
                duration: 1.2
            }
        });

        gsap.set([`.${styles.logoLine}`, `.${styles.navLink}`], {
            y: "110%"
        });

        tl.to(`.${styles.logoLine}`, {
            y: "0%",
            delay: 3.3,
            stagger: 0.1
        })
        .to(`.${styles.navLink}`, {
            y: "0%",
            stagger: 0.08
        }, "-=1.0");

    }, { scope: headerRef });

    return (
        <header className={styles.header} ref={headerRef}>
            <nav className={`${styles.nav} ${styles.leftNav}`}>
                <div className={styles.linkWrapper}>
                    <Link href="#about" className={styles.navLink}>ABOUT</Link>
                </div>
                <div className={styles.linkWrapper}>
                    <Link href="#pillars" className={styles.navLink}>PILLARS</Link>
                </div>
            </nav>

            <Link href="/" className={styles.logoContainer}>
                <div className={styles.logoWrapper}>
                    <span className={styles.logoLine}>Lueur</span>
                </div>
                <div className={styles.logoWrapper}>
                    <span className={styles.logoLine}>Étoile</span>
                </div>
            </Link>

            <nav className={`${styles.nav} ${styles.rightNav}`}>
                <div className={styles.linkWrapper}>
                    <Link href="#lineage" className={styles.navLink}>LINEAGE</Link>
                </div>
                <div className={styles.linkWrapper}>
                    <Link href="#shop" className={styles.navLink}>SHOP</Link>
                </div>
            </nav>
        </header>
    );
}