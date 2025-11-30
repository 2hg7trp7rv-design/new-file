// src/lib/inventory.ts
import inventoryRaw from "@/data/inventory.json";

export type InventoryStatus = "stock" | "sold" | "coming_soon";

export type InventoryItem = {
  id: string;
  /** 在庫カードや詳細ページで使う表示用タイトル（必須） */
  title: string;

  // 追加情報（任意）
  slug?: string;
  displayName?: string;

  status: InventoryStatus;
  priceYen?: number | null;
  mileageKm?: number | null;
  year?: number | null;

  maker?: string;
  model?: string;
  bodyType?: string;
  color?: string;
  grade?: string;
  engine?: string;
  transmission?: string;
  drive?: string;

  // テキスト系
  description?: string;
  shortDescription?: string;
  catchCopy?: string;
  specNote?: string;
  lifestyleNote?: string;

  // 画像系
  image?: string;
  imageMain?: string;
  imageInterior?: string;
  imageRear?: string;
  imageEngine?: string;
  thumbnailUrl?: string;

  tags?: string[];
};

// JSON からアプリで扱う形へ正規化
const inventory: InventoryItem[] = (inventoryRaw as any[]).map(
  (item: any): InventoryItem => {
    const titleFromParts = [item.maker, item.model, item.grade]
      .filter(Boolean)
      .join(" ");

    // `??` のみでつないで Nullish を評価する
    const title: string =
      item.title ??
      item.displayName ??
      item.name ??
      titleFromParts ??
      "在庫車両";

    // カード用の代表画像
    const image: string | undefined =
      item.image ??
      item.imageMain ??
      item.thumbnailUrl ??
      undefined;

    return {
      id: String(item.id),
      slug: item.slug,
      title,
      displayName: item.displayName,

      status: (item.status as InventoryStatus) ?? "stock",
      priceYen: item.priceYen ?? item.price ?? null,
      mileageKm: item.mileageKm ?? item.mileage ?? null,
      year: item.year ?? null,

      maker: item.maker,
      model: item.model,
      bodyType: item.bodyType ?? item.segment ?? undefined,
      color: item.color,
      grade: item.grade,
      engine: item.engine,
      transmission: item.transmission,
      drive: item.drive,

      description: item.description ?? item.summary ?? item.lead,
      shortDescription: item.shortDescription,
      catchCopy: item.catchCopy,
      specNote: item.specNote,
      lifestyleNote: item.lifestyleNote,

      image,
      imageMain: item.imageMain,
      imageInterior: item.imageInterior,
      imageRear: item.imageRear,
      imageEngine: item.imageEngine,
      thumbnailUrl: item.thumbnailUrl,

      tags: item.tags,
    };
  }
);

export function getAllInventory(): InventoryItem[] {
  return inventory;
}

export function getInventoryById(id: string): InventoryItem | undefined {
  return inventory.find((item) => item.id === id);
}

/**
 * 価格表示（円単位想定）
 * 例: 380000000 -> "380,000,000円"
 */
export function formatPriceYen(value?: number | null): string {
  if (value == null) return "ASK";
  return `${value.toLocaleString("ja-JP")}円`;
}

/**
 * 走行距離表示
 * 例: 3500 -> "3,500km"
 */
export function formatMileageKm(value?: number | null): string {
  if (value == null) return "不明";
  return `${value.toLocaleString("ja-JP")}km`;
}
