// src/layouts/HomeLayout.tsx

import React from 'react';

export default function HomeLayout() {
    return (
        <div className="min-h-screen flex flex-col font-sans">

            {/* CLAIM */}
            <div className="bg-gray-100 text-center py-2 text-sm tracking-wide uppercase font-semibold">
                Perfektion entsteht nur im KAOS
            </div>

            {/* LOGO + FEATURE LIST */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-12">
                <div className="text-4xl font-bold">LOGO ❤️</div>
                <ul className="text-right space-y-1 text-sm">
                    <li>🧠 Kreativ</li>
                    <li>🔍 Analytisch</li>
                    <li>✨ Originell</li>
                    <li>📐 Strukturiert</li>
                </ul>
            </div>

            {/* ELEVATOR PITCH */}
            <section className="px-6 py-8 text-center max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Who am I / Elevator Pitch</h1>
                <p className="text-lg leading-relaxed">
                    Wir sind KAOS Media – eine kreative Einheit, die Struktur und Strategie mit Originalität und radikaler Klarheit verbindet.
                </p>
            </section>

            {/* CTA */}
            <div className="bg-black text-white py-6 text-center">
                <button className="bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-wide rounded hover:bg-gray-100 transition">
                    Jetzt Erstgespräch sichern
                </button>
            </div>

            {/* LINKLEISTE */}
            <div className="flex justify-center gap-6 text-sm py-4 border-t">
                <a href="/leistungen" className="hover:underline">Leistungen</a>
                <a href="/about" className="hover:underline">Über uns</a>
                <a href="/blog" className="hover:underline">Blog</a>
                <a href="/kontakt" className="hover:underline">Kontakt</a>
            </div>

            {/* FOOTER */}
            <footer className="flex justify-between items-center px-6 py-4 text-xs text-gray-500 border-t">
                <span>&copy; {new Date().getFullYear()} KAOS Media</span>
                <div className="flex gap-3">
                    <a href="#" className="hover:underline">Instagram</a>
                    <a href="#" className="hover:underline">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
}
