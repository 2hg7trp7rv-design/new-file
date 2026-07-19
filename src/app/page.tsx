import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CoatingSelector } from "@/components/CoatingSelector";
import {
  ArrowRightIcon,
  CalendarIcon,
  CarIcon,
  CheckIcon,
  ClockIcon,
  DropletsIcon,
  MapPinIcon,
  ShieldIcon,
  SparklesIcon,
} from "@/components/ui/Icons";
import { SERVICES } from "@/data/services";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "純水手洗い洗車・磨き・カーコーティング専門店",
  description:
    "鳥取県米子市のRemake Studio M’s。純水手洗い洗車、ボディ磨き、カーコーティング。店内でニコニコレンタカー米子久米町店の受付も行っています。",
};

const serviceIcons = {
  wash: DropletsIcon,
  polish: SparklesIcon,
  coating: ShieldIcon,
};

const faqs = [
  {
    question: "コーティングには何日かかりますか？",
    answer:
      "基本は2泊3日のご案内です。ただし商品、車種、塗装状態、必要な研磨によって変わります。ご予約前に車両状態を確認し、正確な日程をご案内します。",
  },
  {
    question: "施工中にレンタカーを利用できますか？",
    answer:
      "M’s店内にニコニコレンタカー米子久米町店の受付があります。施工とレンタカーは別予約・別料金のため、同時利用をご希望の場合は、車両の空き状況も含めて事前にご相談ください。",
  },
  {
    question: "代車はありますか？",
    answer:
      "代車のご用意があります。台数や利用条件、料金の扱いは施工内容と日程によって異なるため、ご予約時に確認をお願いします。",
  },
  {
    question: "新車価格の対象はいつまでですか？",
    answer:
      "公開料金表では、納車から1カ月以内を新車扱いとしています。それ以降でも塗装状態によってご提案内容が変わるため、まずはご相談ください。",
  },
  {
    question: "どのコーティングを選べばいいか分かりません。",
    answer:
      "乗る予定の年数、屋内・屋外の保管環境、洗車頻度、ご予算を伺ってご提案します。商品名を決めずにご来店いただいて問題ありません。",
  },
];

