// src/app/inventory/[id]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getInventoryById,
  formatPriceYen,
  formatMileageKm,
  type InventoryItem,
} from "@/lib/inventory";
import { DetailGallery } from "@/components/inventory/DetailGallery";

type DetailParams = {
  id: string;
};

// SEO用メタデータ
export async function generateMetadata(
  { params }: { params: Promise<DetailParams> }
): Promise<Metadata> {
  const { id } = await params;
  const car = getInventoryById(id);

  if (!car) {
    return {
      title: "在庫車が見つかりません | AUTO COLLECTION BANDAGE",
      description: "指定された在庫車は現在表示できません。",
    };
  }

  return {
    title: `${car.title} | AUTO COLLECTION BANDAGE`,
    description:
      car.shortDescription ??
      car.catchCopy ??
      "AUTO COLLECTION BANDAGEの在庫車詳細ページ。",
  };
}

// 在庫ステータスバッジ
function StatusBadge({ status }: { status: InventoryItem["status"] }) {
  if (status === "stock") {
    return (
      <span className="rounded-full border border-red-600/60 bg-red-600/15 px-3 py-1 text-[11px] font-medium text-red-400">
        在庫あり
      </span>
    );
  }
  if (status === "sold") {
    return (
      <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-[11px] font-medium text-neutral-400">
        商談成約済
      </span>
    );
  }
  return (
    <span className="rounded-full border border-amber-600/70 bg-amber-900/20 px-3 py-1 text-[11px] font-medium text-amber-300">
      入庫予定
    </span>
  );
}

export default async function InventoryDetailPage({
  params,
}: {
  params: Promise<DetailParams>;
}) {
  const { id } = await params;
  const car = getInventoryById(id);

  if (!car) {
    notFound();
  }

  const mainImage =
    car.imageMain ?? car.image ?? "/images/inventory/bugatti-chiron-main.jpg";

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 pb-20 pt-10">
      {/* 戻るリンク */}
      <div className="mb-2 text-[11px] text-neutral-500">
        <Link
          href="/inventory"
          className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-black/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-neutral-300 hover:border-neutral-500 hover:bg-neutral-900/80"
        >
          <span>← BACK TO INVENTORY</span>
        </Link>
      </div>

      {/* ヘッダー＋メイン画像 */}
      <section className="flex flex-col gap-6 lg:flex-row">
        {/* テキストヘッダー */}
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
              AUTO COLLECTION BANDAGE
            </p>
            <h1 className="text-2xl font-semibold sm:text-3xl">
              {car.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-400">
              <StatusBadge status={car.status} />
              {car.year && (
                <span className="rounded-full border border-neutral-800 bg-black/70 px-3 py-1">
                  {car.year}年式
                </span>
              )}
              {car.maker && (
                <span className="rounded-full border border-neutral-800 bg-black/70 px-3 py-1 uppercase tracking-[0.16em]">
                  {car.maker}
                </span>
              )}
            </div>
          </div>

          {car.catchCopy && (
            <p className="text-xs font-medium text-[#ecdab9] sm:text-sm">
              {car.catchCopy}
            </p>
          )}

          {car.shortDescription && (
            <p className="text-xs leading-relaxed text-neutral-300 sm:text-sm">
              {car.shortDescription}
            </p>
          )}

          <div className="mt-4 flex items-end justify-between gap-4">
            <div className="text-xs text-neutral-400">
              {car.color && <div>ボディカラー:{car.color}</div>}
              {car.grade && <div>グレード:{car.grade}</div>}
              {car.engine && <div>エンジン:{car.engine}</div>}
            </div>
            <div className="text-right">
              <p className="text-[11px] text-neutral-500">車両本体価格</p>
              <p className="text-2xl font-semibold text-red-500 sm:text-3xl">
                {formatPriceYen(car.priceYen)}
              </p>
            </div>
          </div>
        </div>

        {/* メイン画像（トップ用） */}
        <div className="mt-2 w-full max-w-md self-center rounded-3xl border border-neutral-800 bg-neutral-950/90 p-2 shadow-[0_0_40px_rgba(0,0,0,0.7)] lg:mt-0 lg:self-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={mainImage}
              alt={car.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-2 text-center text-[10px] text-neutral-500">
            在庫一覧に掲載するメインカット
          </p>
        </div>
      </section>

      {/* 詳細ギャラリー：メイン＋内装＋テール＋エンジン */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold tracking-[0.16em] text-neutral-300">
          DETAIL GALLERY
        </h2>
        <DetailGallery
          title={car.title}
          main={mainImage}
          interior={car.imageInterior}
          rear={car.imageRear}
          engine={car.imageEngine}
        />
      </section>

      {/* スペックとライフスタイルノート */}
      <section className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        {/* スペックテーブル */}
        <div className="rounded-2xl border border-neutral-800 bg-black/80 p-4 sm:p-5">
          <h3 className="mb-3 text-xs font-semibold tracking-[0.18em] text-neutral-400">
            VEHICLE SPEC
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-neutral-300 sm:text-xs">
            {car.year && (
              <SpecRow label="年式" value={`${car.year}年`} />
            )}
            {car.mileageKm && (
              <SpecRow
                label="走行距離"
                value={formatMileageKm(car.mileageKm)}
              />
            )}
            {car.transmission && (
              <SpecRow label="トランスミッション" value={car.transmission} />
            )}
            {car.drive && <SpecRow label="駆動方式" value={car.drive} />}
            {car.color && <SpecRow label="ボディカラー" value={car.color} />}
            {car.engine && <SpecRow label="エンジン" value={car.engine} />}
            {car.specNote && (
              <SpecRow label="装備・特記事項" value={car.specNote} full />
            )}
          </div>
        </div>

        {/* ライフスタイルノート */}
        <div className="rounded-2xl border border-neutral-800 bg-black/80 p-4 sm:p-5">
          <h3 className="mb-3 text-xs font-semibold tracking-[0.18em] text-neutral-400">
            LIFESTYLE NOTE
          </h3>
          <p className="text-[11px] leading-relaxed text-neutral-300 sm:text-xs">
            {car.lifestyleNote
              ? car.lifestyleNote
              : "この車と過ごす時間のイメージや、ガレージでの付き合い方をここに書き足していきます。"}
          </p>

          {car.tags && car.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {car.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-800 bg-black/70 px-2.5 py-0.5 text-[10px] text-neutral-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

type SpecRowProps = {
  label: string;
  value: string;
  full?: boolean;
};

function SpecRow({ label, value, full }: SpecRowProps) {
  return (
    <div
      className={
        full
          ? "col-span-2 flex items-start justify-between gap-3 border-t border-neutral-900 pt-2"
          : "flex items-center justify-between gap-3"
      }
    >
      <span className="text-[11px] text-neutral-500">{label}</span>
      <span className="text-right text-[11px] text-neutral-200">
        {value}
      </span>
    </div>
  );
}
