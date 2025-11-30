// src/lib/inventory.ts
import inventoryRaw from "@/data/inventory.json";

export type InventoryStatus = "stock" | "sold" | "coming_soon";

export type InventoryItem = {
  id: string;
  maker: string;
  title: string;
  status: InventoryStatus;
  year?: number;
  mileageKm?: number;
  transmission?: string;
  drive?: string;
  color?: string;
  grade?: string;
  priceYen: number;
  catchCopy?: string;
  shortDescription?: string;
  lifestyleNote?: string;
  tags?: string[];

  // 画像パス
  imageMain?: string;
  imageInterior?: string;
  imageRear?: string;
  imageEngine?: string;
};

const inventory = inventoryRaw as InventoryItem[];

export function getAllInventory(): InventoryItem[] {
  return inventory;
}

export function getInventoryById(id: string): InventoryItem | undefined {
  return inventory.find((car) => car.id === id);
}

export function formatPriceYen(price: number): string {
  return `¥${price.toLocaleString("ja-JP")}`;
}

export function formatMileageKm(mileage: number): string {
  return `${mileage.toLocaleString("ja-JP")}km`;
}
