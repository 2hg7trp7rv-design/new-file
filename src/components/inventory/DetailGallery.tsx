// src/components/inventory/DetailGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type DetailGalleryProps = {
  main: string;
  interior?: string;
  rear?: string;
  engine?: string;
  alt: string;
};

type ImageKey = "main" | "interior" | "rear" | "engine";

export function DetailGallery({
  main,
  interior,
  rear,
  engine,
  alt,
}: DetailGalleryProps) {
  const candidates: { key: ImageKey; label: string; src?: string }[] = [
    { key: "main", label: "メイン", src: main },
    { key: "interior", label: "内装", src: interior },
    { key: "rear", label: "テール", src: rear },
    { key: "engine", label: "エンジンルーム", src: engine },
  ];

  const images = candidates.filter((c) => c.src);

  if (images.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-800 bg-black/60 px-5 py-6 text-[12px] text-neutral-400">
        詳細画像はまだ登録されていません。
        <br />
        <code className="rounded bg-neutral-900 px-1.5 py-0.5 text-[11px]">
          public/images/inventory
        </code>
        にmain・内装・テール・エンジンルームの画像を追加すると、ここに表示されます。
      </div>
    );
  }

  const [activeKey, setActiveKey] = useState<ImageKey>(images[0].key);

  const active = images.find((img) => img.key === activeKey) ?? images[0];

  return (
    <div className="space-y-3">
      {/* メイン表示(横スライドUIの中身として使うエリア) */}
      <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 shadow-[0_0_40px_rgba(0,0,0,0.7)]">
        <div className="relative aspect-[4/3] w-full">
          <Image
            key={active.key}
            src={active.src as string}
            alt={`${alt} ${active.label}`}
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* サムネイル・タブ（横に並べてクリックで切り替え） */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {images.map((img) => {
          const isActive = img.key === activeKey;
          return (
            <button
              key={img.key}
              type="button"
              onClick={() => setActiveKey(img.key)}
              className={`flex min-w-[120px] flex-col gap-1 rounded-2xl border px-2 pb-2 pt-2 text-left transition ${
                isActive
                  ? "border-red-500/70 bg-red-950/30"
                  : "border-neutral-800 bg-black/60 hover:border-neutral-600 hover:bg-neutral-900/70"
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-900">
                <Image
                  src={img.src as string}
                  alt={`${alt} ${img.label}`}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <span className="px-1 text-[11px] text-neutral-200">
                {img.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