export default function HomePage() {
  return (
    <>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media">
            <Image
              src="/images/ms-hero.webp"
              alt="明るい施工ブースで仕上がった白い車のサービスイメージ"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-content shell">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">YONAGO / CAR DETAILING STUDIO</p>
              <h1 id="hero-title">
                愛車がきれいになる時間も、
                <span>あなたは動ける。</span>
              </h1>
              <p className="hero-lead">
                純水手洗い洗車、磨き、カーコーティング。
                <br />
                そして同じ店内で、レンタカー受付まで。
              </p>
              <div className="hero-actions">
                <a className="button" href="#services">
                  メニュー・料金を見る <ArrowRightIcon />
                </a>
                <a className="button button-ghost" href={SITE.reserveUrl} target="_blank" rel="noreferrer">
                  <CalendarIcon /> Web予約
                </a>
              </div>
              <div className="hero-proof" aria-label="店舗の特徴">
                <span><CheckIcon />創業1929年の松本油店が運営</span>
                <span><CheckIcon />G’ZOX登録パートナー</span>
                <span><CheckIcon />レンタカー店内受付</span>
              </div>
            </div>
          </div>
          <p className="visual-note">掲載写真はサービスイメージです</p>
        </section>

        <div className="important-note">
          <div className="shell">
            <span>ご案内</span>
            <p>
              レンタカーは施工と別予約・別料金です。同時利用をご希望の場合は、事前に空車状況をご確認ください。
            </p>
            <Link href="/mobility">詳しく見る <ArrowRightIcon /></Link>
          </div>
        </div>

        <section className="intro section shell" aria-labelledby="intro-title">
          <div className="section-heading intro-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2 id="intro-title">きれいにするだけでなく、<br />きれいが続くところまで。</h2>
            </div>
            <p>
              車の状態と使い方は、一台ずつ違います。だから商品を先に決めつけず、塗装状態、保管環境、洗車頻度、乗る予定の年数を確認するところから始めます。
            </p>
          </div>

          <div className="intro-principles">
            <article>
              <span>01</span>
              <h3>洗う</h3>
              <p>砂や汚れを正しい順序で落とし、純水で水ジミを残しにくく。</p>
            </article>
            <article>
              <span>02</span>
              <h3>整える</h3>
              <p>必要最小限の研磨で、塗装のくすみや洗車傷を整える。</p>
            </article>
            <article>
              <span>03</span>
              <h3>守る</h3>
              <p>予算と保有期間に合うコーティングで、日々のお手入れを楽に。</p>
            </article>
          </div>
        </section>

        <section className="services section section-tint" id="services" aria-labelledby="services-title">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SERVICES & PRICE</p>
                <h2 id="services-title">必要なケアが、すぐ分かる。</h2>
              </div>
              <p>まず知りたい最低料金と、作業内容を並べました。表示料金はすべて税込です。</p>
            </div>

            <div className="service-grid">
              {SERVICES.map((service) => {
                const Icon = serviceIcons[service.slug];
                return (
                  <article className="service-card" key={service.slug}>
                    <Link className="service-card-image" href={`/services/${service.slug}`}>
                      <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                      <span className="service-icon"><Icon /></span>
                    </Link>
                    <div className="service-card-body">
                      <p className="card-eyebrow">{service.eyebrow}</p>
                      <h3>{service.name}</h3>
                      <p>{service.summary}</p>
                      <div className="service-price">
                        <div>
                          <small>税込</small>
                          <strong>{service.startingPrice}</strong>
                          <span>{service.priceCaption}</span>
                        </div>
                        <Link className="round-link" href={`/services/${service.slug}`} aria-label={`${service.name}の詳細を見る`}>
                          <ArrowRightIcon />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="image-disclaimer">サービス写真はイメージです。実際の店舗・車両とは異なります。</p>
          </div>
        </section>

        <section className="mobility section" aria-labelledby="mobility-title">
          <div className="mobility-orb mobility-orb-one" />
          <div className="mobility-orb mobility-orb-two" />
          <div className="shell mobility-layout">
            <div className="mobility-copy">
              <p className="eyebrow eyebrow-light">CAR CARE × MOBILITY</p>
              <h2 id="mobility-title">預けたあとの予定まで、<br />止めないために。</h2>
              <p>
                M’sとニコニコレンタカー米子久米町店は、同じ住所・同じ店内受付です。愛車の施工とレンタカーの空きが合えば、その場で移動へ切り替えられます。
              </p>
              <div className="mobility-awards">
                <span>2024</span><span>2025</span><span>2026</span>
                <p>ニコニコレンタカー<br /><strong>3年連続 お客様大賞</strong></p>
              </div>
              <Link className="button button-light" href="/mobility">
                利用方法と注意点 <ArrowRightIcon />
              </Link>
            </div>

            <div className="mobility-flow">
              {[
                ["01", "M’sへ入庫", "車両状態と施工内容、完成予定を確認します。"],
                ["02", "同じ店内で受付", "別途予約したレンタカーの手続きを行います。"],
                ["03", "そのまま外出", "仕事、買い物、旅行など予定を続けられます。"],
                ["04", "返却・愛車受取", "レンタカー返却後、仕上がった愛車を受け取ります。"],
              ].map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
              <p className="mobility-caution">
                ※施工とレンタカーは別予約・別精算です。空車、料金、補償、利用条件はニコニコレンタカーの規定に準じます。
              </p>
            </div>
          </div>
        </section>

        <section className="coating section shell" id="coating" aria-labelledby="coating-title">
          <div className="section-heading coating-heading">
            <div>
              <p className="eyebrow">CHOOSE BY DURATION</p>
              <h2 id="coating-title">何年守りたいかで、選びやすく。</h2>
            </div>
            <p>
              商品名を覚える必要はありません。まずは希望する耐久の目安から、考え方と価格を比べてください。
            </p>
          </div>
          <CoatingSelector />
          <p className="coating-note">
            価格は公開料金表に基づくSSサイズの目安です。車種、塗装状態、下地処理で変わります。
          </p>
        </section>

        <section className="quality section section-tint" id="quality" aria-labelledby="quality-title">
          <div className="shell quality-layout">
            <div className="quality-title-block">
              <p className="eyebrow">OUR STANDARD</p>
              <h2 id="quality-title">仕上がりを支える、<br />見えない標準。</h2>
              <p>
                強い言葉より、正しい工程。塗装への負担を抑えながら、コーティングが性能を発揮できる下地と環境を整えます。
              </p>
              <Link className="text-link" href="/services/polish">磨きへの考え方 <ArrowRightIcon /></Link>
            </div>

            <div className="quality-grid">
              <article>
                <span><SparklesIcon /></span>
                <h3>専用施工ブース</h3>
                <p>雨、ほこり、湿度、気温の影響を抑えた環境で施工します。</p>
              </article>
              <article>
                <span><ShieldIcon /></span>
                <h3>必要最小限の研磨</h3>
                <p>塗装をむやみに削らず、状態に合う研磨レベルをご提案します。</p>
              </article>
              <article>
                <span><DropletsIcon /></span>
                <h3>純水で最終仕上げ</h3>
                <p>ミネラル由来の水ジミを残しにくく、細部まできれいに整えます。</p>
              </article>
              <article>
                <span><CheckIcon /></span>
                <h3>G’ZOX登録店</h3>
                <p>複数のG’ZOX商品を扱う公式施工店として登録されています。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="company section" aria-labelledby="company-title">
          <div className="shell company-layout">
            <div className="company-copy">
              <p className="eyebrow">BACKED BY MATSUMOTO OIL</p>
              <h2 id="company-title">車が必要な山陰で、<br />創業1929年から。</h2>
              <p>
                M’sを運営するのは株式会社松本油店。給油、車検・整備、車両販売、保険、レンタカーまで、地域のカーライフを支えてきた会社です。
              </p>
              <Link className="button button-secondary" href="/about">
                運営会社と関連サービス <ArrowRightIcon />
              </Link>
            </div>
            <div className="company-numbers">
              <article><strong>1929</strong><span>創業</span></article>
              <article><strong>44.4<small>億円</small></strong><span>公表売上高<br />2025年5月実績</span></article>
              <article><strong>山陰</strong><span>鳥取・島根の<br />生活と産業を支援</span></article>
            </div>
          </div>
          <div className="car-life-strip shell" aria-label="関連カーライフサービス">
            {[
              [CarIcon, "車両販売・買取"],
              [ShieldIcon, "車検・整備"],
              [DropletsIcon, "給油・洗車"],
              [CheckIcon, "自動車保険"],
            ].map(([Icon, label]) => {
              const ItemIcon = Icon as typeof CarIcon;
              return <div key={label as string}><ItemIcon /><span>{label as string}</span></div>;
            })}
          </div>
        </section>

        <section className="access section section-tint" aria-labelledby="access-title">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">ACCESS</p>
                <h2 id="access-title">米子駅から徒歩約10分。</h2>
              </div>
              <p>ANAクラウンプラザホテル米子さま向かい。お車でも公共交通でも立ち寄りやすい場所です。</p>
            </div>
            <div className="access-layout">
              <div className="map-frame">
                <iframe
                  title="Remake Studio M’sの地図"
                  src={SITE.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="access-info">
                <div className="access-address">
                  <MapPinIcon />
                  <div><small>ADDRESS</small><strong>〒{SITE.postalCode}<br />{SITE.address}</strong></div>
                </div>
                <div className="hours-grid">
                  <article>
                    <span><ClockIcon /></span>
                    <div><small>M’s 営業時間</small><strong>{SITE.hours}</strong><p>{SITE.closed}</p></div>
                  </article>
                  <article>
                    <span><CarIcon /></span>
                    <div><small>レンタカー 営業時間</small><strong>{SITE.rentalHours}</strong><p>曜日を問わず営業</p></div>
                  </article>
                </div>
                <div className="access-actions">
                  <a className="button" href={SITE.mapUrl} target="_blank" rel="noreferrer">地図アプリで開く <ArrowRightIcon /></a>
                  <Link className="text-link" href="/access">店舗情報を見る <ArrowRightIcon /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq section shell" aria-labelledby="faq-title">
          <div className="faq-heading">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">よくあるご質問</h2>
            <p>予約前に気になりやすい点をまとめました。</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary><span>Q{String(index + 1).padStart(2, "0")}</span>{faq.question}<i /></summary>
                <div><p>{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
