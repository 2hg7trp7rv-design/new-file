// src/lib/inventory.ts
import inventoryData from "@/data/inventory.json";

/**
 * 在庫ステータス
 * - "stock": 在庫あり
 * - "sold": 成約済み
 * - "coming_soon": 仕入れ予定・準備中
 *
 * JSON 側が "available" などになっていても、後段で正規化して吸収する。
 */
export type InventoryStatus = "stock" | "sold" | "coming_soon";

/**
 * アプリ内で使う在庫車の型
 * - 在庫ページ（/inventory）で参照しているフィールドをすべて網羅
 * - JSON にまだ入れていない項目は optional（?）にしておく
 */
export type InventoryItem = {
  id: string;
  slug: string;

  /**
   * 管理用タイトル。
   * 未指定なら displayName を自動で入れる。
   */
  title?: string;

  /**
   * カテゴリ（軽トラ / スーパーカー など）。
   * まだ決めきれていないので任意。
   */
  category?: string;

  /**
   * カードで大きく表示するキャッチコピー。
   * JSON の displayName と 1:1 で対応させてもよい。
   */
  displayName: string;

  maker: string;
  model: string;
  year: number;
  grade: string;
  priceYen: number;
  mileageKm: number;
  color: string;

  /**
   * 在庫ステータス（正規化済み）
   */
  status: InventoryStatus;

  tags: string[];

  /**
   * サムネイル画像の URL（静的ファイルのパスを想定）
   */
  thumbnailUrl: string;

  /**
   * カード下部に出すショートディスクリプション
   */
  shortDescription: string;

  /**
   * いなり目線などを含む「ライフスタイル寄りのテキスト」
   */
  lifestyleNote: string;

  /**
   * 追加情報（在庫ページで参照しているもの）
   */
  catchCopy?: string;
  transmission?: string; // 例: "6MT" / "AT" / "DCT"
  drive?: string; // 例: "4WD" / "FR" / "FF"

  /**
   * プレーンな画像指定（後で Next/Image に差し替え予定）
   * すでに page.tsx で car.image を参照しているので optional で定義しておく。
   */
  image?: string;
};

/**
 * JSON ファイルから読み込んだ「生の」型
 * - status は string として受け取り、後で正規化する
 * - InventoryItem に含めたいフィールドはここにも書いておく
 */
type InventoryJsonItem = {
  id: string;
  slug: string;
  displayName: string;
  maker: string;
  model: string;
  year: number;
  grade: string;
  priceYen: number;
  mileageKm: number;
  color: string;
  status?: string;
  tags: string[];
  thumbnailUrl: string;
  shortDescription: string;
  lifestyleNote: string;
  title?: string;
  category?: string;
  catchCopy?: string;
  transmission?: string;
  drive?: string;
  image?: string;
};

const rawInventory = inventoryData as InventoryJsonItem[];

/**
 * JSON の status をアプリ内の InventoryStatus に正規化する
 * - "available" や undefined は "stock" として扱う
 * - 予約中などは "coming_soon" に寄せる
 */
function normalizeStatus(status: string | undefined): InventoryStatus {
  switch (status) {
    case "stock":
    case "sold":
    case "coming_soon":
      return status;
    case "available":
    case "in_stock":
    case undefined:
      return "stock";
    case "reserved":
    case "preparing":
      return "coming_soon";
    default:
      return "stock";
  }
}

// inventory.json を型付きで扱う。
// title が無い場合は displayName をタイトルとして補完し、
// status は normalizeStatus で統一。
const inventoryInternal: InventoryItem[] = rawInventory.map((item) => ({
  ...item,
  status: normalizeStatus(item.status),
  title: item.title ?? item.displayName,
}));

/**
 * 在庫車を全件取得
 */
export function getAllInventory(): InventoryItem[] {
  return inventoryInternal;
}

/**
 * slug から 1 台取得
 */
export function getInventoryBySlug(slug: string): InventoryItem | undefined {
  return inventoryInternal.find((item) => item.slug === slug);
}

/**
 * ステータス別に一覧取得
 */
export function getInventoryByStatus(
  status: InventoryStatus
): InventoryItem[] {
  return inventoryInternal.filter((item) => item.status === status);
}

/**
 * 価格表示用フォーマッタ（例: ¥680,000）
 */
export function formatPriceYen(priceYen: number): string {
  return `¥${priceYen.toLocaleString("ja-JP")}`;
}

/**
 * 走行距離表示用フォーマッタ（例: 72,000km）
 */
export function formatMileageKm(mileageKm: number): string {
  return `${mileageKm.toLocaleString("ja-JP")}km`;
}
