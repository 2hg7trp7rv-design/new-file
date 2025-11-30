// src/lib/inventory.ts
import inventoryRaw from "@/data/inventory.json";

export type InventoryStatus = "stock" | "sold" | "coming_soon";

export type InventoryItem = {
  id: string;
  /** ルーティングに使うslug。指定がなければidをそのまま使う */
  slug?: string;
  /** 在庫カードや詳細ページで使う表示用タイトル */
  title: string;
  status: InventoryStatus;

  // 数値系
  priceYen?: number | null; // 円単位を想定
  mileageKm?: number | null;
  year?: number | null;

  // 車両属性
  maker?: string;
  model?: string;
  bodyType?: string;
  color?: string;
  grade?: string;
  engine?: string;
  drive?: string;
  transmission?: string;

  // ライフスタイル・説明文
  lifestyleNote?: string;
  tags?: string[];
  description?: string;

  // 画像系
  image?: string; // 一覧で使う代表画像
  imageMain?: string;
  imageInterior?: string;
  imageRear?: string;
  imageEngine?: string;
  thumbnailUrl?: string;
};

// JSONからアプリで扱う形へ正規化
const inventory: InventoryItem[] = (inventoryRaw as any[]).map(
  (item: any): InventoryItem => {
    const titleFromParts = [item.maker, item.model, item.grade]
      .filter(Boolean)
      .join(" ");

    const title: string =
      item.title ??
      item.displayName ??
      item.name ??
      (titleFromParts || "在庫車両");

    const image: string | undefined =
      item.image ??
      item.thumbnailUrl ??
      item.imageMain ??
      undefined;

    const description: string | undefined =
      item.description ??
      item.summary ??
      item.shortDescription ??
      item.lead ??
      undefined;

    return {
      id: String(item.id),
      slug: item.slug ? String(item.slug) : String(item.id),
      title,
      status: (item.status as InventoryStatus) ?? "stock",

      priceYen:
        typeof item.priceYen === "number"
          ? item.priceYen
          : typeof item.price === "number"
          ? item.price
          : null,

      mileageKm:
        typeof item.mileageKm === "number"
          ? item.mileageKm
          : typeof item.mileage === "number"
          ? item.mileage
          : null,

      year: typeof item.year === "number" ? item.year : null,

      maker: item.maker,
      model: item.model,
      bodyType: item.bodyType ?? item.segment ?? undefined,
      color: item.color,
      grade: item.grade,
      engine: item.engine,
      drive: item.drive,
      transmission: item.transmission,
      lifestyleNote: item.lifestyleNote,
      tags: Array.isArray(item.tags) ? item.tags : undefined,
      description,

      image,
      imageMain: item.imageMain ?? image,
      imageInterior: item.imageInterior,
      imageRear: item.imageRear,
      imageEngine: item.imageEngine,
      thumbnailUrl: item.thumbnailUrl,
    };
  }
);

export function getAllInventory(): InventoryItem[] {
  return inventory;
}

export function getInventoryById(id: string): InventoryItem | undefined {
  // slugでもidでも引けるようにしておく
  return inventory.find(
    (item) => item.id === id || (item.slug != null && item.slug === id)
  );
}

export function formatPriceYen(value?: number | null): string {
  if (value == null) return "ASK";
  // ここではvalueを「円」とみなして整形
  return `¥${value.toLocaleString("ja-JP")}`;
}

export function formatMileageKm(value?: number | null): string {
  if (value == null) return "不明";
  return `${value.toLocaleString("ja-JP")}km`;
}
