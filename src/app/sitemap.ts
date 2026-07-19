import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/services/wash", "/services/polish", "/services/coating", "/mobility", "/about", "/access"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://remakestudioms.com${route}`,
    lastModified: new Date("2026-07-19"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
