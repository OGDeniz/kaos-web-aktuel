import '../styles/globals.css';
import styles from './layout.module.css';
import { Manrope, Outfit } from 'next/font/google';
import type { Metadata } from 'next';
import Script from 'next/script';
import ScrollProgress from '@/components/ui/ScrollProgress';
import MotionProvider from '@/components/ui/MotionProvider';
import CookieBanner from '@/components/ui/CookieBanner';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  icons: {
    icon: '/icons/favIcon.png',
  },
  title: 'KAOS MEDIA – Kreativagentur für digitales Marketing',
  description: 'Deine kreative Agentur für digitales Marketing aus Heidelberg. Branding, Webdesign, Content & Performance.',
  keywords: ['KAOS', 'Media', 'Branding', 'Webdesign', 'Strategie', 'Marketing', 'Heidelberg'],
  authors: [{ name: 'KAOS Media', url: 'https://kaosmedia.de' }],
  openGraph: {
    title: 'KAOS MEDIA – Kreativagentur für digitales Marketing',
    description: 'Deine kreative Agentur für digitales Marketing aus Heidelberg.',
    url: 'https://kaosmedia.de',
    siteName: 'KAOS Media',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KAOS Media' }],
    locale: 'de_DE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${manrope.className} ${outfit.variable}`}>
      <head>
        {/* Consent Mode v2 defaults — must run before GTM */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'analytics_storage':'denied','ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','wait_for_update':2000});`,
          }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWSLXCXM');`,
          }}
        />
      </head>
      <body className={styles.body}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWSLXCXM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <MotionProvider>
          <ScrollProgress />
          {children}
        </MotionProvider>
        <CookieBanner />
      </body>
    </html>
  );
}
