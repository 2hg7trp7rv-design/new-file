"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CalendarIcon, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/Icons";
import { MAIN_NAV, SITE } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    if (!open) return;

    const menu = menuRef.current;
    const trigger = menuButtonRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        window.setTimeout(() => trigger?.focus(), 0);
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="official-brand" aria-label="Remake Studio M’s ホーム">
          <Image src="/images/ms-official-logo.png" alt="Remake Studio M’s" width={300} height={80} priority />
        </Link>

        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="header-phone"
            href={`tel:${SITE.phone}`}
            aria-label={`${SITE.phoneDisplay}に電話`}
            data-cta="phone"
            data-cta-location="header"
          >
            <PhoneIcon /><span>{SITE.phoneDisplay}</span>
          </a>
          <a
            className="header-booking"
            href={SITE.reserveUrl}
            target="_blank"
            rel="noreferrer"
            data-cta="reserve"
            data-cta-location="header"
          >
            <CalendarIcon />Web予約
          </a>
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div ref={menuRef} id="mobile-menu" className="mobile-menu is-open">
          <nav aria-label="モバイルナビゲーション">
            {MAIN_NAV.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-actions">
            <a href={SITE.reserveUrl} target="_blank" rel="noreferrer" data-cta="reserve" data-cta-location="mobile_menu">
              <CalendarIcon />Webで施工を予約
            </a>
            <a href={`tel:${SITE.phone}`} data-cta="phone" data-cta-location="mobile_menu">
              <PhoneIcon />{SITE.phoneDisplay}
            </a>
          </div>
          <p>〒{SITE.postalCode} {SITE.address}</p>
        </div>
      ) : null}
    </header>
  );
}
