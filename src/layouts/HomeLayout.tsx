import React, { ReactNode } from "react";

type HomeLayoutProps = {
    children: ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className="max-w-screen max-h-screen flex flex-col items-center justify-start font-sans bg-beige text-dark px-4 md:px-8 lg:px-16 xl:px-24">
            <main className="w-full max-w-6xl flex flex-col items-center">
                {children}
            </main>
        </div>
    );
}
