import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarIcon,
  CarIcon,
  CheckIcon,
  ClockIcon,
  DropletsIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  SparklesIcon,
} from "@/components/ui/Icons";
import { SERVICES } from "@/data/services";
import { SITE } from "@/data/site";
import { WORKS } from "@/data/works";

export const metadata: Metadata = {
  title: "米子の純水手洗い洗車・磨き・カーコーティング専門店",
  description:
    "鳥取県米子市のRemake Studio M’s。実車を確認し、純水手洗い洗車、ボディ磨き、カーコーティングから必要な施工をご提案します。店内でレンタカー受付にも対応。",
};

const serviceIcons = {
  wash: DropletsIcon,
  polish: SparklesIcon,
  coating: ShieldIcon,
};

const servicePriceLabels = {
  wash: "一般料金・SSサイズ",
  polish: "LEVEL 1・SSサイズ",
  coating: "新車・SSサイズ",
};

const processSteps = [
  {
    number: "01",
    title: "実車を確認",
    text: "傷、くすみ、水ジミ、塗装状態を照明下で確認します。",
  },
  {
    number: "02",
    title: "施工内容を決定",
    text: "保管環境、ご予算、乗る予定の年数まで伺って工程を組みます。",
  },
  {
    number: "03",
    title: "下地から整える",
    text: "洗浄と必要最小限の研磨で、コーティング前の塗装面を整えます。",
  },
  {
    number: "04",
    title: "仕上がりを共有",
    text: "施工箇所を一緒に確認し、その後のお手入れ方法をご案内します。",
  },
];

const faqs = [
  {
    question: "コーティングには何日かかりますか？",
    answer:
      "基本は2泊3日のご案内です。商品、車種、塗装状態、必要な研磨によって変わるため、ご予約前に完成予定をご案内します。",
  },
  {
    question: "施工中にレンタカーを使えますか？",
    answer:
      "施工とレンタカー双方の予約日時が合えば利用できます。M’sとニコニコレンタカー米子久米町店は同じ店内受付ですが、予約・料金・精算は別です。",
  },
  {
    question: "代車はありますか？",
    answer:
      "代車の用意があります。台数、利用条件、料金の扱いは施工内容と日程によって異なるため、ご予約時に確認をお願いします。",
  },
  {
    question: "どのコーティングを選べばよいですか？",
    answer:
      "商品名を決めずにご相談ください。保有予定年数、保管環境、洗車頻度、ご予算を伺い、選択肢と違いをご説明します。",
  },
  {
    question: "新車料金はいつまでですか？",
    answer:
      "公開料金表では納車から1カ月以内が対象です。それ以降は実車の塗装状態を確認してご案内します。",
  },
];

const news = [
  {
    date: "2025.11.07",
    title: "リメイクスタジオエムズ境港店休業のお知らせ",
    href: "https://remakestudioms.com/news.html?id=2850",
  },
  {
    date: "2025.08.06",
    title: "夏季休業に伴う休業日のお知らせ",
    href: "https://remakestudioms.com/news.html?id=2848",
  },
  {
    date: "2025.06.23",
    title: "価格改定のお知らせ",
    href: "https://remakestudioms.com/news.html?id=2837",
  },
];

