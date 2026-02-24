import React from "react"

type ClaimBarProps = {
    text: string
}

export default function ClaimBar({ text }: ClaimBarProps) {
    return (
        <div className="w-full bg-primary text-light text-center text-sm font-semibold uppercase tracking-wider py-2  shadow-md border-b border-neutral">
            {text}
        </div>
    )
}
