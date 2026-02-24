import React from "react"
import Image from "next/image";

export default function LogoBlock() {
    return (
        <div className="flex flex-col items-center text-center">

            <Image
                src="/KAOSmedia.svg"
                alt="KAOS Media Logo"
                width={1000}
                height={750}
                className="w-64 h-64 object-contain mb-4"
                loading="lazy"
                decoding="async"
                fetchPriority="high"
                style={{ filter: "drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))" }}
            />
        </div>
    )
}
