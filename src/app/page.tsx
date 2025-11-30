// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllInventory } from "@/lib/inventory";

export const metadata: Metadata = {
  title: "AUTO COLLECTION Bandage | 在庫車トップ",
  description:
    "AUTO COLLECTION Bandage の在庫車一覧とショップ概要をまとめたトップページ",
};

export default function HomePage() {
  const cars = getAllInventory();

  const featured =
    cars.find((car) => car.isRecommended && car.status === "stock") ??
    cars.find((car) => car.status === "stock") ??
    cars[0];

  return (
    <main className="relative min-h-screen bg-[#0F0F10] text-neutral-50">
      {/* 四隅ナビゲーション */}
      <div className="pointer-events-none fixed inset-0 z-30">
        {/* 左上 ブランド */}
        <div className="pointer-events-auto absolute left-4 top-4 md:left-8 md:top-8">
          <Link
            href="/"
            className="border-l-2 border-red-600/80 pl-2 text-[10px] font-semibold tracking-[0.24em] text-neutral-100 md:text-xs"
          >
            <div className="leading-tight">AUTO COLLECTION</div>
            <div className="text-sm tracking-[0.18em] md:text-base">
              BANDAGE
            </div>
          </Link>
        </div>

        {/* 右上 MENU（ダミー） */}
        <div className="pointer-events-auto absolute right-4 top-4 text-[10px] font-medium tracking-[0.22em] text-neutral-200 md:right-8 md:top-8 md:text-xs">
          <span>MENU</span>{" "}
          <span className="align-middle text-red-500/80">///</span>
        </div>

        {/* 左下 ロケーション（住所は非表示にしたい場合はコメントアウト） */}
        {/* <div className="pointer-events-auto absolute bottom-4 left-4 text-[10px] tracking-wide text-neutral-400 md:bottom-8 md:left-8 md:text-xs">
          <div>YONAGO TOTTORI</div>
          <div className="mt-0.5 text-[9px] text-neutral-500 md:text-[10px]">
            35.4°N / 133.3°E
          </div>
        </div> */}

        {/* 右下 PIT IN ボタン（在庫車ページへ） */}
        <div className="pointer-events-auto absolute bottom-4 right-4 md:bottom-8 md:right-8">
          <Link
            href="/inventory"
            className="inline-flex items-center justify-center bg-red-600 px-5 py-2 text-xs font-semibold tracking-[0.16em] text-white shadow-[0_0_18px_rgba(239,68,68,0.7)] transition hover:bg-red-500 hover:shadow-[0_0_24px_rgba(239,68,68,0.9)] md:px-7 md:py-2.5 md:text-sm"
          >
            PIT IN
          </Link>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:gap-12 md:py-20">
        {/* BANDAGE ベースカード */}
        <section className="rounded-3xl border border-red-900/50 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-6 shadow-[0_0_40px_rgba(0,0,0,0.7)] md:p-8">
          <div className="space-y-5">
            <div className="text-[10px] font-medium tracking-[0.24em] text-red-300/90 md:text-xs">
              AUTO COLLECTION BANDAGE
            </div>

            <h1 className="text-3xl font-semibold tracking-[0.3em] md:text-4xl">
              BANDAGE
            </h1>

            <p className="text-[13px] leading-relaxed text-neutral-200/85">
              在庫車とガレージ運用をまとめて管理するためのベースページ
            </p>
          </div>
        </section>

        {/* 在庫車トップ＋おすすめ車両 */}
        <section className="rounded-3xl border border-red-900/50 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-6 shadow-[0_0_40px_rgba(0,0,0,0.7)] md:p-8">
          <div className="flex flex-col gap-6 md:flex-row">
            {/* 左側: テキストとボタン */}
            <div className="flex-1 space-y-4">
              <div className="text-[10px] font-semibold tracking-[0.24em] text-red-400/90">
                STOCK TOP
              </div>
              <h2 className="text-xl font-semibold tracking-wide md:text-2xl">
                在庫車トップ
              </h2>
              <p className="text-[13px] leading-relaxed text-neutral-200/85">
                軽トラックから輸入スポーツまで現在取り扱い中の在庫車を一覧で確認するエリア
              </p>

              <div className="flex flex-col gap-3 pt-2 md:flex-row">
                <Link
                  href="/inventory"
                  className="flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_0_25px_rgba(248,113,113,0.55)] transition hover:bg-red-500 hover:shadow-[0_0_35px_rgba(248,113,113,0.75)]"
                >
                  在庫車リスト
                </Link>
              </div>

              {/* 小さいタグ（ページ遷移なし） */}
              <div className="flex flex-wrap gap-2 pt-4 text-[11px] text-neutral-200/80">
                <span className="rounded-full border border-red-500/50 bg-black/40 px-3 py-1">
                  在庫車一覧
                </span>
                <span className="rounded-full border border-red-500/30 bg-black/40 px-3 py-1">
                  輸入車と国産車
                </span>
              </div>
            </div>

            {/* 右側: おすすめ車種 */}
            {featured && (
              <div className="flex-1 rounded-2xl border border-neutral-700/70 bg-gradient-to-b from-neutral-900/90 via-black/85 to-neutral-900/80 p-4">
                <div className="text-[11px] font-medium tracking-wide text-neutral-400">
                  おすすめ車両
                </div>
                <div className="mt-1 text-sm text-neutral-300">
                  {featured.maker}
                </div>
                <div className="text-base font-semibold text-neutral-50">
                  {featured.name}
                </div>
                {featured.grade && (
                  <div className="text-[11px] text-neutral-400">
                    {featured.grade}
                  </div>
                )}

                <div className="mt-4 overflow-hidden rounded-xl bg-black/60">
                  <div className="relative aspect-[4/3] w-full">
                    {featured.image ? (
                      <Image
                        src={featured.image}
                        alt={`${featured.name} のイメージ`}
                        fill
                        className="object-cover object-center"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[11px] text-neutral-500">
                        画像は順次追加予定
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* コラム／整備記録簿 */}
        <section className="grid gap-6 md:grid-cols-2 md:gap-8" aria-label="コンテンツブロック">
          {/* コラム */}
          <article className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)] md:p-6">
            <div className="text-[10px] font-semibold tracking-[0.24em] text-neutral-400">
              COLUMN
            </div>
            <h2 className="mt-2 text-lg font-semibold tracking-wide">
              中古車屋ならではのコラム
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/85">
              実際の商談や仕入れで感じたことをベースにしたコラム 中古車選びのポイントや在庫の裏側をまとめる予定
            </p>
          </article>

          {/* 整備記録簿 */}
          <article className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)] md:p-6">
            <div className="text-[10px] font-semibold tracking-[0.24em] text-neutral-400">
              MAINTENANCE LOG
            </div>
            <h2 className="mt-2 text-lg font-semibold tracking-wide">
              整備記録簿
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/85">
              車検整備や修理内容の記録を整理するためのエリア 在庫車の状態をできるだけ具体的に残すことを目的にしたログ
            </p>
          </article>
        </section>

        {/* このサイトでできること */}
        <section className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)] md:p-6">
          <h2 className="text-base font-semibold tracking-wide">
            このサイトでできること
          </h2>

          <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-neutral-200/85">
            <li className="flex gap-2">
              <span className="mt-[4px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>在庫車リストと車両ごとの基本情報の確認</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[4px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>輸入車と国産車を同じ条件で比較</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[4px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>中古車屋さんならではの目線でのコラム</span>
            </li>
          </ul>

          <p className="mt-5 text-[11px] text-neutral-500">
            個別ページや比較機能を順次追加予定
          </p>
        </section>
      </div>
    </main>
  );
}
