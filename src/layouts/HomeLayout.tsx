import React from "react";
import ClaimBar from "@/components/sections/ClaimBar";
import LogoBlock from "@/components/sections/LogoBlock";
import CTASection from "@/components/sections/CTASection";

export default function HomeLayout() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-dark text-light">

            {/* 🔻 CLAIMBAR – Slogan ganz oben */}
            <ClaimBar text="Perfektion entsteht nur im KAOS" />

            {/* 🔻 LOGO-Bereich + Eigenschaften */}
            <section className="flex flex-col md:flex-row justify-between items-center px-6 py-12 gap-6">
                <LogoBlock />

                <ul className="text-right space-y-1 text-sm text-metal">
                    <li><span className="text-pink-400">🔮</span> Kreativ</li>
                    <li><span className="text-blue-400">🔎</span> Analytisch</li>
                    <li><span className="text-yellow-400">✨</span> Originell</li>
                    <li><span className="text-gray-300">📐</span> Strukturiert</li>
                </ul>
            </section>

            {/* 🔻 Elevator Pitch */}
            <section className="bg-beige text-dark px-6 py-10 text-center max-w-3xl mx-auto rounded shadow-md">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">Who am I / Elevator Pitch</h1>
                <p className="text-lg leading-relaxed">
                    Wir sind KAOS Media – eine kreative Einheit, die Struktur und Strategie mit Originalität
                    und radikaler Klarheit verbindet.
                </p>

                <div className="bg-dark text-light p-4 mt-6 rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Farbtest</h2>
                    <p className="text-sm mb-4">Hier kannst du die Farben testen:</p>
                    Funktionieren die Farben jetzt?

                </div>
            </section>

            {/* 🔻 Call-to-Action */}
            <CTASection
                label="Jetzt Erstgespräch sichern"
                href="/kontakt"
            />

            {/* 🔻 Navigation */}
            <nav className="flex justify-center gap-6 text-sm py-6 border-t border-neutral">
                <a href="/leistungen" className="hover:underline">Leistungen</a>
                <a href="/about" className="hover:underline">Über uns</a>
                <a href="/blog" className="hover:underline">Blog</a>
                <a href="/kontakt" className="hover:underline">Kontakt</a>
            </nav>

            {/* 🔻 Footer */}
            <footer className="flex justify-between items-center px-6 py-4 text-xs text-metal border-t border-neutral">
                <span>&copy; {new Date().getFullYear()} KAOS Media</span>
                <div className="flex gap-3">
                    <a href="#" className="hover:underline">Instagram</a>
                    <a href="#" className="hover:underline">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
}
