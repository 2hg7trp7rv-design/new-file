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
  const featured =
    cars.find(
      (car) => car.status === "IN_STOCK" || car.status === "stock"
    ) ?? cars[0];

  const featuredName =
    featured &&
    (featured.displayName ??
      [featured.maker, featured.model, featured.grade]
        .filter(Boolean)
        .join(" "));

  return (
    <main className="relative min-h-screen bg-[#0F0F10] text-neutral-50">
      {/* 四隅ナビゲーション（住所は非表示） */}
      <div className="pointer-events-none fixed inset-0 z-30">
        {/* 左上 ブランド */}
        <div className="pointer-events-auto absolute left-4 top-4 md:left-8 md:top-8">
          <Link
            href="/"
            className="border-l-2 border-red-600/80 pl-2 text-[10px] font-semibold tracking-[0.24em] text-neutral-100 md:text-xs"
          >
            <div className="leading-tight">AUTO COLLECTION</div>
            <div className="text-sm tracking-[0.18em] md:text-base">
              BONDAGE
            </div>
          </Link>
        </div>

        {/* 右上 MENU ダミー */}
        <div className="pointer-events-auto absolute right-4 top-4 text-[10px] font-medium tracking-[0.22em] text-neutral-200 md:right-8 md:top-8 md:text-xs">
          <span>MENU</span>{" "}
          <span className="align-middle text-red-500/80">///</span>
        </div>

        {/* 左下（住所ブロックは削除） */}

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
        {/* 在庫車トップ（カードを大きく、中央におすすめ車両） */}
        <section className="rounded-3xl border border-red-900/50 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-6 shadow-[0_0_40px_rgba(0,0,0,0.7)] md:p-8 min-h-[360px] md:min-h-[420px]">
          <div className="flex h-full flex-col gap-6 md:gap-8">
            {/* 上部タイトル */}
            <header className="space-y-2">
              <div className="text-[10px] font-medium tracking-[0.24em] text-red-300/90 md:text-xs">
                STOCK TOP
              </div>
              <h1 className="text-2xl font-semibold tracking-wide md:text-3xl">
                在庫車トップ
              </h1>
              <p className="text-[13px] leading-relaxed text-neutral-200/85">
                現在取り扱い中の在庫車とおすすめ車種の入り口ページ
              </p>
            </header>

            {/* 中央 おすすめ車種ブロック */}
            <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] md:items-center">
              {/* 写真ゾーン */}
              <div className="relative min-h-[180px] overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 via-black to-neutral-800">
                {featured && (featured as any).image ? (
                  <div
                    className="h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${(featured as any).image})`,
                    }}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-[11px] text-neutral-400">
                    おすすめ車種の写真を配置
                  </div>
                )}
              </div>

              {/* テキスト情報ゾーン */}
              <div className="space-y-2 md:space-y-3">
                <div className="text-[11px] font-semibold tracking-[0.22em] text-neutral-400">
                  PICKUP STOCK
                </div>
                <div className="text-base font-semibold md:text-lg">
                  {featuredName ?? "在庫車を準備中"}
                </div>

                {featured && featured.shortDescription && (
                  <p className="text-[11px] leading-relaxed text-neutral-400">
                    {featured.shortDescription}
                  </p>
                )}

                {featured && (
                  <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-neutral-400">
                    {featured.maker && (
                      <>
                        <dt className="text-neutral-500">メーカー</dt>
                        <dd>{featured.maker}</dd>
                      </>
                    )}
                    {featured.model && (
                      <>
                        <dt className="text-neutral-500">車種</dt>
                        <dd>{featured.model}</dd>
                      </>
                    )}
                    {featured.year && (
                      <>
                        <dt className="text-neutral-500">年式</dt>
                        <dd>{featured.year}</dd>
                      </>
                    )}
                    {featured.priceYen && (
                      <>
                        <dt className="text-neutral-500">車両本体価格</dt>
                        <dd>
                          {Intl.NumberFormat("ja-JP").format(
                            Number(featured.priceYen)
                          )}
                          円
                        </dd>
                      </>
                    )}
                  </dl>
                )}
              </div>
            </div>

            {/* 下部タブ風リンク */}
            <div className="mt-2 flex flex-col gap-2 md:flex-row">
              <Link
                href="/inventory"
                className="flex flex-1 items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_0_25px_rgba(248,113,113,0.55)] transition hover:bg-red-500 hover:shadow-[0_0_35px_rgba(248,113,113,0.75)]"
              >
                在庫車リスト
              </Link>
              <Link
                href="/inventory#all"
                className="flex flex-1 items-center justify-center rounded-full border border-red-500/60 bg-black/40 px-6 py-2.5 text-sm font-semibold tracking-wide text-red-100/90 shadow-inner shadow-red-950/60 transition hover:border-red-400 hover:bg-red-950/30"
              >
                在庫車一覧
              </Link>
              <Link
                href="/inventory#type"
                className="flex flex-1 items-center justify-center rounded-full border border-neutral-700 bg-black/40 px-6 py-2.5 text-sm font-semibold tracking-wide text-neutral-100 shadow-inner shadow-black/60 transition hover:border-neutral-500 hover:bg-neutral-900/80"
              >
                輸入車と国産車
              </Link>
            </div>
          </div>
        </section>

        {/* コラム / 整備記録簿 セクション（元 NIGHT / DAY） */}
        <section
          id="layout"
          className="grid gap-6 md:grid-cols-2 md:gap-8"
          aria-label="コラムと整備記録簿"
        >
          {/* COLUMN */}
          <article className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)] md:p-6">
            <div className="text-[10px] font-semibold tracking-[0.24em] text-neutral-400">
              COLUMN
            </div>
            <h2 className="mt-2 text-lg font-semibold tracking-wide">
              中古車コラム
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/85">
              買取査定の裏側や仕入れの基準、展示の工夫など
              中古車屋ならではの視点でまとめる短いコラムのスペース
            </p>
          </article>

          {/* 整備記録簿 */}
          <article className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)] md:p-6">
            <div className="text-[10px] font-semibold tracking-[0.24em] text-neutral-400">
              整備記録簿
            </div>
            <h2 className="mt-2 text-lg font-semibold tracking-wide">
              整備記録と入庫履歴
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-neutral-200/85">
              納車前点検やオイル交換、消耗品交換などの整備履歴を整理するスペース
              在庫車ごとのメンテナンス状況を把握しやすくするための下準備
            </p>
          </article>
        </section>

        {/* このサイトでできること */}
        <section
          id="features"
          className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/80 via-black/80 to-neutral-900/70 p-5 shadow-[0_0_30px_rgba(0,0,0,0.6)] md:p-6"
        >
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
