"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ClaimBar from "./ClaimBar";
import Navbar from "../ui/navigation/Navbar";
import Footer from "../ui/Footer";
import GrayLayout from "../../layouts/GrayLayout";

const blogPosts = [
  {
    title: "Kreatives Webdesign: Trends 2025",
    excerpt:
      "Welche Designtrends setzen sich durch? Ein Blick auf Typografie, Animationen und UX-Prinzipien.",
    image: "/blog/designtrends.jpg",
    link: "/blog/designtrends-2025",
  },
  {
    title: "Strategisches Branding für KMU",
    excerpt:
      "Wie du deine Marke klar positionierst und Vertrauen bei deiner Zielgruppe aufbaust.",
    image: "/blog/branding-kmu.jpg",
    link: "/blog/branding-kmu",
  },
  {
    title: "SEO in Klartext erklärt",
    excerpt:
      "Ohne Bullshit: Worauf es bei Suchmaschinenoptimierung wirklich ankommt.",
    image: "/blog/seo-guide.jpg",
    link: "/blog/seo-guide",
  },
];

export default function BlogSection() {
  return (

    <GrayLayout>
        <ClaimBar text="Entdecke spannende Insights und kreative Ideen in unserem Blog!" />
        <Navbar />
        {/* Blog Section */}

        <section className="relative w-full bg-beige px-4 py-28 text-metal">
            <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-softred opacity-20 blur-3xl" />
            <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-blue-500 opacity-20 blur-2xl" />

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center space-y-12 text-center">
                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-softred via-metal to-blue-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-lg md:text-5xl"
                >
                    Insights & Ideen – Unser Blog
                </motion.h2>

                {/* Untertitel */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="max-w-2xl text-base text-gray-500 md:text-lg"
                >
                    Aktuelle Themen, kreative Impulse & bewährte Strategien rund um Branding, Webdesign und digitales Marketing.
                </motion.p>

                {/* Blog Grid */}
                <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900/90 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <Image src={post.image} alt={post.title} width={600} height={400} className="h-48 w-full object-cover" />
                            <div className="p-6 text-left">
                                <h3 className="mb-2 text-xl font-bold text-white">{post.title}</h3>
                                <p className="text-sm text-gray-400">{post.excerpt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        <Footer />

    </GrayLayout>
    );
}
