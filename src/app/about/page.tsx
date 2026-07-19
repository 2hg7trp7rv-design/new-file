import Link from "next/link";
import { ArrowRightIcon, CarIcon, CheckIcon, DropletsIcon, ShieldIcon, SparklesIcon } from "@/components/ui/Icons";
import { createPageMetadata } from "@/data/metadata";

export const metadata = createPageMetadata({
  title: "M’sと運営会社について",
  description: "Remake Studio M’sと、運営会社・株式会社松本油店のカーライフ事業をご紹介します。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <nav className="shell breadcrumb" aria-label="パンくず"><Link href="/">HOME</Link><span aria-hidden="true">/</span><span aria-current="page">私たちについて</span></nav>
        <div className="shell page-hero-content"><p className="eyebrow">ABOUT US</p><h1>一台のきれいから、<br />地域のカーライフまで。</h1><p>Remake Studio M’sは、株式会社松本油店が運営するカーケア専門ブランドです。</p></div>
      </section>

      <section className="about-story section shell">
        <div className="section-heading"><div><p className="eyebrow">OUR ROLE</p><h2>M’sが担うのは、<br />愛車の「きれい」。</h2></div><p>洗車、磨き、コーティングを専門に、車両状態と使い方に合う施工をご提案します。販売店やガソリンスタンドの付帯作業ではなく、専用ブースで下地から仕上げる専門サービスです。</p></div>
        <div className="about-values">
          {[[DropletsIcon,"正しい順序で洗う","砂や汚れを先に落とし、塗装への負担を抑えて純水で仕上げます。"],[SparklesIcon,"削り過ぎずに整える","塗装状態を見極め、必要最小限の研磨で下地を整えます。"],[ShieldIcon,"使い方に合わせて守る","耐久年数、保管場所、洗車頻度からコーティングをご提案します。"]].map(([Icon,title,text])=>{const ItemIcon=Icon as typeof DropletsIcon;return <article key={title as string}><ItemIcon/><h3>{title as string}</h3><p>{text as string}</p></article>})}
        </div>
      </section>

      <section className="operator-section section section-tint">
        <div className="shell operator-layout">
          <div><p className="eyebrow">OPERATOR</p><h2>株式会社松本油店</h2><p>1929年創業。燃料供給から始まり、現在は給油、車両販売、車検・整備、保険、レンタカー、LPガス、リフォーム、法人向け燃料配送など、山陰の生活と産業を幅広く支えています。</p><a className="text-link" href="https://mabr.jp/company/" target="_blank" rel="noreferrer">松本油店 会社概要 <ArrowRightIcon /></a></div>
          <dl className="company-facts"><div><dt>創業</dt><dd>1929年4月1日</dd></div><div><dt>法人設立</dt><dd>1986年3月6日</dd></div><div><dt>資本金</dt><dd>3,000万円</dd></div><div><dt>売上高</dt><dd>44億4,000万円<small>2025年5月実績</small></dd></div><div><dt>本社</dt><dd>鳥取県米子市流通町158-20</dd></div></dl>
        </div>
      </section>

      <section className="car-network section shell">
        <div className="section-heading"><div><p className="eyebrow">CAR LIFE NETWORK</p><h2>車の購入から、<br />日々の維持まで。</h2></div><p>M’sだけで完結させず、松本油店の各事業と連携して車に関する相談を受けられることが、地域企業としての強みです。</p></div>
        <div className="network-grid">
          {[
            [CarIcon,"VEHICLE next","新車・中古車販売、買取、車検、修理を扱う松本油店直営の指定工場。"],
            [DropletsIcon,"サービスステーション","鳥取県内を中心とした給油・洗車・メンテナンスのネットワーク。"],
            [ShieldIcon,"保険サービス","自動車保険を含む、日々のリスクに備える相談窓口。"],
            [CheckIcon,"ニコニコレンタカー","M’s米子店内で受付。短時間から長期利用まで対応。"],
          ].map(([Icon,title,text])=>{const ItemIcon=Icon as typeof CarIcon;return <article key={title as string}><span><ItemIcon/></span><h3>{title as string}</h3><p>{text as string}</p></article>})}
        </div>
      </section>

      <section className="related-business section section-tint"><div className="shell"><p className="eyebrow">BEYOND CAR LIFE</p><h2>地域の暮らしと産業を支える事業。</h2><div className="related-list"><span>LPガス</span><span>産業用蓄電池・非常用発電</span><span>リフォーム</span><span>燃料配送</span><span>潤滑油</span><span>包装資材</span><span>農業</span></div><p className="related-note">リフォーム累計3,500件以上、燃料配送年間1万件以上を公式公表しています。</p></div></section>
    </main>
  );
}
