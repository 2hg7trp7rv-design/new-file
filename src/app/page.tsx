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
  const totalStock = cars.length;

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
        {/* ===== HERO セクション（Bondage）===== */}
        <section className="relative overflow-hidden rounded-[28px] border border-red-900/60 bg-black/70 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          <div className="relative h-[360px] w-full md:h-[420px]">
            {/* 背景は hero.jpg を想定（ユーザー側で差し替え） */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/hero.jpg)" }}
            />
            {/* 暗めグラデーション＋赤いグロー */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black/95" />
            <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.28),transparent_60%),_radial-gradient(circle_at_bottom,_rgba(248,113,113,0.24),transparent_60%)] opacity-70" />

            <div className="relative flex h-full flex-col justify-center px-5 py-6 md:px-10 md:py-8">
              <p className="text-[9px] font-medium tracking-[0.3em] text-red-200/80 md:text-[10px]">
                AUTO COLLECTION
              </p>
              <h1 className="mt-1 text-[32px] leading-none tracking-[0.18em] md:text-[42px]">
                Bondage
              </h1>
              <p className="mt-3 max-w-md text-[11px] leading-relaxed text-neutral-200/85 md:text-[12px]">
                夜のガレージと昼の生活のあいだにある場所。
                まずはこの1枚から、在庫車と世界観を覗いてください。
              </p>

              <div className="mt-7">
                <Link
                  href="/inventory"
                  className="inline-flex items-center justify-center rounded-full bg-red-600/95 px-7 py-2.5 text-[12px] font-semibold tracking-[0.22em] text-white shadow-[0_0_26px_rgba(248,113,113,0.9)] backdrop-blur-sm transition hover:bg-red-500 hover:shadow-[0_0_38px_rgba(248,113,113,1)] md:px-9 md:py-3"
                >
                  在庫車一覧
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 在庫車トップ カード ===== */}
        <section
          aria-label="在庫車トップ"
          className="rounded-[28px] border border-red-900/60 bg-gradient-to-b from-neutral-900/90 via-black/90 to-neutral-900/90 p-6 shadow-[0_0_50px_rgba(0,0,0,0.9)] md:p-8 min-h-[70vh] flex flex-col justify-between"
        >
          {/* 上部ヘッダー */}
          <header>
            <div className="text-[10px] font-medium tracking-[0.3em] text-red-300/90">
              STOCK TOP
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-wide md:text-[26px]">
              在庫車トップ
            </h2>
            <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-neutral-200/90">
              現在取り扱い中の在庫車とショップの基本情報をまとめた
              ベースページです。ここから在庫一覧や車種別の絞り込みへ
              進むことができます。
            </p>
          </header>

          {/* 中央：少し余白のある説明ゾーン（デザイン重視） */}
          <div className="mt-6 flex flex-1 flex-col items-center justify-center">
            <p className="max-w-md text-center text-[12px] leading-relaxed text-neutral-300/85">
              まずは在庫車リストから、気になる1台を探してみてください。
              輸入車と国産車をまとめて眺められるようにレイアウトしています。
            </p>
          </div>

          {/* 下部：在庫車リストボタン＋タブ風ボタン */}
          <div className="mt-8 flex flex-col items-center gap-4 pb-1">
            {/* メインCTA */}
            <Link
              href="/inventory"
              className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-red-600 px-8 py-3 text-[13px] font-semibold tracking-[0.24em] text-white shadow-[0_0_26px_rgba(248,113,113,0.9)] transition hover:bg-red-500 hover:shadow-[0_0_36px_rgba(248,113,113,1)]"
            >
              在庫車リスト
            </Link>

            {/* サブタブ：輸入車・国産車 / 在庫あり */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                type="button"
                className="min-w-[140px] rounded-full border border-neutral-600 bg-black/40 px-5 py-2 text-[11px] font-semibold tracking-[0.18em] text-neutral-100 shadow-inner shadow-black/70"
              >
                輸入車・国産車
              </button>
              <button
                type="button"
                className="min-w-[140px] rounded-full border border-neutral-600 bg-black/40 px-5 py-2 text-[11px] font-semibold tracking-[0.18em] text-neutral-100 shadow-inner shadow-black/70"
              >
                在庫あり：{totalStock}台
              </button>
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
            <h3 className="mt-3 text-lg font-semibold tracking-wide md:text-xl">
              中古車コラム
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/90">
              買取査定の裏側や仕入れの基準、展示の工夫など、
              中古車屋ならではの視点で切り取った短いコラムをまとめていくスペース。
            </p>
            <p className="mt-3 text-[11px] text-neutral-400">
              STORY / MARKET / DETAIL の3つの切り口で、
              クルマの背景を言葉にしていきます。
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
            <h3 className="mt-3 text-lg font-semibold tracking-wide md:text-xl">
              整備記録と入庫履歴
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/90">
              納車前点検やオイル交換、消耗品交換、車検整備などの履歴を整理するための
              セクション。将来的には在庫車ごとのコンディションを
              一覧で確認できることを目指します。
            </p>
            <p className="mt-3 text-[11px] text-neutral-400">
              「いつ・どこを・どのように整備したか」を記録し、
              安心して選べる在庫管理につなげていきます。
            </p>
          </article>
        </section>

        {/* ===== このサイトでできること ===== */}
        <section
          id="features"
          className="rounded-3xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/80 via-black/85 to-neutral-900/80 p-5 shadow-[0_0_35px_rgba(0,0,0,0.85)] md:p-6"
        >
          <h3 className="text-base font-semibold tracking-wide md:text-lg">
            このサイトでできること
          </h3>

          <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-neutral-200/90">
            <li className="flex gap-2">
              <span className="mt-[5px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>
                在庫車リストと車両ごとの基本情報を、スマホからでもストレスなく確認できます。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[5px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>
                輸入車と国産車を同じ条件で見比べられるよう、情報の粒度を揃えて整理していきます。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[5px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>
                中古車屋ならではの実体験や視点を交えたコラムで、数字では見えない「背景」も伝えます。
              </span>
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
