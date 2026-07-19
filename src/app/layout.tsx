import "./globals.css";
import "./studio.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { CtaClickTracker } from "@/components/CtaClickTracker";
import { SkipLink } from "@/components/SkipLink";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.publicUrl),
  title: {
    default: "Remake Studio M’s | 米子の洗車・磨き・コーティング専門店",
    template: "%s | Remake Studio M’s",
  },
  description: SITE.description,
  robots: { index: false, follow: false },
  keywords: ["米子 コーティング", "米子 洗車", "純水手洗い洗車", "車 磨き", "G'ZOX", "米子 レンタカー"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE.name,
    title: "Remake Studio M’s | 米子の洗車・磨き・コーティング専門店",
    description: SITE.description,
    images: [{
      url: `${SITE.publicUrl}/images/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: "Remake Studio M’sの実施工車と正式ロゴ",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remake Studio M’s",
    description: SITE.description,
    images: [`${SITE.publicUrl}/images/og-image.jpg`],
  },
  alternates: { canonical: "/" },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["AutoWash", "LocalBusiness"],
    "@id": `${SITE.publicUrl}/#business`,
    name: SITE.name,
    url: SITE.publicUrl,
    telephone: "+81-859-33-2060",
    image: `${SITE.publicUrl}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      postalCode: SITE.postalCode,
      addressRegion: "鳥取県",
      addressLocality: "米子市",
      streetAddress: "久米町270",
      addressCountry: "JP",
    },
    hasMap: SITE.mapUrl,
    parentOrganization: {
      "@type": "Organization",
      name: "株式会社松本油店",
      url: "https://mabr.jp/",
    },
    priceRange: "¥¥",
    sameAs: [SITE.legacyUrl, SITE.instagramUrl],
  };

  return (
    <html lang="ja">
      <body>
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileActionBar />
        <CtaClickTracker />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
