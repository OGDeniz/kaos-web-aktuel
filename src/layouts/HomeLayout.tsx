import React, { ReactNode } from "react";
import styles from "./HomeLayout.module.css";

type HomeLayoutProps = {
    children: ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className={styles.outer}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
