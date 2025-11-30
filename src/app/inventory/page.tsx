// src/app/inventory/page.tsx
import type { Metadata } from "next";
import { InventoryListClient } from "./InventoryListClient";
import { getAllInventory } from "@/lib/inventory";

export const metadata: Metadata = {
  title: "Inventory | Auto Collection Bondage",
  description:
    "AUTO COLLECTION BONDAGEの在庫一覧。ハイパーカーから実用車までを同じフォーマットで並べたデジタルガレージ。",
};

export default function InventoryPage() {
  const cars = getAllInventory();

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-10">
      <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-neutral-500">
            Inventory
          </p>
          <h1 className="text-xl font-semibold text-neutral-50 sm:text-2xl">
            在庫車一覧
          </h1>
          <p className="mt-1 text-xs text-neutral-400 sm:text-[13px]">
            ガレージに並んだ順番のまま、在庫あり/入庫予定/SOLDを同じトーンで並べます。
          </p>
        </div>
      </header>

      <InventoryListClient items={cars} />
    </main>
  );
}
