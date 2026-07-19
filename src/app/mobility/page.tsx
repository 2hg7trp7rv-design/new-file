import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarIcon,
  CarIcon,
  CheckIcon,
  ClockIcon,
  ExternalLinkIcon,
  PhoneIcon,
} from "@/components/ui/Icons";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "施工中の移動・レンタカー",
  description: "M’s店内で受け付けるニコニコレンタカー米子久米町店と、施工時の移動方法をご案内します。",
  alternates: { canonical: "/mobility" },
};

export default function MobilityPage() {
  return (
    <main>
      <section className="page-hero page-hero-dark">
        <div className="page-hero-orb" />
        <div className="shell breadcrumb breadcrumb-dark"><Link href="/">HOME</Link><span>/</span><span>レンタカー</span></div>
        <div className="shell page-hero-content">
          <p className="eyebrow eyebrow-light">CAR CARE × MOBILITY</p>
          <h1>預けている時間を、<br />待つ時間にしない。</h1>
          <p>M’sとニコニコレンタカー米子久米町店は、同じ住所・同じ店内受付です。</p>
          <div className="page-hero-badges">
            <span><ClockIcon />レンタカー 8:00–19:00</span>
            <span><CarIcon />軽・コンパクト・ミニバン等</span>
            <span><CheckIcon />2024–2026 お客様大賞</span>
          </div>
        </div>
      </section>

      <section className="mobility-intro section shell">
        <div className="section-heading">
          <div><p className="eyebrow">ONE LOCATION</p><h2>同じ場所だから、<br />乗り換えがシンプル。</h2></div>
          <p>施工とレンタカーは別サービスですが、受付場所が同じです。両方の予約日時が合えば、M’sに愛車を預けたあと、その場でレンタカーへ乗り換えられます。</p>
        </div>

        <div className="mobility-steps-large">
          {[
            ["01", "施工を予約", "M’sへ施工内容と入庫日をご相談ください。"],
            ["02", "レンタカーを別途予約", "ニコニコレンタカーで空車・クラス・補償を選びます。"],
            ["03", "M’sへ愛車を預ける", "当日は施工内容と完成予定を最終確認します。"],
            ["04", "店内で貸渡手続き", "レンタカー受付後、そのまま予定へ出発できます。"],
            ["05", "返却後に愛車を受取", "完成時刻を確認し、レンタカー返却と愛車受取を行います。"],
          ].map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="comparison-section section section-tint">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">CHOOSE YOUR MOBILITY</p><h2>代車とレンタカーの違い。</h2></div>
            <p>どちらが合うかは、利用時間・人数・荷物・希望車種で変わります。利用条件は予約前に確認してください。</p>
          </div>
          <div className="comparison-grid">
            <article>
              <p className="card-eyebrow">COURTESY CAR</p>
              <h3>代車</h3>
              <p>施工時の移動手段として用意があります。台数、車種、料金、利用条件は施工内容と日程によって異なります。</p>
              <ul><li><CheckIcon />施工予約時に要確認</li><li><CheckIcon />台数・車種に限りあり</li><li><CheckIcon />条件は店舗へ相談</li></ul>
              <a className="text-link" href={`tel:${SITE.phone}`}><PhoneIcon />M’sへ確認する</a>
            </article>
            <article className="comparison-featured">
              <p className="card-eyebrow">NICONICO RENT A CAR</p>
              <h3>レンタカー</h3>
              <p>別途料金・予約が必要ですが、用途に合わせて車両クラスや補償を選べます。受付はM’s店内です。</p>
              <ul><li><CheckIcon />8:00–19:00</li><li><CheckIcon />ウィークリー・マンスリー対応</li><li><CheckIcon />高年式・ハイブリッド車も案内</li></ul>
              <a className="text-link" href={SITE.rentalUrl} target="_blank" rel="noreferrer">公式ページで空車検索 <ExternalLinkIcon /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="rental-facts section shell">
        <div className="rental-award-block"><span>2024</span><span>2025</span><span>2026</span><div><small>CUSTOMER GRAND PRIZE</small><h2>3年連続 お客様大賞</h2><p>ニコニコレンタカー米子久米町店の公式ページに掲載されている実績です。</p></div></div>
        <div className="rental-info-card">
          <h3>ニコニコレンタカー 米子久米町店</h3>
          <dl><div><dt>受付場所</dt><dd>M’s店内</dd></div><div><dt>営業時間</dt><dd>{SITE.rentalHours}</dd></div><div><dt>電話</dt><dd>{SITE.rentalPhoneDisplay}</dd></div><div><dt>住所</dt><dd>{SITE.address}</dd></div></dl>
          <a className="button" href={SITE.rentalUrl} target="_blank" rel="noreferrer"><CalendarIcon />空車・料金を確認</a>
        </div>
      </section>

      <section className="mobility-disclaimer section section-tint">
        <div className="shell narrow-copy"><p className="eyebrow">BEFORE BOOKING</p><h2>先に確認していただきたいこと。</h2><ul><li>施工予約とレンタカー予約は、それぞれ必要です。</li><li>施工料金にレンタカー料金は含まれていません。</li><li>希望車種・クラスの確約はレンタカー側の空車状況によります。</li><li>貸渡料金、補償、免責、燃料、キャンセル規定はニコニコレンタカーの規定に準じます。</li><li>M’sとレンタカーでは営業時間・休業日が異なります。</li></ul></div>
      </section>
    </main>
  );
}
