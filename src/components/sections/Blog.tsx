"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ClaimBar from "./ClaimBar";
import Navbar from "../ui/navigation/Navbar";
import Footer from "../ui/Footer";
import GrayLayout from "../../layouts/GrayLayout";
import styles from "./Blog.module.css";

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

      <section className={styles.section}>
        <div className={styles.blobRed} />
        <div className={styles.blobBlue} />

        <div className={styles.inner}>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.headline}
          >
            Insights &amp; Ideen – Unser Blog
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={styles.subtitle}
          >
            Aktuelle Themen, kreative Impulse &amp; bewährte Strategien rund um Branding, Webdesign und digitales Marketing.
          </motion.p>

          <div className={styles.grid}>
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.card}
              >
                <Image src={post.image} alt={post.title} width={600} height={400} className={styles.cardImage} />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
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
