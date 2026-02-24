"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../ui/navigation/Navbar";
import CTASection from "./CTASection";
import ClaimBar from "./ClaimBar";
import Footer from "../ui/Footer";

const PhilosophySection = () => {
    return (
        <div>
        <section className="min-h-screen flex items-center justify-center bg-beige px-6 py-32 text-neutral">
            <div className="max-w-7xl mx-auto space-y-16">

                <ClaimBar text="KAOS Media – Kreativität trifft Struktur – PERFEKTION ENTSTEHT NUR IM KAOS – BRANDING – WEBDESIGN – SOCIAL MEDIA – STRATEGIE" />
                <Navbar />
                {/* HEADLINE */}
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-extrabold text-center leading-tight tracking-tight"
                >
                    Perfektion entsteht nur mit{" "}
                    <span className=" text-primary">KAOS</span>
                </motion.h1>

                {/* INTRO */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center justify-center px-auto text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed text-light bg-primary"
                >
                    Wir sind KAOS Media – die Agentur, bei der alles zusammenpasst: Webdesign, SEO, SEA, Social Media & AI-Marketing, Branding und Positionierung – aus einer Hand, perfekt aufeinander abgestimmt.
                </motion.p>

                {/* FLEX LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 items-start">

                    {/* TEXTBLOCK */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-6 text-lg leading-relaxed text-neutral text-left"
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

                    {/* RIGHT SIDE: BILD + WERTE+CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 flex flex-col items-center space-y-8 w-full gap-6 md:gap-8"
                    >
                        {/* BILD */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-full flex justify-center items-center"
                        >
                            <img
                                src="/philosophy/perfekt.png"
                                alt="KAOS Team"
                                className="w-full max-w-[400px] rounded-xl object-cover shadow-md hover:shadow-xl transition"
                            />
                        </motion.div>

                        {/* WERTE + CTA */}
                        <div className="grid grid-cols-2 gap-4 md:gap-6 w-full">
                            <div className="bg-gray-700 text-white py-4 px-6 rounded-xl shadow-md text-center text-lg font-bold tracking-widest">
                                KREATIV
                            </div>
                            <div className="bg-gray-700 text-white py-4 px-6 rounded-xl shadow-md text-center text-lg font-bold tracking-widest">
                                ANALYTISCH
                            </div>
                            <div className="bg-gray-700 text-white py-4 px-6 rounded-xl shadow-md text-center text-lg font-bold tracking-widest">
                                ORIGINELL
                            </div>
                            <div className="bg-gray-700 text-white py-4 px-6 rounded-xl shadow-md text-center text-lg font-bold tracking-widest">
                                STRUKTURIERT
                            </div>
                        </div>

                        {/* CTA 
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-700 hover:bg-red-800 text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg transition"
                        >
                            👉 Get your KAOS
                        </motion.button> */}
                        <CTASection label="👉 Get your KAOS" href="/kontaktz" />
                    </motion.div>
                </div>

                {/* OUTRO */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center text-xl font-semibold text-gray-400 mt-16 bg-softred py-6 "
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
