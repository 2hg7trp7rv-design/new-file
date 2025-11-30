// src/app/inventory/[id]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllInventory,
  getInventoryById,
  formatMileageKm,
  formatPriceYen,
} from "@/lib/inventory";
import { InventoryGallery } from "@/components/inventory/InventoryGallery";

type PageProps = {
  params: { id: string };
};

export async function generateStaticParams() {
  const cars = getAllInventory();
  return cars.map((car) => ({ id: car.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const car = getInventoryById(params.id);
  if (!car) {
    return {
      title: "在庫車両が見つかりません | Auto Collection Bondage",
    };
  }

  return {
    title: `${car.title} | Auto Collection Bondage`,
    description:
      car.shortDescription ??
      car.catchCopy ??
      "AUTO COLLECTION BONDAGEの在庫詳細ページ。",
  };
}

export default function InventoryDetailPage({ params }: PageProps) {
  const car = getInventoryById(params.id);

  if (!car) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-8">
      {/* パンくずの代わりの簡易ナビ */}
      <div className="mb-4 text-[11px] text-neutral-500">
        Inventory /{" "}
        <span className="text-neutral-300">
          {car.maker && `${car.maker} `}
          {car.model ?? car.title}
        </span>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        {/* ギャラリー */}
        <section className="space-y-4">
          <InventoryGallery car={car} />
        </section>

        {/* 概要とスペック */}
        <section className="space-y-4">
          <header className="space-y-1">
            <h1 className="text-xl font-semibold text-neutral-50">
              {car.title}
            </h1>
            {car.catchCopy && (
              <p className="text-[13px] text-neutral-300">
                {car.catchCopy}
              </p>
            )}
          </header>

          <div className="rounded-2xl border border-neutral-800 bg-black/70 p-4 text-sm text-neutral-200">
            <div className="mb-3 flex items-baseline justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                  Price
                </p>
                <p className="text-lg font-semibold text-[#ecdab9]">
                  {formatPriceYen(car.priceYen)}
                </p>
              </div>
              <div className="text-right text-[11px] text-neutral-400">
                {car.status === "sold" ? "SOLD OUT" : "商談受付中"}
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px] text-neutral-300">
              {car.year && (
                <>
                  <dt className="text-neutral-500">年式</dt>
                  <dd>{car.year}年</dd>
                </>
              )}
              {car.mileageKm != null && (
                <>
                  <dt className="text-neutral-500">走行距離</dt>
                  <dd>{formatMileageKm(car.mileageKm)}</dd>
                </>
              )}
              {car.color && (
                <>
                  <dt className="text-neutral-500">ボディカラー</dt>
                  <dd>{car.color}</dd>
                </>
              )}
              {car.engine && (
                <>
                  <dt className="text-neutral-500">エンジン</dt>
                  <dd>{car.engine}</dd>
                </>
              )}
              {car.transmission && (
                <>
                  <dt className="text-neutral-500">トランスミッション</dt>
                  <dd>{car.transmission}</dd>
                </>
              )}
              {car.drive && (
                <>
                  <dt className="text-neutral-500">駆動方式</dt>
                  <dd>{car.drive}</dd>
                </>
              )}
              {car.grade && (
                <>
                  <dt className="text-neutral-500">グレード</dt>
                  <dd>{car.grade}</dd>
                </>
              )}
            </dl>
          </div>

          {car.shortDescription && (
            <div className="rounded-2xl border border-neutral-800 bg-black/70 p-4 text-[13px] leading-relaxed text-neutral-200">
              {car.shortDescription}
            </div>
          )}

          {car.lifestyleNote && (
            <div className="rounded-2xl border border-neutral-800 bg-black/70 p-4 text-[12px] leading-relaxed text-neutral-300">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Lifestyle Note
              </p>
              {car.lifestyleNote}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
