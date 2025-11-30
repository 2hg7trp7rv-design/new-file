// src/components/inventory/InventoryGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import type { InventoryItem } from "@/lib/inventory";

type Slide = {
  key: string;
  label: string;
  src: string;
  alt: string;
};

type Props = {
  car: InventoryItem;
};

export function InventoryGallery({ car }: Props) {
  // 画像の優先順位を決めてフロント/内装/リア/エンジンを組み立て
  const slides: Slide[] = [
    {
      key: "main",
      label: "フロント",
      src: car.imageMain ?? car.image ?? "",
      alt: `${car.title} フロントビュー`,
    },
    {
      key: "interior",
      label: "内装",
      src: car.imageInterior ?? "",
      alt: `${car.title} 内装`,
    },
    {
      key: "rear",
      label: "テール",
      src: car.imageRear ?? "",
      alt: `${car.title} リヤビュー`,
    },
    {
      key: "engine",
      label: "エンジン",
      src: car.imageEngine ?? "",
      alt: `${car.title} エンジンルーム`,
    },
  ].filter((s) => s.src);

  const [index, setIndex] = useState(0);

  if (slides.length === 0) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-950 text-sm text-neutral-500">
        画像はあとで追加
      </div>
    );
  }

  const current = slides[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.key}
              className="relative h-full w-full flex-shrink-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 960px, 100vw"
              />
            </div>
          ))}
        </div>

        {/* 左右ナビ */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-2 py-1 text-xs text-neutral-100 backdrop-blur-sm"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-2 py-1 text-xs text-neutral-100 backdrop-blur-sm"
        >
          ›
        </button>

        {/* ビューボタン */}
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full px-2.5 py-0.5 text-[10px] ${
                i === index
                  ? "bg-red-600 text-neutral-50"
                  : "bg-black/60 text-neutral-300"
              }`}
            >
              {slide.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-[11px] text-neutral-400">
        {current.label}ビュー
      </p>
    </div>
  );
}
