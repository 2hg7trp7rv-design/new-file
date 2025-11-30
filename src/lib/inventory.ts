// src/lib/inventory.ts

import inventoryRaw from "@/data/inventory.json";

export type InventoryStatus = "stock" | "sold" | "coming_soon";

export type InventoryItem = {
  id: string;
  name: string;
  maker: string;
  status: InventoryStatus;

  // 追加情報（あるものだけ入れればOK）
  grade?: string;
  bodyType?: string;
  year?: number;
  mileageKm?: number | null;
  priceYen?: number | null;
  color?: string;
  drive?: string;
  transmission?: string;

  // ライフスタイルコメント・キャッチコピーなど
  shortDescription?: string;
  catchCopy?: string;
  lifestyleNote?: string;

  // タグや在庫カードで使う情報
  tags?: string[];

  // 在庫カードで画像を出すためのプロパティ
  image?: string;
};

// JSON を型付き配列として扱う
const inventoryData = inventoryRaw as InventoryItem[];

// 数値フォーマッタ（共通）
const numberFormatter = new Intl.NumberFormat("ja-JP");

/**
 * 走行距離の表示用フォーマッタ
 *  - 10,000km以上は「◯.◯万km」
 *  - それ未満は「◯◯,◯◯◯km」
 *  - null/undefined は "-" を返す
 */
export function formatMileageKm(
  value: number | null | undefined
): string {
  if (value == null) {
    return "-";
  }

  if (value >= 10000) {
    const man = value / 10000;
    const rounded = Math.round(man * 10) / 10; // 小数1桁
    const text = String(rounded).replace(/\.0$/, "");
    return `${text}万km`;
  }

  return `${numberFormatter.format(value)}km`;
}

/**
 * 価格表示用フォーマッタ
 *  - 「¥◯◯,◯◯◯」形式
 *  - null/undefined は "-" を返す（呼び出し側で「応談」等に差し替え可）
 */
export function formatPriceYen(
  value: number | null | undefined
): string {
  if (value == null) {
    return "-";
  }
  return `¥${numberFormatter.format(value)}`;
}

// 在庫一覧を取得（従来の getAllInventory 互換）
export function getInventory(): InventoryItem[] {
  return inventoryData;
}

// 互換用エイリアス（app/page.tsx, app/inventory/page.tsx から使用）
export function getAllInventory(): InventoryItem[] {
  return inventoryData;
}

// ステータスで絞り込み
export function getInventoryByStatus(
  status: InventoryStatus
): InventoryItem[] {
  return inventoryData.filter((item) => item.status === status);
}

// id で1件取得
export function getInventoryById(
  id: string
): InventoryItem | undefined {
  return inventoryData.find((item) => item.id === id);
}
