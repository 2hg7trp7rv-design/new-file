// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getAllInventory } from "@/lib/inventory";

export const metadata: Metadata = {
  title: "AUTO COLLECTION Bondage | 在庫車トップ",
  description:
    "AUTO COLLECTION Bondage の在庫車一覧とショップ概要をまとめたトップページ",
};

export default function HomePage() {
  const cars = getAllInventory();
  const featured = cars[0];

  const featuredName =
    featured &&
    [featured.maker, featured.model, featured.grade]
      .filter(Boolean)
      .join(" ");

  const featuredDescription = featured?.description ?? "";

  const heroImage =
    (featured as any)?.image ??
    (featured as any)?.heroImage ??
    "/hero.jpg";

  return (
    <main className="relative min-h-screen bg-[#050507] text-neutral-50">
      {/* 四隅ナビゲーション */}
      <div className="pointer-events-none fixed inset-0 z-30">
        {/* 左上 ブランドロゴ */}
        <div className="pointer-events-auto absolute left-4 top-4 md:left-8 md:top-8">
          <Link
            href="/"
            className="inline-flex flex-col border-l border-red-500/80 pl-3"
          >
            <span className="text-[9px] font-semibold tracking-[0.28em] text-neutral-200 md:text-[10px]">
              AUTO COLLECTION
            </span>
            <span className="mt-[2px] text-lg font-semibold tracking-[0.18em] md:text-2xl">
              Bondage
            </span>
          </Link>
        </div>

        {/* 右上 MENU ダミー */}
        <div className="pointer-events-auto absolute right-4 top-4 md:right-8 md:top-8">
          <button
            type="button"
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.22em] text-neutral-300 md:text-xs"
          >
            <span>MENU</span>
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-red-500/70 text-[9px] text-red-400">
              ///
            </span>
          </button>
        </div>

        {/* 右下 PIT IN ボタン（在庫車ページへ） */}
        <div className="pointer-events-auto absolute bottom-4 right-4 md:bottom-8 md:right-8">
          <Link
            href="/inventory"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2 text-xs font-semibold tracking-[0.18em] text-white shadow-[0_0_20px_rgba(248,113,113,0.7)] transition hover:bg-red-500 hover:shadow-[0_0_30px_rgba(248,113,113,0.9)] md:px-8 md:py-2.5 md:text-[13px]"
          >
            PIT IN
          </Link>
        </div>
      </div>

      {/* メインラッパー */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-4 pb-16 pt-20 md:gap-14 md:pb-24 md:pt-24">
        {/* ===== HERO ＋ STOCK TOP セクション ===== */}
        <section className="relative overflow-hidden rounded-[28px] border border-red-900/60 bg-black/60 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          {/* 背景：ヒーロー画像 */}
          <div className="relative h-[420px] w-full md:h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroImage})`,
              }}
            />
            {/* 暗めグラデーション＋四辺の赤い光 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/75 to-black/90" />
            <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.24),transparent_60%),_radial-gradient(circle_at_bottom,_rgba(248,113,113,0.24),transparent_60%)] opacity-70" />

            {/* HERO 本文 */}
            <div className="relative flex h-full flex-col justify-between px-5 py-5 md:px-10 md:py-8">
              {/* 上段：ブランドロゴ風テキスト */}
              <div>
                <p className="text-[9px] font-medium tracking-[0.3em] text-red-200/80 md:text-[10px]">
                  AUTO COLLECTION
                </p>
                <h1 className="mt-1 text-[28px] leading-none tracking-[0.18em] md:text-[40px]">
                  Bondage
                </h1>
                <p className="mt-3 max-w-xs text-[11px] leading-relaxed text-neutral-200/80 md:max-w-sm md:text-[12px]">
                  束縛から解き放たれた一台を、静かなデジタルガレージから。
                  セレクトした在庫だけを、丁寧に整えた環境でご覧いただけます。
                </p>
              </div>

              {/* 下段：STOCK TOP オーバーレイカード */}
              <div className="mt-6 flex flex-col gap-3 md:mt-0 md:flex-row md:items-end md:justify-between">
                {/* 左側：テキストブロック */}
                <div className="max-w-md">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[9px] font-semibold tracking-[0.32em] text-red-300/90">
                      STOCK TOP
                    </span>
                    <span className="h-[1px] w-10 bg-red-400/70" />
                  </div>

                  <div className="mt-2 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 backdrop-blur-md">
                    <span className="text-[10px] tracking-[0.2em] text-neutral-50/95">
                      CURRENT INVENTORY
                    </span>
                  </div>

                  {featured && (
                    <div className="mt-3 space-y-1">
                      <p className="text-xs tracking-[0.24em] text-neutral-300/80">
                        FEATURED STOCK
                      </p>
                      <p className="text-[15px] font-semibold tracking-wide md:text-[18px]">
                        {featuredName || "在庫車を準備中"}
                      </p>

                      {featuredDescription && (
                        <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-neutral-200/90 md:max-w-[360px] md:text-[12px]">
                          {featuredDescription}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* 右側：在庫車一覧ボタン（赤塗りつぶし） */}
                <div className="flex items-end justify-start md:justify-end">
                  <Link
                    href="/inventory"
                    className="inline-flex items-center justify-center rounded-full bg-red-600/95 px-6 py-2 text-[11px] font-semibold tracking-[0.2em] text-white shadow-[0_0_26px_rgba(248,113,113,0.8)] backdrop-blur-sm transition hover:bg-red-500 hover:shadow-[0_0_38px_rgba(248,113,113,1)] md:px-8 md:py-2.5 md:text-[12px]"
                  >
                    在庫車一覧
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== COLUMN / 整備記録 セクション ===== */}
        <section
          id="layout"
          className="grid gap-6 md:grid-cols-2 md:gap-7"
          aria-label="コラムと整備記録簿"
        >
          {/* COLUMN */}
          <article className="rounded-3xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/80 via-black/85 to-neutral-900/80 p-5 shadow-[0_0_35px_rgba(0,0,0,0.85)] md:p-6">
            <div className="flex items-center gap-2">
              <span className="h-[8px] w-[8px] rounded-full bg-red-500" />
              <span className="text-[10px] font-semibold tracking-[0.3em] text-neutral-300">
                COLUMN
              </span>
            </div>
            <h2 className="mt-3 text-lg font-semibold tracking-wide md:text-xl">
              中古車コラム
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/90">
              買取査定の裏側や仕入れの基準、展示の工夫など、
              中古車屋ならではの視点で切り取った短いコラムをまとめていくスペース。
            </p>
            <p className="mt-3 text-[11px] text-neutral-400">
              STORY / MARKET / DETAIL の3つの切り口で、クルマの背景を言葉にします。
            </p>
          </article>

          {/* 整備記録簿 */}
          <article className="rounded-3xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/80 via-black/85 to-neutral-900/80 p-5 shadow-[0_0_35px_rgba(0,0,0,0.85)] md:p-6">
            <div className="flex items-center gap-2">
              <span className="h-[8px] w-[8px] rounded-full bg-red-500" />
              <span className="text-[10px] font-semibold tracking-[0.3em] text-neutral-300">
                SERVICE LOG
              </span>
            </div>
            <h2 className="mt-3 text-lg font-semibold tracking-wide md:text-xl">
              整備記録と入庫履歴
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/90">
              納車前点検やオイル交換、消耗品交換、車検整備などの履歴を整理するための下準備となるセクション。
            </p>
            <p className="mt-3 text-[11px] text-neutral-400">
              「いつ・どこを・どのように整備したか」を可視化し、
              在庫車ごとのコンディションが一目で分かる状態を目指します。
            </p>
          </article>
        </section>

        {/* ===== このサイトでできること ===== */}
        <section
          id="features"
          className="rounded-3xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/80 via-black/85 to-neutral-900/80 p-5 shadow-[0_0_35px_rgba(0,0,0,0.85)] md:p-6"
        >
          <h2 className="text-base font-semibold tracking-wide md:text-lg">
            このサイトでできること
          </h2>

          <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-neutral-200/90">
            <li className="flex gap-2">
              <span className="mt-[5px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>在庫車リストと車両ごとの基本情報を、スマホからでもストレスなく確認できます。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[5px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>輸入車と国産車を同じ条件で見比べられるよう、情報の粒度を揃えて整理していきます。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[5px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>中古車屋ならではの実体験や視点を交えたコラムで、数字では見えない「背景」も伝えます。</span>
            </li>
          </ul>

          <p className="mt-5 text-[11px] text-neutral-500">
            今後、在庫車の追加 / 比較機能 / 詳細な整備ログの公開など、
            コンテンツと機能を段階的に拡張していく予定です。
          </p>
        </section>
      </div>
    </main>
  );
}
