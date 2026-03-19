"use client";
import { motion } from "framer-motion";
import Navbar from "../ui/navigation/Navbar";
import CTASection from "./CTASection";
import ClaimBar from "./ClaimBar";
import Footer from "../ui/Footer";
import styles from "./Philosophy.module.css";

const PhilosophySection = () => {
    return (
        <div className={styles.wrapper}>
        <section className={styles.section}>
            <div className={styles.inner}>

                <ClaimBar text="KAOS Media – Kreativität trifft Struktur – PERFEKTION ENTSTEHT NUR IM KAOS – BRANDING – WEBDESIGN – SOCIAL MEDIA – STRATEGIE" />
                <Navbar />
                {/* HEADLINE */}
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.headline}
                >
                    Perfektion entsteht nur mit{" "}
                    <span className={styles.headlineAccent}>KAOS</span>
                </motion.h1>

                {/* INTRO */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.intro}
                >
                    Wir sind KAOS Media – die Agentur, bei der alles zusammenpasst: Webdesign, SEO, SEA, Social Media &amp; AI-Marketing, Branding und Positionierung – aus einer Hand, perfekt aufeinander abgestimmt.
                </motion.p>

                {/* FLEX LAYOUT */}
                <div className={styles.flexLayout}>

                    {/* TEXTBLOCK */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className={styles.textBlock}
                    >
                        <p>
                            Wir unterstützen vor allem KMU, Gründer und Startups mit digitalen Lösungen auf höchstem Niveau. Durch die Anwendung modernster Technik und AI-Marketing verschaffen wir Ihnen die Vorteile und Positionen, die Sie brauchen. Sie müssen nicht immer up to date sein. Wir sind es für Sie – und das alles aus einer Hand, alles aufeinander abgestimmt.
                        </p>
                        <p>
                            Wir sind keine Uni-Absolventen mit Buzzwords, sondern die "alte Garde" mit echter Unternehmererfahrung. Beide über 40, beide selbst schon durch die Höhen und Tiefen der Selbstständigkeit gegangen. Wir hatten die "Hands-on" Mentalität schon, als man es noch "Anpacken" nannte.
                        </p>
                        <p>
                            Bei uns gibt es kein Marketing von der Stange, sondern ehrliche Arbeit mit Empathie, Leidenschaft, Erfahrung und Know-how.
                        </p>
                        <p>
                            So perfekt wie unsere Leistung, so perfekt sind unsere Preise. Nicht, weil wir es nicht draufhaben, sondern weil wir bei KMU wirklich etwas bewirken wollen.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className={styles.rightCol}
                    >
                        {/* BILD */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={styles.imageWrap}
                        >
                            <img
                                src="/philosophy/perfekt.png"
                                alt="KAOS Team"
                                className={styles.teamImage}
                            />
                        </motion.div>

                        {/* WERTE + CTA */}
                        <div className={styles.valuesGrid}>
                            <div className={styles.valueBox}>KREATIV</div>
                            <div className={styles.valueBox}>ANALYTISCH</div>
                            <div className={styles.valueBox}>ORIGINELL</div>
                            <div className={styles.valueBox}>STRUKTURIERT</div>
                        </div>

                        <CTASection label="👉 Get your KAOS" href="/kontaktz" />
                    </motion.div>
                </div>

                {/* OUTRO */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={styles.outro}
                >
                    Weil Perfektion nicht vom Band kommt.
                </motion.p>
            </div>
        </section>
            <Footer />
            </div>
    );
};

export default PhilosophySection;
