"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MAIN_NAV, SITE } from "@/data/site";
import {
  CalendarIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
} from "@/components/ui/Icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Remake Studio M’s ホーム">
          <span className="brand-mark">M’s</span>
          <span className="brand-copy">
            <strong>Remake Studio M’s</strong>
            <small>CAR DETAILING STUDIO</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={`tel:${SITE.phone}`} aria-label={`${SITE.phoneDisplay}に電話`}>
            <PhoneIcon />
            <span>{SITE.phoneDisplay}</span>
          </a>
          <a className="button button-small" href={SITE.reserveUrl} target="_blank" rel="noreferrer">
            <CalendarIcon />
            Web予約
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="モバイルナビゲーション">
          {MAIN_NAV.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-actions">
          <a className="button" href={SITE.reserveUrl} target="_blank" rel="noreferrer">
            <CalendarIcon />Web予約
          </a>
          <a className="button button-secondary" href={`tel:${SITE.phone}`}>
            <PhoneIcon />電話で相談
          </a>
        </div>
        <p>{SITE.address}</p>
      </div>
    </header>
  );
}
