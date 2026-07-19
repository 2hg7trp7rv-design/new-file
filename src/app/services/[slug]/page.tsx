import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, CalendarIcon, CheckIcon, PhoneIcon } from "@/components/ui/Icons";
import { getService, SERVICES } from "@/data/services";
import { SITE } from "@/data/site";
import { createPageMetadata } from "@/data/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main id="main-content" tabIndex={-1}>
      <section className="detail-hero">
        <nav className="shell breadcrumb" aria-label="パンくず">
          <Link href="/">HOME</Link><span aria-hidden="true">/</span><span aria-current="page">{service.name}</span>
        </nav>
        <div className="shell detail-hero-grid">
          <div className="detail-hero-copy">
            <p className="eyebrow">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <div className="detail-price">
              <small>税込料金</small>
              <strong>{service.startingPrice}</strong>
              <span>{service.priceCaption}</span>
            </div>
            <div className="detail-actions">
              <a className="button" href={SITE.reserveUrl} target="_blank" rel="noreferrer" data-cta="reserve" data-cta-location={`service_${service.slug}`}>
                <CalendarIcon /> Web予約
              </a>
              <a className="button button-secondary" href={`tel:${SITE.phone}`} data-cta="phone" data-cta-location={`service_${service.slug}`}>
                <PhoneIcon /> 電話で相談
              </a>
            </div>
          </div>
          <div className="detail-hero-image">
            <Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 820px) 100vw, 50vw" />
            <span>M’sの実施工・工程写真です</span>
          </div>
        </div>
      </section>

      <section className="detail-highlights section shell" aria-label={`${service.name}の特徴`}>
        {service.highlights.map((highlight, index) => (
          <article key={highlight.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{highlight.title}</h2>
            <p>{highlight.text}</p>
          </article>
        ))}
      </section>

      <section className="detail-process section section-tint" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">PROCESS</p><h2 id="process-title">施工の流れ</h2></div>
            <p>車両状態によって必要な工程は変わります。ご予約時と入庫時に内容をご説明します。</p>
          </div>
          <div className="process-grid">
            {service.steps.map((step, index) => (
              <article key={step.title}>
                <span>STEP {String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="price-section section shell" aria-labelledby="price-title">
        <div className="section-heading">
          <div><p className="eyebrow">PRICE</p><h2 id="price-title">料金表</h2></div>
          <p>表示料金は公開中の現行料金表に基づきます。車両状態によって追加作業をご相談する場合があります。</p>
        </div>
        <div className="price-table-wrap" tabIndex={0} aria-label="横にスクロールできる料金表">
          <table className="price-table">
            <thead><tr>{service.pricing.columns.map((column) => <th scope="col" key={column}>{column}</th>)}</tr></thead>
            <tbody>
              {service.pricing.rows.map((row) => (
                <tr key={row.join("-")}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={`${cell}-${index}`}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="price-notes">
          {service.pricing.notes.map((note) => <li key={note}><CheckIcon />{note}</li>)}
        </ul>
      </section>

      <section className="detail-bottom-cta">
        <div className="shell">
          <div><p className="eyebrow eyebrow-light">CONSULTATION</p><h2>商品を決めずに、ご相談ください。</h2><p>車を見ながら、必要な作業と料金をご説明します。</p></div>
          <a className="button button-light" href={SITE.reserveUrl} target="_blank" rel="noreferrer" data-cta="reserve" data-cta-location={`service_${service.slug}_final`}>空き状況を見る <ArrowRightIcon /></a>
        </div>
      </section>
    </main>
  );
}
