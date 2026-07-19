import type { Metadata } from "next";
import { SITE } from "@/data/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}`;
};

export function createPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const socialTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: SITE.name,
      url: path,
      title: socialTitle,
      description,
      images: [{
        url: `${SITE.publicUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Remake Studio M’sの実施工車と正式ロゴ",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [`${SITE.publicUrl}/images/og-image.jpg`],
    },
  };
}
