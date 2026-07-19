import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://remakestudioms.com"),
  title: {
    default: "Remake Studio M’s | 米子の洗車・磨き・コーティング専門店",
    template: "%s | Remake Studio M’s",
  },
  description: SITE.description,
  keywords: ["米子 コーティング", "米子 洗車", "純水手洗い洗車", "車 磨き", "G'ZOX", "米子 レンタカー"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE.name,
    title: "Remake Studio M’s | 愛車がきれいになる時間も、あなたは動ける。",
    description: SITE.description,
    images: [{ url: "/images/ms-hero.webp", width: 1536, height: 1024, alt: "Remake Studio M’s" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remake Studio M’s",
    description: SITE.description,
    images: ["/images/ms-hero.webp"],
  },
  alternates: { canonical: "/" },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    name: SITE.name,
    url: "https://remakestudioms.com",
    telephone: "+81-859-33-2060",
    image: "https://remakestudioms.com/images/ms-hero.webp",
    address: {
      "@type": "PostalAddress",
      postalCode: SITE.postalCode,
      addressRegion: "鳥取県",
      addressLocality: "米子市",
      streetAddress: "久米町270",
      addressCountry: "JP",
    },
    priceRange: "¥¥",
    sameAs: [SITE.instagramUrl],
  };

  return (
    <html lang="ja">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileActionBar />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
