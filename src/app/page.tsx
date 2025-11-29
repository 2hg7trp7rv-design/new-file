// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AUTO COLLECTION Bondage | 在庫車とショップ概要",
  description: "AUTO COLLECTION Bondage の在庫車一覧とショップ情報をまとめたトップページ",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-neutral-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 md:py-16">
        {/* HERO */}
        <section className="rounded-3xl border border-red-900/40 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/60 p-6 shadow-[0_0_40px_rgba(0,0,0,0.7)] md:p-8">
          <div className="space-y-5">
            <div className="text-xs font-medium tracking-[0.22em] text-red-300/80">
              AUTO COLLECTION BONDAGE
            </div>

            <h1 className="text-2xl font-semibold tracking-wide md:text-3xl">
              在庫車とガレージの概要
            </h1>

            <p className="text-[13px] leading-relaxed text-neutral-200/80">
              現在取り扱い中の在庫車とガレージの雰囲気を一覧で確認できるトップページ
            </p>

            <div className="flex flex-col gap-3 pt-2 md:flex-row">
              {/* 在庫車ページへのリンク */}
              <Link
                href="/inventory"
                className="flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_0_25px_rgba(248,113,113,0.55)] transition hover:bg-red-500 hover:shadow-[0_0_35px_rgba(248,113,113,0.75)]"
              >
                在庫車リスト
              </Link>

              {/* ページ内アンカー */}
              <Link
                href="#about"
                className="flex items-center justify-center rounded-full border border-red-500/60 bg-black/40 px-6 py-2.5 text-sm font-semibold tracking-wide text-red-100/90 shadow-inner shadow-red-950/60 transition hover:border-red-400 hover:bg-red-950/30"
              >
                ショップ情報
              </Link>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 text-[11px] text-neutral-200/80">
              <span className="rounded-full border border-red-500/50 px-3 py-1 bg-black/40">
                #在庫車一覧
              </span>
              <span className="rounded-full border border-red-500/30 px-3 py-1 bg-black/40">
                #輸入車と国産車
              </span>
              <span className="rounded-full border border-red-500/30 px-3 py-1 bg-black/40">
                #ガレージ情報
              </span>
            </div>
          </div>
        </section>

        {/* NIGHT / DAY セクション */}
        <section
          id="about"
          className="grid gap-6 md:grid-cols-2 md:gap-8"
          aria-label="ショップの雰囲気"
        >
          {/* NIGHT SIDE */}
          <article className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)] md:p-6">
            <div className="text-[10px] font-semibold tracking-[0.24em] text-neutral-400">
              NIGHT SIDE
            </div>
            <h2 className="mt-2 text-lg font-semibold tracking-wide">
              夜のショップ風景
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/85">
              夜間にガレージ内に並ぶ車両レイアウトと照明計画を前提にした展示スタイルのイメージ
            </p>
          </article>

          {/* DAY SIDE */}
          <article className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)] md:p-6">
            <div className="text-[10px] font-semibold tracking-[0.24em] text-neutral-400">
              DAY SIDE
            </div>
            <h2 className="mt-2 text-lg font-semibold tracking-wide">
              昼のガレージ風景
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/85">
              日中に来店するユーザー層と動線を基準にした車両配置とガレージ内の使い方のイメージ
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
              <span>在庫車リストと車両ごとの基本情報を確認</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[4px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>軽トラから高級車までを統一条件で比較</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[4px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>Instagram など外部コンテンツと連携して実車写真を確認</span>
            </li>
          </ul>

          <p className="mt-5 text-[11px] text-neutral-500">
            在庫データベース inventory.json と連動した個別ページや追加機能を順次反映予定
          </p>
        </section>
      </div>
    </main>
  );
}
