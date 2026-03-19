import React, { ReactNode } from "react";
import styles from "./GrayLayout.module.css";

type GrayLayoutProps = {
    children: ReactNode;
};

export default function GrayLayout({ children }: GrayLayoutProps) {
    return (
        <div className={styles.outer}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
