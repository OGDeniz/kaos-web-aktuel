import React, { ReactNode } from "react";

type GrayLayoutProps = {
    children: ReactNode;
};

export default function GrayLayout({ children }: GrayLayoutProps) {
    return (
        <div className="w-full max-w-screen min-h-screen flex flex-col items-center justify-start bg-beige font-sans text-dark px-4 md:px-8 lg:px-16 xl:px-24">
            <main className=" flex flex-col items-center">
                {children}
            </main>
        </div>
    );
}
