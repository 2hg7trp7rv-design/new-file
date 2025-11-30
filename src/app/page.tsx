// src/app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getAllInventory } from "@/lib/inventory";

export const metadata: Metadata = {
  title: "AUTO COLLECTION Bondage | 在庫車トップ",
  description:
    "AUTO COLLECTION Bondage の在庫車一覧とショップ概要をまとめたトップページ。",
};

export default function HomePage() {
  const cars = getAllInventory();
  const featured = cars[0];

  const featuredTitle =
    featured &&
    (() => {
      const parts = [
        // maker / model / grade を優先
        // 型安全を保つため、値が string のものだけ結合
        typeof featured.maker === "string" ? featured.maker : "",
        typeof featured.model === "string" ? featured.model : "",
        typeof featured.grade === "string" ? featured.grade : "",
      ].filter((v) => v && v.length > 0);

      if (parts.length > 0) return parts.join(" ");
      return "在庫車両";
    })();

  return (
    <main className="relative min-h-screen bg-[#050507] text-neutral-50">
      {/* 四隅ナビゲーション（住所は非表示） */}
      <div className="pointer-events-none fixed inset-0 z-30">
        {/* 左上 ブランドロゴ */}
        <div className="pointer-events-auto absolute left-4 top-4 md:left-10 md:top-8">
          <Link
            href="/"
            className="inline-block border-l-2 border-red-600/80 pl-3"
          >
            <div className="text-[10px] font-semibold tracking-[0.24em] text-neutral-200 md:text-xs">
              AUTO COLLECTION
            </div>
            <div className="mt-[2px] text-lg font-semibold tracking-[0.20em] text-neutral-50 md:text-2xl">
              BONDAGE
            </div>
          </Link>
        </div>

        {/* 右上 MENU ダミー */}
        <div className="pointer-events-auto absolute right-4 top-4 text-[10px] font-medium tracking-[0.22em] text-neutral-300 md:right-10 md:top-8 md:text-xs">
          <span>MENU</span>{" "}
          <span className="align-middle text-red-500/80">///</span>
        </div>

        {/* 右下 PIT IN ボタン（在庫車ページへ） */}
        <div className="pointer-events-auto absolute bottom-4 right-4 md:bottom-10 md:right-10">
          <Link
            href="/inventory"
            className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-xs font-semibold tracking-[0.18em] text-white shadow-[0_0_20px_rgba(239,68,68,0.8)] transition hover:bg-red-500 hover:shadow-[0_0_28px_rgba(239,68,68,1)] md:px-8 md:py-3 md:text-sm"
          >
            PIT IN
          </Link>
        </div>
      </div>

      {/* メインコンテンツラッパー */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-20 md:gap-12 md:px-6 md:pb-24 md:pt-24">
        {/* ヒーローセクション：ユーザー側で /public/hero.jpg を差し替え */}
        <section className="relative overflow-hidden rounded-[32px] border border-neutral-800 bg-black/80 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
          {/* 背景画像（hero.jpg を想定） */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/hero.jpg)" }}
          />
          {/* 暗めオーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-red-900/20" />

          {/* コンテンツ */}
          <div className="relative z-10 flex flex-col gap-10 px-6 py-10 md:px-10 md:py-14">
            {/* 左上 キャッチコピー（筆記体イメージ） */}
            <div className="inline-block rounded-full border border-white/20 bg-black/30 px-4 py-1.5 backdrop-blur">
              <span className="text-[11px] tracking-[0.28em] text-neutral-200">
                DIGITAL INDEPENDENCE
              </span>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl font-light tracking-[0.12em] text-neutral-50 md:text-4xl">
                <span className="block text-[28px] font-[500] tracking-[0.35em] text-neutral-200 md:text-[32px]">
                  AUTO COLLECTION
                </span>
                <span className="mt-3 block text-[40px] font-light tracking-[0.35em] text-neutral-50 md:text-[52px]">
                  BONDAGE
                </span>
              </h1>
              <p className="max-w-xl text-[12px] leading-relaxed text-neutral-200/85 md:text-[13px]">
                ハイエンドな輸入車とこだわりのスポーツモデルだけを集めた、
                少数精鋭のガレージ型ストックサイト。
                実車に触れる前に「世界観」から楽しんでもらうための、デジタルショールームです。
              </p>
            </div>
          </div>
        </section>

        {/* STOCK TOP カード */}
        <section className="rounded-[28px] border border-neutral-800 bg-gradient-to-b from-neutral-950/90 via-black/90 to-neutral-950/90 p-5 shadow-[0_0_40px_rgba(0,0,0,0.9)] md:p-7">
          <header className="mb-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.30em] text-red-300/90 md:text-[11px]">
                STOCK TOP
              </div>
              <h2 className="mt-2 text-xl font-semibold tracking-[0.06em] text-neutral-50 md:text-2xl">
                在庫車トップ
              </h2>
              <p className="mt-1 text-[12px] leading-relaxed text-neutral-300 md:text-[13px]">
                現在のおすすめ在庫車と、在庫一覧へのショートカット。
              </p>
            </div>

            <div className="hidden text-right text-[11px] leading-relaxed text-neutral-400 md:block">
              <p>少数精鋭のラインナップから、</p>
              <p>今見てほしい1台をピックアップしています。</p>
            </div>
          </header>

          <div className="grid gap-5 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)] md:items-stretch">
            {/* 左：大きな画像＋タイトルオーバーレイ */}
            <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80">
              {/* 画像本体（featured.image があれば表示） */}
              {featured && typeof featured.image === "string" ? (
                <div
                  className="h-[230px] w-full bg-cover bg-center brightness-[0.75] md:h-[280px]"
                  style={{
                    backgroundImage: `url(${featured.image})`,
                  }}
                />
              ) : (
                <div className="flex h-[230px] w-full items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-red-950/60 text-[11px] text-neutral-400 md:h-[280px]">
                  在庫車のメイン写真を配置
                </div>
              )}

              {/* 上部 左寄せの白枠ラベル（タイトル） */}
              <div className="pointer-events-none absolute left-4 top-4 md:left-6 md:top-6">
                <div className="inline-flex max-w-[80%] items-center rounded-full border border-white/40 bg-white/15 px-3 py-1 backdrop-blur">
                  <span className="truncate text-[11px] font-semibold tracking-[0.16em] text-white md:text-[12px]">
                    {featuredTitle}
                  </span>
                </div>
              </div>

              {/* 下部：グラデーション＋在庫一覧ボタン */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-4 md:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col text-[11px] text-neutral-100 md:text-[12px]">
                    <span className="font-semibold tracking-[0.14em] text-red-200">
                      RECOMMENDED STOCK
                    </span>
                    {featured && featured.shortDescription && (
                      <span className="mt-1 line-clamp-2 max-w-[260px] text-[11px] leading-snug text-neutral-200/90 md:text-[12px]">
                        {featured.shortDescription}
                      </span>
                    )}
                  </div>

                  <Link
                    href="/inventory"
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2 text-[11px] font-semibold tracking-[0.18em] text-white shadow-[0_0_20px_rgba(239,68,68,0.8)] transition hover:bg-red-500 hover:shadow-[0_0_26px_rgba(239,68,68,1)] md:px-6 md:py-2.5 md:text-[12px]"
                  >
                    在庫車一覧
                  </Link>
                </div>
              </div>
            </div>

            {/* 右：スペック的なテキストカード */}
            <div className="flex flex-col justify-between rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/80 p-4 md:p-5">
              <div className="space-y-3">
                <div className="text-[11px] font-semibold tracking-[0.22em] text-neutral-400">
                  STOCK SUMMARY
                </div>
                <div className="space-y-1.5">
                  <div className="text-base font-semibold tracking-[0.04em] text-neutral-50 md:text-lg">
                    {featuredTitle}
                  </div>
                  {featured && featured.shortDescription && (
                    <p className="text-[12px] leading-relaxed text-neutral-300 md:text-[13px]">
                      {featured.shortDescription}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-neutral-300 md:text-[12px]">
                {featured && typeof featured.maker === "string" && (
                  <>
                    <span className="text-neutral-500">メーカー</span>
                    <span>{featured.maker}</span>
                  </>
                )}
                {featured && typeof featured.model === "string" && (
                  <>
                    <span className="text-neutral-500">車種</span>
                    <span>{featured.model}</span>
                  </>
                )}
                {featured && typeof featured.grade === "string" && (
                  <>
                    <span className="text-neutral-500">グレード</span>
                    <span>{featured.grade}</span>
                  </>
                )}
                {/* 価格や年式などは型を見てから拡張予定 */}
              </div>

              {featured && typeof featured.id === "string" && (
                <div className="mt-4 flex justify-end">
                  <Link
                    href={`/inventory/${featured.id}`}
                    className="text-[11px] font-semibold tracking-[0.14em] text-red-300 underline-offset-4 hover:text-red-200 hover:underline md:text-[12px]"
                  >
                    この車両の詳細を見る
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* コラム / 整備記録簿 セクション */}
        <section
          id="layout"
          className="grid gap-6 md:grid-cols-2 md:gap-8"
          aria-label="コラムと整備記録簿"
        >
          {/* COLUMN */}
          <article className="rounded-[24px] border border-neutral-800 bg-gradient-to-b from-neutral-950/90 via-black/85 to-neutral-950/90 p-5 shadow-[0_0_30px_rgba(0,0,0,0.7)] md:p-6">
            <div className="text-[10px] font-semibold tracking-[0.24em] text-neutral-400">
              COLUMN
            </div>
            <h2 className="mt-2 text-lg font-semibold tracking-[0.06em] text-neutral-50 md:text-xl">
              中古車コラム
            </h2>
            <p className="mt-3 text-[12px] leading-relaxed text-neutral-200/85 md:text-[13px]">
              買取査定の裏側や仕入れの基準、展示のこだわりなど、
              中古車屋ならではの視点でまとめる短いコラムをここに並べていきます。
            </p>
          </article>

          {/* 整備記録簿 */}
          <article className="rounded-[24px] border border-neutral-800 bg-gradient-to-b from-neutral-950/90 via-black/85 to-neutral-950/90 p-5 shadow-[0_0_30px_rgba(0,0,0,0.7)] md:p-6">
            <div className="text-[10px] font-semibold tracking-[0.24em] text-neutral-400">
              MAINTENANCE LOG
            </div>
            <h2 className="mt-2 text-lg font-semibold tracking-[0.06em] text-neutral-50 md:text-xl">
              整備記録と入庫履歴
            </h2>
            <p className="mt-3 text-[12px] leading-relaxed text-neutral-200/85 md:text-[13px]">
              納車前点検やオイル交換、消耗品交換、
              各車両ごとの整備履歴をまとめていくためのスペース。
              「どこまで整備されているか」が一目で分かるページへ育てていきます。
            </p>
          </article>
        </section>

        {/* このサイトでできること */}
        <section
          id="features"
          className="rounded-[24px] border border-neutral-800 bg-gradient-to-b from-neutral-950/90 via-black/85 to-neutral-950/90 p-5 shadow-[0_0_30px_rgba(0,0,0,0.7)] md:p-6"
        >
          <h2 className="text-base font-semibold tracking-[0.06em] text-neutral-50 md:text-lg">
            このサイトでできること
          </h2>

          <ul className="mt-4 space-y-3 text-[12px] leading-relaxed text-neutral-200/85 md:text-[13px]">
            <li className="flex gap-2">
              <span className="mt-[4px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>在庫車の基本情報と世界観を、スマホからさっと確認できます。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[4px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>輸入車・国産車を問わず、こだわり抜いた少数精鋭のラインナップを閲覧できます。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[4px] h-[6px] w-[6px] rounded-full bg-red-500" />
              <span>今後は整備記録やコラムを追加し、車選びの判断材料を増やしていきます。</span>
            </li>
          </ul>

          <p className="mt-5 text-[11px] text-neutral-500">
            デザインと体験を優先しつつ、少しずつ機能面（問い合わせ・検索など）も拡張していく予定です。
          </p>
        </section>
      </div>
    </main>
  );
}
