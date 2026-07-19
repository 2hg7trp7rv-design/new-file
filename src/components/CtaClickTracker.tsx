"use client";

import { useEffect } from "react";

type DataLayer = { push: (entry: Record<string, unknown>) => unknown };
type WindowWithDataLayer = Window & { dataLayer?: DataLayer };

/** Sends delegated CTA events only when an existing dataLayer is present. */
export function CtaClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const cta = event.target.closest<HTMLElement>("[data-cta]");
      const name = cta?.dataset.cta?.trim();
      if (!cta || !name) return;

      const dataLayer = (window as WindowWithDataLayer).dataLayer;
      if (!dataLayer || typeof dataLayer.push !== "function") return;

      const anchor = cta instanceof HTMLAnchorElement ? cta : cta.closest<HTMLAnchorElement>("a[href]");
      dataLayer.push({
        event: "cta_click",
        cta_name: name,
        cta_location: cta.dataset.ctaLocation || undefined,
        cta_label: cta.dataset.ctaLabel || cta.textContent?.trim() || undefined,
        cta_destination: cta.dataset.ctaDestination || anchor?.getAttribute("href") || undefined,
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