export default function HomePage() {
  const [featuredWork, ...otherWorks] = WORKS;

  return (
    <main id="main-content" className="studio-home" tabIndex={-1}>
      <section className="studio-hero" aria-labelledby="hero-title">
        <div className="studio-shell studio-hero__grid">
          <div className="studio-hero__copy">
            <p className="studio-kicker">YONAGO · CAR DETAILING STUDIO</p>
            <h1 id="hero-title">
              磨きで整え、守る。
              <span>預けたあとの予定まで、止めない選択肢を。</span>
            </h1>
            <p className="studio-hero__lead">
              米子市の純水手洗い洗車・ボディ磨き・カーコーティング専門店。
              車の状態を見て、必要な施工だけをご提案します。
            </p>
            <div className="studio-actions">
              <a
                className="studio-button studio-button--primary"
                href="#services"
                data-cta="view_services"
                data-cta-location="hero"
              >
                メニュー・一般料金を見る <ArrowRightIcon />
              </a>
              <a
                className="studio-button studio-button--outline"
                href={SITE.reserveUrl}
                target="_blank"
                rel="noreferrer"
                data-cta="reserve"
                data-cta-location="hero"
              >
                <CalendarIcon /> Webで施工を予約
              </a>
            </div>
            <p className="studio-hero__caution">
              レンタカーは施工と別予約・別料金です。同時利用には事前の空車確認が必要です。
            </p>
          </div>

          <div className="studio-hero__visual" aria-label="M’sの実施工と作業風景">
            <figure className="studio-hero__main-photo">
              <Image
                src={featuredWork.image}
                alt={featuredWork.imageAlt}
                fill
                priority
                sizes="(max-width: 860px) 100vw, 52vw"
              />
              <figcaption>
                <span>実施工</span>
                <strong>{featuredWork.vehicle}</strong>
                <small>{featuredWork.menu}</small>
              </figcaption>
            </figure>
            <figure className="studio-hero__sub-photo">
              <Image
                src="/images/craft-polish.jpg"
                alt="M’sのスタッフが実車のボディを研磨している様子"
                fill
                sizes="(max-width: 860px) 44vw, 240px"
              />
            </figure>
            <p className="studio-hero__photo-label">
              <CheckIcon /> 実車・実店舗の写真を掲載
            </p>
          </div>
        </div>

        <div className="studio-shell studio-proof" aria-label="M’sの特徴">
          <div><strong>G’ZOX</strong><span>パートナープログラム登録店</span></div>
          <div><strong>PURE WATER</strong><span>純水手洗い仕上げ</span></div>
          <div><strong>IN-HOUSE</strong><span>洗車・研磨・施工まで対応</span></div>
          <div><strong>MOBILITY</strong><span>同じ店内でレンタカー受付</span></div>
        </div>
      </section>

      <aside className="studio-important" aria-label="レンタカー利用の重要事項">
        <div className="studio-shell">
          <span>IMPORTANT</span>
          <p>
            施工予約とレンタカー予約は別々に必要です。施工料金にレンタカー料金は含まれません。
          </p>
          <Link href="/mobility">利用条件を見る <ArrowRightIcon /></Link>
        </div>
      </aside>

      <section className="studio-section studio-works" aria-labelledby="works-title">
        <div className="studio-shell">
          <div className="studio-heading">
            <div>
              <p className="studio-kicker studio-kicker--red">PUBLISHED WORKS</p>
              <h2 id="works-title">仕上がりは、実例で見る。</h2>
            </div>
            <div>
              <p>
                旧公式サイトに公開されている米子店の施工記録から移行しました。車種、商品、工程を確認できた実例だけを掲載しています。
              </p>
              <Link className="studio-text-link" href="/works">
                施工事例をまとめて見る <ArrowRightIcon />
              </Link>
            </div>
          </div>

          <article className="studio-work-feature" id={`work-${featuredWork.id}`}>
            <Link className="studio-work-feature__image" href="/works">
              <Image
                src={featuredWork.image}
                alt={featuredWork.imageAlt}
                fill
                sizes="(max-width: 760px) 100vw, 65vw"
              />
            </Link>
            <div className="studio-work-feature__copy">
              <p>{featuredWork.publishedLabel} · {featuredWork.customer}</p>
              <h3>{featuredWork.vehicle}</h3>
              <strong>{featuredWork.menu}</strong>
              <span>{featuredWork.process}</span>
              <a
                href={featuredWork.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="studio-text-link studio-text-link--light"
                data-cta="work_source"
                data-cta-location="works_feature"
              >
                公式施工記録を確認 <ArrowRightIcon />
              </a>
            </div>
          </article>

          <div className="studio-work-grid">
            {otherWorks.map((work) => (
              <article className="studio-work-card" id={`work-${work.id}`} key={work.id}>
                <Link className="studio-work-card__image" href="/works">
                  <Image src={work.image} alt={work.imageAlt} fill sizes="(max-width: 720px) 100vw, 33vw" />
                </Link>
                <div>
                  <p>{work.publishedLabel} · {work.customer}</p>
                  <h3>{work.vehicle}</h3>
                  <span>{work.menu}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section studio-services" id="services" aria-labelledby="services-title">
        <div className="studio-shell">
          <div className="studio-heading studio-heading--light">
            <div>
              <p className="studio-kicker studio-kicker--gold">SERVICES & PRICE</p>
              <h2 id="services-title">最初に、一般料金を明確に。</h2>
            </div>
            <p>
              会員価格だけを大きく見せず、初めての方が実際に検討できる入口価格を表示しています。すべて税込です。
            </p>
          </div>

          <div className="studio-service-grid">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.slug];
              return (
                <article className="studio-service-card" key={service.slug}>
                  <Link className="studio-service-card__image" href={`/services/${service.slug}`}>
                    <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                    <span><Icon /></span>
                  </Link>
                  <div className="studio-service-card__body">
                    <p>{service.eyebrow}</p>
                    <h3>{service.name}</h3>
                    <span className="studio-service-card__summary">{service.summary}</span>
                    <div className="studio-service-card__price">
                      <small>{servicePriceLabels[service.slug]}・税込</small>
                      <strong>{service.startingPrice}</strong>
                    </div>
                    <Link
                      className="studio-card-link"
                      href={`/services/${service.slug}`}
                      data-cta="service_detail"
                      data-cta-location={`service_${service.slug}`}
                    >
                      内容と料金表を見る <ArrowRightIcon />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="studio-services__note">
            ※車種サイズ、塗装状態、必要な下地処理によって料金が変わります。新車料金は納車から1カ月以内が対象です。
          </p>
        </div>
      </section>

      <section className="studio-section studio-craft" id="craft" aria-labelledby="craft-title">
        <div className="studio-shell">
          <div className="studio-heading">
            <div>
              <p className="studio-kicker studio-kicker--red">CRAFT & PEOPLE</p>
              <h2 id="craft-title">誰が、どう整えるかまで見せる。</h2>
            </div>
            <p>
              高価な商品名より先に、塗装の状態と工程を確認します。必要以上に削らず、コーティングが性能を発揮できる下地をつくります。
            </p>
          </div>

          <div className="studio-before-after" aria-label="LEVEL 2研磨の施工前後">
            <figure>
              <Image src="/images/polish-before.jpg" alt="水ジミが残った塗装面の研磨前" fill sizes="(max-width: 720px) 100vw, 50vw" />
              <figcaption>BEFORE <span>水ジミが残った状態</span></figcaption>
            </figure>
            <figure>
              <Image src="/images/polish-after.jpg" alt="LEVEL 2研磨後に水ジミが除去された塗装面" fill sizes="(max-width: 720px) 100vw, 50vw" />
              <figcaption>AFTER <span>LEVEL 2 鏡面研磨後</span></figcaption>
            </figure>
          </div>
          <p className="studio-before-after__caption">
            公式施工例：水道水由来の水ジミをポリッシュ LEVEL 2で研磨。画像内の赤枠は旧公式サイト掲載時のものです。
          </p>

          <div className="studio-process">
            <div className="studio-process__image">
              <Image
                src="/images/craft-polish.jpg"
                alt="M’sのスタッフが車の塗装面を機械研磨している様子"
                fill
                sizes="(max-width: 860px) 100vw, 45vw"
              />
            </div>
            <ol>
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <div className="studio-staff">
            <div className="studio-staff__intro">
              <p className="studio-kicker studio-kicker--red">STAFF</p>
              <h3>商品を決める前に、車を見せてください。</h3>
              <p>現行の公式スタッフ一覧に掲載されている米子店スタッフです。</p>
            </div>
            <figure>
              <Image src="/images/staff-ikuta.jpg" alt="マネージャーの生田大輔" width={180} height={240} />
              <figcaption><strong>生田 大輔</strong><span>マネージャー</span></figcaption>
            </figure>
            <figure>
              <Image src="/images/staff-motoda.jpg" alt="スタッフの元田樹" width={180} height={240} />
              <figcaption><strong>元田 樹</strong><span>スタッフ</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="studio-section studio-mobility" aria-labelledby="mobility-title">
        <div className="studio-shell">
          <div className="studio-mobility__top">
            <div>
              <p className="studio-kicker studio-kicker--gold">CAR CARE × MOBILITY</p>
              <h2 id="mobility-title">施工中も、予定を止めない。</h2>
            </div>
            <p>
              M’sとニコニコレンタカー米子久米町店は、同じ住所・同じ店内受付です。双方の予約日時が合えば、入庫後その場でレンタカーへ乗り換えられます。
            </p>
          </div>

          <ol className="studio-mobility__flow">
            {[
              ["01", "施工を予約", "M’sのメニューと入庫日時を予約"],
              ["02", "レンタカーを別予約", "空車・料金・補償を別途確認"],
              ["03", "入庫して外出", "同じ店内で貸渡手続き"],
              ["04", "返却・愛車受取", "完成内容を確認して引き渡し"],
            ].map(([number, title, text]) => (
              <li key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </li>
            ))}
          </ol>

          <div className="studio-mobility__bottom">
            <div>
              <strong>別予約・別料金</strong>
              <p>レンタカーの料金、補償、免責、燃料、キャンセル条件はニコニコレンタカーの規定に準じます。</p>
            </div>
            <div className="studio-actions">
              <Link className="studio-button studio-button--light" href="/mobility">
                利用方法を確認 <ArrowRightIcon />
              </Link>
              <a
                className="studio-button studio-button--ghost"
                href={SITE.rentalUrl}
                target="_blank"
                rel="noreferrer"
                data-cta="rental_availability"
                data-cta-location="mobility"
              >
                レンタカーの空車・料金 <CarIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-section studio-location" aria-labelledby="location-title">
        <div className="studio-shell studio-location__grid">
          <div className="studio-location__photo">
            <Image
              src="/images/store-exterior.jpg"
              alt="純水手洗い洗車とカーコーティングの看板があるRemake Studio M’s米子店の外観"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
            <span>実店舗外観</span>
          </div>
          <div className="studio-location__copy">
            <p className="studio-kicker studio-kicker--red">ACCESS</p>
            <h2 id="location-title">米子駅から徒歩約10分。</h2>
            <p>ANAクラウンプラザホテル米子さま向かい。車の入庫口と受付が並ぶ店舗です。</p>
            <dl>
              <div><dt><MapPinIcon />住所</dt><dd>〒{SITE.postalCode}<br />{SITE.address}</dd></div>
              <div><dt><ClockIcon />営業時間</dt><dd>{SITE.hours}<br /><small>{SITE.closed}</small></dd></div>
              <div><dt><PhoneIcon />電話</dt><dd><a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></dd></div>
            </dl>
            <div className="studio-actions">
              <a
                className="studio-button studio-button--primary"
                href={SITE.mapUrl}
                target="_blank"
                rel="noreferrer"
                data-cta="open_map"
                data-cta-location="access"
              >
                地図アプリで開く <ArrowRightIcon />
              </a>
              <Link className="studio-text-link" href="/access">店舗情報を見る <ArrowRightIcon /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="studio-news" aria-labelledby="news-title">
        <div className="studio-shell studio-news__grid">
          <div><p className="studio-kicker studio-kicker--red">INFORMATION</p><h2 id="news-title">掲載中のお知らせ</h2></div>
          <div className="studio-news__list">
            {news.map((item) => (
              <a href={item.href} target="_blank" rel="noreferrer" key={item.href}>
                <time>{item.date}</time><span>{item.title}</span><ArrowRightIcon />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section studio-faq" aria-labelledby="faq-title">
        <div className="studio-shell studio-faq__grid">
          <div className="studio-faq__heading">
            <p className="studio-kicker studio-kicker--red">FAQ</p>
            <h2 id="faq-title">予約前に、気になること。</h2>
            <p>商品を決めていなくても相談できます。</p>
          </div>
          <div className="studio-faq__list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary><span>Q{String(index + 1).padStart(2, "0")}</span>{faq.question}<i /></summary>
                <div><p>{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-final-cta" aria-labelledby="final-cta-title">
        <div className="studio-shell">
          <p className="studio-kicker studio-kicker--gold">CONSULTATION</p>
          <h2 id="final-cta-title">商品を決めずに、ご相談ください。</h2>
          <p>車を見ながら、必要な作業、料金、完成予定をご説明します。</p>
          <div className="studio-actions studio-actions--center">
            <a
              className="studio-button studio-button--light"
              href={SITE.reserveUrl}
              target="_blank"
              rel="noreferrer"
              data-cta="reserve"
              data-cta-location="final"
            >
              <CalendarIcon /> Webで施工を予約
            </a>
            <a
              className="studio-button studio-button--ghost"
              href={SITE.contactUrl}
              target="_blank"
              rel="noreferrer"
              data-cta="contact_form"
              data-cta-location="final"
            >
              予約前に問い合わせる <ArrowRightIcon />
            </a>
            <a
              className="studio-phone-link"
              href={`tel:${SITE.phone}`}
              data-cta="phone"
              data-cta-location="final"
            >
              <PhoneIcon /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
