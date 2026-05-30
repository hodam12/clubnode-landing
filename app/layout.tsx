import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Clubnode — Het complete platform voor uw sportclub',
  description: 'Clubnode geeft uw sportclub een professioneel ledenportaal met vrijwilligersbeheer, scheidsrechters, vacatures, informatiebeeldschermen en meer — in uw eigen huisstijl.',
  keywords: 'sportclub, ledenportaal, vrijwilligers, scheidsrechters, vacatures, Sportlink, clubbeheer',
  openGraph: {
    title: 'Clubnode — Het complete platform voor uw sportclub',
    description: 'Professioneel ledenportaal voor sportclubs. Vrijwilligers, scheidsrechters, vacatures en meer.',
    type: 'website',
    url: 'https://clubnode.online',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clubnode — Het complete platform voor uw sportclub',
    description: 'Professioneel ledenportaal voor sportclubs.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
