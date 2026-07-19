import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, MapPinIcon, PhoneIcon } from "@/components/ui/Icons";
import { MAIN_NAV, SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="studio-footer">
      <div className="studio-shell studio-footer__main">
        <div className="studio-footer__brand">
          <Link href="/" aria-label="Remake Studio M’s ホーム">
            <Image src="/images/ms-official-logo.png" alt="Remake Studio M’s" width={300} height={80} />
          </Link>
          <p>純水手洗い洗車・ボディ磨き・カーコーティング専門店</p>
          <a href={SITE.mapUrl} target="_blank" rel="noreferrer" data-cta="open_map" data-cta-location="footer">
            <MapPinIcon />〒{SITE.postalCode} {SITE.address}
          </a>
          <a href={`tel:${SITE.phone}`} data-cta="phone" data-cta-location="footer">
            <PhoneIcon />{SITE.phoneDisplay} <small>9:00–18:00</small>
          </a>
        </div>

        <div className="studio-footer__links">
          <div>
            <h2>SITE</h2>
            {MAIN_NAV.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/about">運営会社</Link>
          </div>
          <div>
            <h2>SERVICE</h2>
            <Link href="/services/wash">純水手洗い洗車</Link>
            <Link href="/services/polish">ボディ磨き</Link>
            <Link href="/services/coating">カーコーティング</Link>
            <Link href="/works">施工事例</Link>
          </div>
          <div>
            <h2>CONTACT</h2>
            <a href={SITE.reserveUrl} target="_blank" rel="noreferrer" data-cta="reserve" data-cta-location="footer">施工をWeb予約 <ArrowRightIcon /></a>
            <a href={SITE.contactUrl} target="_blank" rel="noreferrer" data-cta="contact_form" data-cta-location="footer">予約前の問い合わせ <ArrowRightIcon /></a>
            <a href={SITE.rentalUrl} target="_blank" rel="noreferrer" data-cta="rental_availability" data-cta-location="footer">レンタカー予約 <ArrowRightIcon /></a>
            <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="studio-shell studio-footer__bottom">
        <div><span>運営会社 株式会社松本油店</span><a href="https://mabr.jp/privacy/" target="_blank" rel="noreferrer">プライバシーポリシー</a></div>
        <p>© Remake Studio M’s</p>
      </div>
    </footer>
  );
}
