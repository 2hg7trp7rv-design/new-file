import Link from "next/link";
import { MAIN_NAV, SITE } from "@/data/site";
import { ArrowRightIcon, MapPinIcon, PhoneIcon } from "@/components/ui/Icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-cta shell">
        <div>
          <p className="eyebrow eyebrow-light">CONTACT</p>
          <h2>迷ったら、車を見ながら一緒に決めましょう。</h2>
          <p>車種や状態、保管環境を確認して、必要な施工だけをご提案します。</p>
        </div>
        <div className="footer-cta-actions">
          <a className="button button-light" href={`tel:${SITE.phone}`}>
            <PhoneIcon />
            {SITE.phoneDisplay}
          </a>
          <a className="text-link text-link-light" href={SITE.reserveUrl} target="_blank" rel="noreferrer">
            Webで予約する <ArrowRightIcon />
          </a>
        </div>
      </div>

      <div className="footer-main shell">
        <div className="footer-brand">
          <Link href="/" className="brand brand-on-dark">
            <span className="brand-mark">M’s</span>
            <span className="brand-copy">
              <strong>Remake Studio M’s</strong>
              <small>CAR DETAILING STUDIO</small>
            </span>
          </Link>
          <p>純水手洗い洗車・磨き・カーコーティング専門店</p>
          <a href={SITE.mapUrl} target="_blank" rel="noreferrer" className="footer-address">
            <MapPinIcon />
            〒{SITE.postalCode} {SITE.address}
          </a>
        </div>

        <div className="footer-links">
          <div>
            <h3>MENU</h3>
            {MAIN_NAV.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>
          <div>
            <h3>SERVICE</h3>
            <Link href="/services/wash">純水手洗い洗車</Link>
            <Link href="/services/polish">ボディ磨き</Link>
            <Link href="/services/coating">カーコーティング</Link>
            <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom shell">
        <p>運営会社 株式会社松本油店</p>
        <p>© Remake Studio M’s</p>
      </div>
    </footer>
  );
}
