'use client';
import React from 'react';
import Image from 'next/image';

export default function ElevatorSection() {
    return (
        <section className="w-full py-24 text-metal">
            <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4">
                <div className="grid grid-cols-1 items-center gap-12 text-center lg:grid-cols-2 lg:text-left">
                    {/* 🔹 Linke Seite: Bild & Intro */}
                    <div className="flex flex-col items-center gap-6 lg:items-start">
                        <div className="relative w-full overflow-hidden rounded-3xl bg-dark/5">
                            <Image
                                src="/webdesign.webp"
                                alt="KAOS Media Webdesignhintergrund"
                                width={1000}
                                height={800}
                                className="mx-auto block h-auto w-full max-w-[580px] rounded-3xl object-cover"
                            />
                        </div>
                        <p className="max-w-xl text-lg leading-relaxed">
                            Wir sind KAOS Media – eine kreative Einheit, die Struktur und Strategie mit Originalität
                            und radikaler Klarheit verbindet.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-8 lg:items-start">
                        <div className="space-y-4 text-center lg:text-left">
                            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-softred">Willkommen bei KAOS Media</h2>
                            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                                Struktur trifft <span className="text-primary">auf Kreativität</span>
                            </h1>
                        </div>

                        {/* 🔸 Rechte Seite: KAOS-Formel */}
                        <div className="w-full max-w-xs rounded-3xl bg-dark p-6 text-center text-light shadow-xl">
                            <h3 className="text-2xl font-bold text-beige">Die KAOS-Formel</h3>
                            <ul className="mt-4 space-y-3 text-base">
                                <li><span className="text-softred font-semibold">K</span>reativ</li>
                                <li><span className="text-softred font-semibold">A</span>nalytisch</li>
                                <li><span className="text-softred font-semibold">O</span>riginell</li>
                                <li><span className="text-softred font-semibold">S</span>trukturiert</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                    <p className="max-w-xl text-lg text-gray-700">
                        All-in-One Marketinglösungen für Gründer & KMU – ganzheitlich, transparent & effektiv.
                    </p>
                </div>
            </div>
        </section>
    );
}
