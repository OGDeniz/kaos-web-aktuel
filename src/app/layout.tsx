import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-dark text-light font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
