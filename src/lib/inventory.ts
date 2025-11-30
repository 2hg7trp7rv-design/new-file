// src/lib/inventory.ts
import inventoryRaw from "@/data/inventory.json";

export type InventoryStatus = "stock" | "sold" | "coming_soon";

export type InventoryItem = {
  id: string;
  /** 在庫カードや詳細ページで使う表示用タイトル */
  title: string;
  status: InventoryStatus;
  priceYen?: number | null;
  mileageKm?: number | null;
  year?: number | null;
  maker?: string;
  model?: string;
  bodyType?: string;
  image?: string;
  tags?: string[];
  description?: string;
};

// JSONからアプリで扱う形へ正規化
const inventory: InventoryItem[] = (inventoryRaw as any[]).map(
  (item: any): InventoryItem => {
    const titleFromParts = [item.maker, item.model, item.grade]
      .filter(Boolean)
      .join(" ");

    return {
      id: String(item.id),
      title:
        item.title ??
        item.name ??
        titleFromParts ||
        "在庫車両",
      status: (item.status as InventoryStatus) ?? "stock",
      priceYen: item.priceYen ?? item.price ?? null,
      mileageKm: item.mileageKm ?? item.mileage ?? null,
      year: item.year ?? null,
      maker: item.maker,
      model: item.model,
      bodyType: item.bodyType ?? item.segment ?? undefined,
      image: item.image,
      tags: item.tags,
      description: item.description ?? item.summary ?? item.lead,
    };
  }
);

export function getAllInventory(): InventoryItem[] {
  return inventory;
}

export function getInventoryById(id: string): InventoryItem | undefined {
  return inventory.find((item) => item.id === id);
}

export function formatPriceYen(value?: number | null): string {
  if (value == null) return "ASK";
  return `${value.toLocaleString("ja-JP")}万円`;
}

export function formatMileageKm(value?: number | null): string {
  if (value == null) return "不明";
  return `${value.toLocaleString("ja-JP")}km`;
}
