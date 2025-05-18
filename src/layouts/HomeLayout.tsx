import React from "react"
import ClaimBar from "@/components/sections/ClaimBar"
import LogoBlock from "@/components/sections/LogoBlock"
import CTASection from "@/components/sections/CTASection"

export default function HomeLayout() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start font-sans bg-dark text-light px-4">
            <main className="w-full max-w-6xl flex flex-col items-center">

                {/* 🔻 1. ClaimBar ganz oben */}
                <div className="w-full bg-softred text-light text-center text-sm font-semibold uppercase tracking-wider py-2 shadow-md border-b border-neutral">
                    PERFEKTION ENTSTEHT NUR IM KAOS
                </div>

                {/* 🔻 2. Header Sektion mit Logo und KAOS-Formel */}
                <header className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-6 py-10 max-w-6xl mx-auto w-full">
                    {/* Logo links */}
                    <div className="flex justify-center md:justify-start">
                        <LogoBlock />
                    </div>

                    {/* Formel rechts */}
                    <div className="text-center md:text-left space-y-2">
                        <h2 className="text-xl font-bold">KAOS-FORMEL</h2>
                        <ul className="text-sm text-light space-y-1">
                            <li><span className="text-pink-400">🔮</span> Kreativ</li>
                            <li><span className="text-blue-400">🔎</span> Analytisch</li>
                            <li><span className="text-yellow-400">✨</span> Originell</li>
                            <li><span className="text-gray-300">📐</span> Strukturiert</li>
                        </ul>
                    </div>
                </header>


                {/* 🔻 3. Elevator Pitch */}
                <section className="bg-beige text-metal text-center max-w-4xl mx-auto my-10 px-8 py-12 rounded shadow-lg">
                    <h1 className="text-3xl font-bold mb-4 text-[#8b0000]">Who am I / Elevator Pitch</h1>
                    <p className="text-lg leading-relaxed">
                        Wir sind KAOS Media – eine kreative Einheit, die Struktur und Strategie mit Originalität
                        und radikaler Klarheit verbindet.
                    </p>
                </section>

                {/* 🔻 4. Call-to-Action */}
                <CTASection label="Jetzt Erstgespräch sichern" href="/kontakt" />

                {/* 🔻 5. Navigation */}
                <nav className="flex justify-center items-center gap-6 text-sm py-4 border-t border-neutral">
                    <a href="/leistungen" className="hover:underline">Leistungen</a>
                    <a href="/about" className="hover:underline">Über uns</a>
                    <a href="/blog" className="hover:underline">Blog</a>
                    <a href="/kontakt" className="hover:underline">Kontakt</a>
                </nav>

                {/* 🔻 6. Footer */}
                <footer className="bg-beige flex justify-between items-center px-6 py-3 text-xs text-metal border-t border-neutral w-full max-w-6xl mx-auto">
                    <span>&copy; {new Date().getFullYear()} KAOS Media</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:underline">Instagram</a>
                        <a href="#" className="hover:underline">LinkedIn</a>
                    </div>
                </footer>
            </main>
        </div>
    )
}
