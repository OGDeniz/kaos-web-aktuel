import type { Metadata } from "next";
import "./globals.css"; // deine eigene CSS-Datei mit Tailwind v4 Setup

export const metadata: Metadata = {
  title: "KAOS Media",
  description: "Kreativ. Strategisch. Originell.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body >
        {children}
      </body>
    </html>
  );
}
