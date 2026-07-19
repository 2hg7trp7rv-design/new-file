import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon, PhoneIcon } from "@/components/ui/Icons";
import { SITE } from "@/data/site";
import { WORKS } from "@/data/works";
import { createPageMetadata } from "@/data/metadata";

export const metadata = createPageMetadata({
  title: "施工事例",
  description:
    "Remake Studio M’s米子店の実施工事例。公開記録に記載された車種・施工メニュー・工程と、仕上がり写真を確認できます。",
  path: "/works",
});

export default function WorksPage() {
  return (
    <main id="main-content" className="studio-works-page" tabIndex={-1}>
      <section className="studio-page-hero">
        <div className="studio-shell studio-page-hero__grid">
          <div>
            <nav className="studio-breadcrumb" aria-label="パンくず">
              <Link href="/">HOME</Link><span aria-hidden="true">/</span><span aria-current="page">施工事例</span>
            </nav>
            <p className="studio-kicker studio-kicker--gold">WORKS ARCHIVE</p>
            <h1>実車で見る、<br />M’sの仕上がり。</h1>
          </div>
          <p>
            米子店が旧公式サイトで公開してきた施工記録から、内容を照合できた事例を移行しています。加工されたイメージ写真ではありません。
          </p>
        </div>
      </section>

      <section className="studio-section studio-works-archive" aria-labelledby="archive-title">
        <div className="studio-shell">
          <div className="studio-heading">
          <div><p className="studio-kicker studio-kicker--red">PUBLISHED RECORDS</p><h2 id="archive-title">公式サイトの公開施工記録</h2></div>
            <p>価格と施工時間は車種・塗装状態で変わるため、記録にない数値は掲載していません。</p>
          </div>

          <div className="studio-archive-grid">
            {WORKS.map((work) => (
              <article className="studio-archive-card" id={`work-${work.id}`} key={work.id}>
                <div className="studio-archive-card__image">
                  <Image src={work.image} alt={work.imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                  <span>{work.publishedLabel}</span>
                </div>
                <div className="studio-archive-card__body">
                  <p>{work.customer} · 米子店</p>
                  <h2>{work.vehicle}</h2>
                  <dl>
                    <div><dt>MENU</dt><dd>{work.menu}</dd></div>
                    <div><dt>PROCESS</dt><dd>{work.process}</dd></div>
                  </dl>
                  <a
                    className="studio-card-link"
                    href={work.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cta="work_source"
                    data-cta-location={`works_${work.id}`}
                  >
                    旧公式サイトの施工記録 <ArrowRightIcon />
                  </a>
                  <Link className="studio-card-link" href={work.servicePath} data-cta="service_detail" data-cta-location={`works_${work.id}`}>
                    このメニューの内容・料金 <ArrowRightIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section studio-works-before-after" aria-labelledby="ba-title">
        <div className="studio-shell">
          <div className="studio-heading studio-heading--light">
            <div><p className="studio-kicker studio-kicker--gold">PAINT CORRECTION</p><h2 id="ba-title">研磨は、塗装面の差で見る。</h2></div>
            <p>水道水由来の水ジミを、ポリッシュ LEVEL 2（鏡面研磨）で整えた公式施工例です。</p>
          </div>
          <div className="studio-before-after">
            <figure>
              <Image src="/images/polish-before.jpg" alt="水ジミが残った塗装面の研磨前" fill sizes="(max-width: 720px) 100vw, 50vw" />
              <figcaption>BEFORE <span>研磨前</span></figcaption>
            </figure>
            <figure>
              <Image src="/images/polish-after.jpg" alt="LEVEL 2研磨後に水ジミが除去された塗装面" fill sizes="(max-width: 720px) 100vw, 50vw" />
              <figcaption>AFTER <span>LEVEL 2 施工後</span></figcaption>
            </figure>
          </div>
          <p className="studio-before-after__caption studio-before-after__caption--light">
            画像内の赤枠は旧公式サイト掲載時のものです。仕上がりは塗装状態により異なります。
          </p>
        </div>
      </section>

      <section className="studio-final-cta" aria-labelledby="works-cta-title">
        <div className="studio-shell">
          <p className="studio-kicker studio-kicker--gold">YOUR CAR</p>
          <h2 id="works-cta-title">あなたの車に必要な工程を、実車で確認します。</h2>
          <p>写真だけでは判断しきれない傷や水ジミも、店頭で状態を見てご説明します。</p>
          <div className="studio-actions studio-actions--center">
            <a className="studio-button studio-button--light" href={SITE.reserveUrl} target="_blank" rel="noreferrer" data-cta="reserve" data-cta-location="works_final">
              <CalendarIcon /> Webで施工を予約
            </a>
            <a className="studio-phone-link" href={`tel:${SITE.phone}`} data-cta="phone" data-cta-location="works_final">
              <PhoneIcon /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
