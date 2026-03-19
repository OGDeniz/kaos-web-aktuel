'use client';
import React from 'react';
import Image from 'next/image';
import styles from './ElevatorSection.module.css';

export default function ElevatorSection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.mainGrid}>
                    {/* Left: Image & Intro */}
                    <div className={styles.leftCol}>
                        <div className={styles.imageWrap}>
                            <Image
                                src="/webdesign.webp"
                                alt="KAOS Media Webdesignhintergrund"
                                width={1000}
                                height={800}
                                className={styles.image}
                            />
                        </div>
                        <p className={styles.leftText}>
                            Wir sind KAOS Media – eine kreative Einheit, die Struktur und Strategie mit Originalität
                            und radikaler Klarheit verbindet.
                        </p>
                    </div>

                    <div className={styles.rightCol}>
                        <div className={styles.headingBlock}>
                            <h2 className={styles.tagline}>Willkommen bei KAOS Media</h2>
                            <h1 className={styles.title}>
                                Struktur trifft <span className={styles.titleAccent}>auf Kreativität</span>
                            </h1>
                        </div>

                        {/* KAOS-Formel */}
                        <div className={styles.formulaBox}>
                            <h3 className={styles.formulaTitle}>Die KAOS-Formel</h3>
                            <ul className={styles.formulaList}>
                                <li><span className={styles.formulaLetter}>K</span>reativ</li>
                                <li><span className={styles.formulaLetter}>A</span>nalytisch</li>
                                <li><span className={styles.formulaLetter}>O</span>riginell</li>
                                <li><span className={styles.formulaLetter}>S</span>trukturiert</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomRow}>
                    <p className={styles.bottomText}>
                        All-in-One Marketinglösungen für Gründer &amp; KMU – ganzheitlich, transparent &amp; effektiv.
                    </p>
                </div>
            </div>
        </section>
    );
}
