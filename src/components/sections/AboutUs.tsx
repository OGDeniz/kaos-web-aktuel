"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../ui/navigation/Navbar";
import ClaimBar from "./ClaimBar";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Footer from "../ui/Footer";
import GrayLayout from "../../layouts/GrayLayout";

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
            <section className="relative w-full bg-beige px-4 py-28 text-metal overflow-hidden">
                {/* Decorative blurred shapes */}
                <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-softred opacity-30 rounded-full blur-3xl z-0" />
                <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-blue-500 opacity-20 rounded-full blur-2xl z-0" />

                <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 text-center">
                    {/* HEADLINE */}
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-r from-softred via-metal to-blue-400 bg-clip-text py-10 text-5xl font-extrabold tracking-tight text-transparent drop-shadow-lg md:text-6xl"
                    >
                        Über uns – die Macher von KAOS Media
                    </motion.h2>

                    {/* GRID */}
                    <div className="mb-16 grid w-full max-w-5xl grid-cols-1 items-center gap-16 py-10 md:grid-cols-5">
                        {/* Werte links */}
                        <div className="hidden items-center justify-center gap-16 font-semibold text-base md:flex">
                            {valuesLeft.map((v) => (
                                <div key={v.label} className="border-l-4 border-softred pl-3">
                                    <p className="-rotate-90 whitespace-nowrap tracking-widest text-softred">{v.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Bild Flo */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex items-center justify-center"
                        >
                            <Image
                                src="/aboutus/flo1.jpg"
                                alt="Foto Florian"
                                width={220}
                                height={220}
                                className="rounded-2xl object-cover shadow-2xl hover:scale-105 transition-transform duration-300 mx-4"
                                priority
                            />
                        </motion.div>

                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className={`flex flex-col items-center justify-center ${montserrat.className}`}
                        >
                            <Image
                                src="/KAOSmedia.svg"
                                alt="KAOS Media Logo"
                                width={900}
                                height={900}
                                className="drop-shadow-xl bg-gradient-to-br from-softred to-blue-400 rounded-full p-4 shadow-lg hover:scale-105 transition-transform duration-300"
                                priority
                            />
                            <span className="mt-2 text-xs text-gray-400 tracking-widest uppercase">KAOS Media</span>
                        </motion.div>

                        {/* Bild Deniz */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex items-center justify-center"
                        >
                            <Image
                                src="/aboutus/deniz1.jpg"
                                alt="Foto Deniz"
                                width={220}
                                height={220}
                                className="rounded-2xl object-cover shadow-2xl hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </motion.div>

                        {/* Werte rechts */}
                        <div className="hidden md:flex flex-col gap-28 items-center font-semibold text-small">
                            {valuesRight.map((v) => (
                                <div key={v.label} className="border-r-4 border-blue-400 pr-3">
                                    <p className="rotate-90 whitespace-nowrap tracking-widest text-blue-400">{v.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mb-12 w-full max-w-2xl space-y-8 rounded-2xl border border-neutral-700 bg-neutral-900/80 px-10 py-12 text-base leading-relaxed text-gray-100 shadow-2xl backdrop-blur-md"
                    >
                        <p>
                            <span className="font-bold text-softred">Wir sind KAOS Media</span> – die Boutique-Agentur für Gründer, Startups und KMU, die Großes vorhaben.
                            Hinter KAOS stehen <span className="font-bold text-blue-400">Florian</span> und <span className="font-bold text-blue-400">Deniz</span> – zwei erfahrene Unternehmer mit echten Höhen, Tiefen und Visionen.
                        </p>
                        <p>
                            Unsere Stärke liegt im Spagat zwischen kreativer Freiheit und analytischer Präzision.
                            Wir kombinieren Technologie, Strategie und Herzblut zu messbarem Erfolg – <span className="italic text-softred">ohne Bullshit</span>.
                        </p>
                    </motion.div>

                    {/* Werte mobil */}
                    <div className="mt-12 mb-12 flex justify-center gap-16 px-4 md:hidden">
                        <div className="flex flex-col gap-2 items-center font-semibold text-xs">
                            {valuesLeft.map((v) => (
                                <div key={v.label} className="border-l-4 border-softred pl-2">
                                    <p className="-rotate-90 whitespace-nowrap text-softred">{v.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2 items-center font-semibold text-xs">
                            {valuesRight.map((v) => (
                                <div key={v.label} className="border-r-4 border-blue-400 pr-2">
                                    <p className="rotate-90 whitespace-nowrap text-blue-400">{v.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12"
                    >
                        <a
                            href="/kontakt"
                            className="inline-block bg-gradient-to-r from-softred to-blue-400 text-white font-semibold py-3 px-10 mx-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            Jetzt Erstgespräch sichern
                        </a>
                    </motion.div>

                    {/* ZITAT */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mx-auto mt-16 max-w-3xl rounded-2xl border border-neutral-700 bg-neutral-900/80 px-8 py-10 text-center text-base leading-relaxed text-gray-100 shadow-2xl backdrop-blur-md"
                    >
                        <p className="text-lg italic text-primary">
                            "Kreativität trifft Struktur – PERFEKTION ENTSTEHT NUR IM KAOS"
                        </p>
                        <footer className="mt-4 text-sm text-gray-400">– KAOS Media Team</footer>
                    </motion.blockquote>

                </div>
            </section>
                <Footer />
        </GrayLayout>
    );
};

export default AboutSection;
