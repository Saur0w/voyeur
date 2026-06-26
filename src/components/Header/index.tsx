"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);

    useGSAP(() => {
        // Set up the entrance timeline
        const tl = gsap.timeline({
            defaults: {
                ease: "power4.out",
                duration: 1.2
            }
        });

        // 1. Position elements out of view inside their mask containers
        gsap.set([logoRef.current, `.${styles.navLink}`], {
            y: "100%"
        });

        // 2. Elegantly slide them up after the central loader has expanded
        tl.to(logoRef.current, {
            y: "0%",
            delay: 2.2 // Syncs up beautifully right as the hero expansion stabilizes
        })
            .to(`.${styles.navLink}`, {
                y: "0%",
                stagger: 0.08 // Staggers the links slightly from left to right
            }, "-=1.0"); // Overlaps with the logo reveal for fluidity

    }, { scope: headerRef });

    return (
        <header className={styles.header} ref={headerRef}>
            {/* Logo Mask */}
            <div className={styles.logoWrapper}>
                <Link href="/" ref={logoRef} className={styles.logo}>
                    GOTHAM // ARCHIVE
                </Link>
            </div>

            {/* Navigation Links Mask Group */}
            <nav className={styles.nav}>
                <div className={styles.linkWrapper}>
                    <Link href="#journal" className={styles.navLink}>THE JOURNAL</Link>
                </div>
                <div className={styles.linkWrapper}>
                    <Link href="#clash" className={styles.navLink}>THE SHADOWS</Link>
                </div>
                <div className={styles.linkWrapper}>
                    <Link href="#transformation" className={styles.navLink}>THE MISSION</Link>
                </div>
            </nav>
        </header>
    );
}