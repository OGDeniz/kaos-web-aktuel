"use client";
import Image from "next/image";
import Navbar from "../ui/navigation/Navbar";
import ClaimBar from "./ClaimBar";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Footer from "../ui/Footer";
import GrayLayout from "../../layouts/GrayLayout";
import styles from "./AboutUs.module.css";

const valuesLeft = [
    { label: "KREATIV" },
    { label: "ORIGINELL" },
];
const valuesRight = [
    { label: "ANALYTISCH" },
    { label: "STRUKTURIERT" },
];

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '800'],
});

const AboutSection = () => {
    return (
        <GrayLayout>
            <ClaimBar text="KAOS Media – Kreativität trifft Struktur – PERFEKTION ENTSTEHT NUR IM KAOS – BRANDING – WEBDESIGN – SOCIAL MEDIA – STRATEGIE" />
            <Navbar />
            <section className={styles.section}>
                <div className={styles.blobRed} />
                <div className={styles.blobBlue} />

                <div className={styles.inner}>
                    {/* HEADLINE */}
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={styles.headline}
                    >
                        Über uns – die Macher von KAOS Media
                    </motion.h2>

                    {/* GRID */}
                    <div className={styles.grid}>
                        {/* Werte links */}
                        <div className={styles.valuesLeft}>
                            {valuesLeft.map((v) => (
                                <div key={v.label} className={styles.valueLabelLeft}>
                                    <p className={styles.valueLabelLeftText}>{v.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Bild Flo */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className={styles.photoCell}
                        >
                            <Image
                                src="/aboutus/flo1.jpg"
                                alt="Foto Florian"
                                width={220}
                                height={220}
                                className={styles.photo}
                                priority
                            />
                        </motion.div>

                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={[styles.logoCell, montserrat.className].join(' ')}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/KAOSmedia.svg"
                                alt="KAOS Media Logo"
                                width={900}
                                height={900}
                                className={styles.logoImg}
                            />
                            <span className={styles.logoLabel}>KAOS Media</span>
                        </motion.div>

                        {/* Bild Deniz */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className={styles.photoCell}
                        >
                            <Image
                                src="/aboutus/deniz1.jpg"
                                alt="Foto Deniz"
                                width={220}
                                height={220}
                                className={styles.photo}
                                priority
                            />
                        </motion.div>

                        {/* Werte rechts */}
                        <div className={styles.valuesRight}>
                            {valuesRight.map((v) => (
                                <div key={v.label} className={styles.valueLabelRight}>
                                    <p className={styles.valueLabelRightText}>{v.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={styles.textCard}
                    >
                        <p>
                            <span className={styles.highlightRed}>Wir sind KAOS Media</span> – die Boutique-Agentur für Gründer, Startups und KMU, die Großes vorhaben.
                            Hinter KAOS stehen <span className={styles.highlightBlue}>Florian</span> und <span className={styles.highlightBlue}>Deniz</span> – zwei erfahrene Unternehmer mit echten Höhen, Tiefen und Visionen.
                        </p>
                        <p>
                            Unsere Stärke liegt im Spagat zwischen kreativer Freiheit und analytischer Präzision.
                            Wir kombinieren Technologie, Strategie und Herzblut zu messbarem Erfolg – <span className={styles.italicRed}>ohne Bullshit</span>.
                        </p>
                    </motion.div>

                    {/* Werte mobil */}
                    <div className={styles.valuesMobile}>
                        <div className={styles.valuesMobileCol}>
                            {valuesLeft.map((v) => (
                                <div key={v.label} className={styles.valueMobileLeft}>
                                    <p className={styles.valueLabelLeftText}>{v.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className={styles.valuesMobileCol}>
                            {valuesRight.map((v) => (
                                <div key={v.label} className={styles.valueMobileRight}>
                                    <p className={styles.valueLabelRightText}>{v.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className={styles.ctaWrap}
                    >
                        <a href="/kontakt" className={styles.ctaLink}>
                            Jetzt Erstgespräch sichern
                        </a>
                    </motion.div>

                    {/* ZITAT */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className={styles.quote}
                    >
                        <p className={styles.quoteText}>
                            "Kreativität trifft Struktur – PERFEKTION ENTSTEHT NUR IM KAOS"
                        </p>
                        <footer className={styles.quoteFooter}>– KAOS Media Team</footer>
                    </motion.blockquote>

                </div>
            </section>
            <Footer />
        </GrayLayout>
    );
};

export default AboutSection;
