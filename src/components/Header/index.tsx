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
        const tl = gsap.timeline({
            defaults: {
                ease: "power4.out",
                duration: 1.2
            }
        });

        gsap.set([logoRef.current, `.${styles.navLink}`], {
            y: "110%"
        });

        tl.to(logoRef.current, {
            y: "0%",
            delay: 3.3
        })
            .to(`.${styles.navLink}`, {
                y: "0%",
                stagger: 0.08
            }, "-=1.0");

    }, { scope: headerRef });

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.logoWrapper}>
                <Link href="/" ref={logoRef} className={styles.logo}>
                    VOYEUR
                </Link>
            </div>

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