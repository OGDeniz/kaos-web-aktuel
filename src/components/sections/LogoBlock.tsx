import React from "react"

export default function LogoBlock() {
    return (
        <div className="flex flex-col items-center text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/KAOSmedia.svg"
                alt="KAOS Media Logo"
                className="w-64 h-64 object-contain mb-4"
                style={{ filter: "drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))" }}
            />
        </div>
    )
}
