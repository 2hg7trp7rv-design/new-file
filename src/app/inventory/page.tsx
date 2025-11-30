// src/app/inventory/[id]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getInventoryById, type InventoryItem } from "@/lib/inventory";

type InventoryDetailParams = {
  id: string;
};

type InventoryDetailProps = {
  params: InventoryDetailParams;
};

// メタデータ
export async function generateMetadata(
  { params }: InventoryDetailProps
): Promise<Metadata> {
  const car = await getInventoryById(params.id);

  if (!car) {
    return {
      title: "在庫車が見つかりません | AUTO COLLECTION BANDAGE",
      description: "指定された在庫車は現在登録されていません。",
    };
  }

  const title = `${car.maker} ${car.title}`;

  return {
    title: `${title} | AUTO COLLECTION BANDAGE`,
    description:
      car.shortDescription ??
      `${car.maker} ${car.title} の在庫詳細ページ。年式や走行距離、装備などの基本情報を掲載。`,
  };
}

// ギャラリー用に画像パスをまとめる
function buildGallery(car: InventoryItem): { src: string; label: string }[] {
  const items: { src: string; label: string }[] = [];

  if (car.imageMain) {
    items.push({ src: car.imageMain, label: "メイン" });
  }
  if (car.imageInterior) {
    items.push({ src: car.imageInterior, label: "内装" });
  }
  if (car.imageRear) {
    items.push({ src: car.imageRear, label: "テール" });
  }
  if (car.imageEngine) {
    items.push({ src: car.imageEngine, label: "エンジンルーム" });
  }

  return items;
}

// ステータスバッジ（一覧と合わせておく）
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
        成約済
      </span>
    );
  }
  return (
    <span className="rounded-full border border-amber-600/70 bg-amber-900/20 px-3 py-1 text-[11px] font-medium text-amber-300">
      入庫予定
    </span>
  );
}

export default async function InventoryDetailPage(
  { params }: InventoryDetailProps
) {
  const car = await getInventoryById(params.id);

  if (!car) {
    notFound();
  }

  const gallery = buildGallery(car);

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-20 pt-10">
      {/* タイトル行 */}
      <header className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
          Inventory Detail
        </p>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              {car.maker}
            </p>
            <h1 className="text-xl font-semibold sm:text-2xl">
              {car.title}
            </h1>
          </div>
          <StatusBadge status={car.status} />
        </div>
      </header>

      {/* 画像ギャラリー */}
      <section aria-label="在庫車画像ギャラリー" className="space-y-3">
        <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-black/80 via-neutral-950 to-[#1a0b0b]">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto p-4 sm:p-5">
            {gallery.length === 0 && (
              <div className="flex h-64 w-full items-center justify-center rounded-2xl border border-dashed border-neutral-800 bg-neutral-950/80 text-xs text-neutral-500">
                画像はあとで追加
              </div>
            )}

            {gallery.map((item, index) => (
              <div
                key={`${item.label}-${index}`}
                className="relative h-64 min-w-full snap-center overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 sm:h-80 sm:min-w-[75%]"
              >
                <Image
                  src={item.src}
                  alt={`${car.title} ${item.label} ビュー`}
                  fill
                  sizes="(min-width: 768px) 75vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[11px] text-neutral-200">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {gallery.length > 1 && (
          <p className="text-[11px] text-neutral-500">
            横にスワイプしてメイン 内装 テール エンジンルームを切り替え
          </p>
        )}
      </section>

      {/* 基本情報 */}
      <section className="space-y-4 rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 px-5 py-6">
        <h2 className="text-sm font-semibold tracking-wide">
          車両情報
        </h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[13px] text-neutral-200 sm:grid-cols-3">
          {car.year && (
            <div>
              <p className="text-[11px] text-neutral-500">年式</p>
              <p>{car.year}年</p>
            </div>
          )}
          {car.mileageKm && (
            <div>
              <p className="text-[11px] text-neutral-500">走行距離</p>
              <p>{car.mileageKm.toLocaleString()} km</p>
            </div>
          )}
          {car.color && (
            <div>
              <p className="text-[11px] text-neutral-500">カラー</p>
              <p>{car.color}</p>
            </div>
          )}
          {car.transmission && (
            <div>
              <p className="text-[11px] text-neutral-500">ミッション</p>
              <p>{car.transmission}</p>
            </div>
          )}
          {car.drive && (
            <div>
              <p className="text-[11px] text-neutral-500">駆動方式</p>
              <p>{car.drive}</p>
            </div>
          )}
          {car.grade && (
            <div>
              <p className="text-[11px] text-neutral-500">グレード</p>
              <p>{car.grade}</p>
            </div>
          )}
        </div>

        <div className="flex items-end justify-between gap-4 pt-2">
          <div className="space-y-1 text-[12px] text-neutral-400">
            {car.engine && <p>エンジン: {car.engine}</p>}
            {car.specNote && <p>{car.specNote}</p>}
          </div>
          <div className="text-right">
            <p className="text-[11px] text-neutral-500">車両本体価格</p>
            <p className="text-xl font-semibold text-red-500">
              {car.priceYen.toLocaleString()} 円
            </p>
          </div>
        </div>
      </section>

      {/* ライフスタイルやコラム枠 */}
      {(car.lifestyleNote || car.shortDescription) && (
        <section className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 px-5 py-6">
          <h2 className="text-sm font-semibold tracking-wide">
            この車について
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-neutral-200">
            {car.lifestyleNote ?? car.shortDescription}
          </p>
        </section>
      )}
    </main>
  );
}
