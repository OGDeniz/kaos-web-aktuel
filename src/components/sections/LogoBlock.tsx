import React from "react"

export default function LogoBlock() {
    return (
        <div className="flex flex-col items-center text-center">
            <img
                src="/KAOSmedialogo600.jpg"
                alt="KAOS Media Logo"
                className="w-32 md:w-40 rounded shadow-lg mb-2"
            />
            <span className="text-xl md:text-2xl font-bold text-light tracking-tight">
                KAOS MEDIA
            </span>
        </div>
    )
}
