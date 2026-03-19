import React from "react"
import styles from "./LogoBlock.module.css"

export default function LogoBlock() {
    return (
        <div className={styles.container}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/KAOSmedia.svg"
                alt="KAOS Media Logo"
                className={styles.logo}
                style={{ filter: "drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))" }}
            />
        </div>
    )
}
