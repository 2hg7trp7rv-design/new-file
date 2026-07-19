import type { Metadata } from "next";
import Link from "next/link";
import { CalendarIcon, CarIcon, ClockIcon, MapPinIcon, PhoneIcon } from "@/components/ui/Icons";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "店舗情報・アクセス",
  description: `Remake Studio M’sの住所、営業時間、電話番号。${SITE.address}、米子駅から徒歩約10分。`,
  alternates: { canonical: "/access" },
};

export default function AccessPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="shell breadcrumb"><Link href="/">HOME</Link><span>/</span><span>アクセス</span></div>
        <div className="shell page-hero-content"><p className="eyebrow">SHOP & ACCESS</p><h1>初めてでも、<br />立ち寄りやすい場所に。</h1><p>米子駅から徒歩約10分。ANAクラウンプラザホテル米子さま向かいです。</p></div>
      </section>

      <section className="shop-detail section shell">
        <div className="shop-map"><iframe title="Remake Studio M’sの地図" src={SITE.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        <div className="shop-panel">
          <p className="eyebrow">REMAKE STUDIO M’S YONAGO</p>
          <h2>リメイクスタジオ エムズ 米子</h2>
          <dl><div><dt><MapPinIcon />住所</dt><dd>〒{SITE.postalCode}<br />{SITE.address}</dd></div><div><dt><ClockIcon />営業時間</dt><dd>{SITE.hours}<small>{SITE.closed}</small></dd></div><div><dt><PhoneIcon />電話</dt><dd><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></dd></div></dl>
          <div className="shop-actions"><a className="button" href={SITE.mapUrl} target="_blank" rel="noreferrer">地図アプリで開く</a><a className="button button-secondary" href={SITE.reserveUrl} target="_blank" rel="noreferrer"><CalendarIcon />Web予約</a></div>
        </div>
      </section>

      <section className="landmarks section section-tint"><div className="shell"><div className="section-heading"><div><p className="eyebrow">LANDMARK</p><h2>ご来店の目印</h2></div><p>お近くまで来られた際は、ホテルと店舗位置をご確認ください。</p></div><div className="landmark-grid"><article><span>01</span><h3>米子駅</h3><p>駅から徒歩約10分。駅前交差点から久米町方面へ進みます。</p></article><article><span>02</span><h3>ANAクラウンプラザホテル米子</h3><p>ホテルさまの道路向かい側がM’sです。</p></article><article><span>03</span><h3>米子コンベンションセンター</h3><p>ビッグシップ周辺からもアクセスしやすい立地です。</p></article></div></div></section>

      <section className="rental-counter section shell"><div><p className="eyebrow">IN THE SAME SHOP</p><h2>レンタカー受付も、同じ店内です。</h2><p>ニコニコレンタカー米子久米町店はM’s店内で受付しています。M’sとは営業時間・電話番号・予約経路が異なります。</p></div><div className="rental-counter-card"><span><CarIcon /></span><dl><div><dt>営業時間</dt><dd>{SITE.rentalHours}</dd></div><div><dt>電話</dt><dd>{SITE.rentalPhoneDisplay}</dd></div><div><dt>営業日</dt><dd>水曜定休を廃止</dd></div></dl><a className="text-link" href={SITE.rentalUrl} target="_blank" rel="noreferrer">レンタカー公式ページへ</a></div></section>
    </main>
  );
}
