// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* ① ヒーローセクション：hero.jpgを背景だけ用意しておく */}
      <section className="relative h-[80vh] md:h-screen overflow-hidden">
        {/* 背景画像（hero.jpgを /public/images/hero.jpg に置く前提） */}
        <Image
          src="/images/hero.jpg"
          alt="AUTO COLLECTION Bondage hero"
          fill
          priority
          className="object-cover"
        />
        {/* 暗めオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

        {/* 中央テキスト */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="text-center space-y-6">
            <p className="text-xs tracking-[0.35em] uppercase text-neutral-300">
              AUTO COLLECTION
            </p>
            {/* ③ Bondageロゴを大きく・筆記体風（後でフォント差し替え推奨） */}
            <h1 className="text-4xl md:text-6xl font-semibold tracking-[0.12em]">
              <span className="inline-block align-middle">
                Bondage
              </span>
            </h1>
            <p className="text-sm md:text-base text-neutral-200 max-w-xl mx-auto">
              夜のガレージと昼の生活のあいだにある場所。この1枚から、あなたの在庫車と世界観を覗いてください。
            </p>

            {/* 在庫車一覧ボタン（中央・赤枠＋発光） */}
            <div className="pt-4 flex justify-center">
              <Link
                href="/inventory"
                className="inline-flex items-center justify-center rounded-full border border-red-500 px-10 py-3 text-sm md:text-base font-medium tracking-[0.18em] uppercase bg-black/60 backdrop-blur-sm shadow-[0_0_32px_rgba(239,68,68,0.4)] transition-transform hover:scale-[1.02]"
              >
                在庫車一覧
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ④ 2枚目：在庫車のメイン画像を全面表示＋テキスト・ボタンを重ねる */}
      <section className="px-4 py-10 md:py-14 bg-black">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[32px] bg-black shadow-[0_0_40px_rgba(239,68,68,0.5)]">
            {/* 在庫車のメイン画像（全面表示） */}
            <div className="relative h-[320px] md:h-[420px]">
              <Image
                src="/images/inventory/bugatti-chiron-main.jpg"
                alt="ブガッティ シロン メイン"
                fill
                className="object-cover"
                priority
              />
              {/* 下側を少し暗くして文字を読みやすくする */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
            </div>

            {/* 画像上に重ねるテキストとボタン */}
            <div className="pointer-events-none absolute inset-0 flex flex-col justify-end">
              <div className="px-6 pb-7 md:px-8 md:pb-8 space-y-2 md:space-y-3">
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-300">
                  INVENTORY PICKUP
                </p>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    ブガッティ シロン
                  </h2>
                  <p className="text-xs md:text-sm text-neutral-300">
                    2018年式・3,500km
                  </p>
                </div>
                <p className="text-sm md:text-base text-neutral-100">
                  価格: ￥380,000,000
                </p>

                {/* 画像下部中央に大きい在庫一覧ボタンを重ねる */}
                <div className="pt-4 flex justify-center">
                  <Link
                    href="/inventory"
                    className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-red-500 px-10 py-3 text-sm md:text-base font-medium tracking-[0.18em] uppercase bg-black/70 backdrop-blur-sm shadow-[0_0_40px_rgba(239,68,68,0.7)] hover:bg-red-600 hover:text-white hover:shadow-[0_0_60px_rgba(239,68,68,0.9)] transition"
                  >
                    在庫車一覧
                  </Link>
                </div>
              </div>
            </div>

            {/* ⑤ 外枠の赤い光（カード全体の発光はshadowで表現） */}
          </div>
        </div>
      </section>

      {/* 既存の「在庫車一覧」や「このサイトでできること」がある場合は
          下に追加でセクションを作るスペース（今はシンプルにプレースホルダー） */}
      <section className="px-4 pb-16 md:pb-20 bg-black">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg md:text-xl font-semibold">在庫車一覧</h3>
            <p className="text-xs md:text-sm text-neutral-400">
              現在の在庫数:2台
            </p>
          </div>

          {/* ここは最低限のカードにしておき、詳細レイアウトは後で調整可能 */}
          <div className="space-y-4">
            <Link
              href="/inventory/bugatti-chiron"
              className="block rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-black p-4 md:p-5 shadow-[0_0_24px_rgba(255,255,255,0.04)]"
            >
              <div className="flex gap-4">
                <div className="relative h-24 w-32 overflow-hidden rounded-2xl md:h-28 md:w-40">
                  <Image
                    src="/images/inventory/bugatti-chiron-main.jpg"
                    alt="ブガッティ シロン"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                      BUGATTI
                    </p>
                    <p className="text-base md:text-lg font-semibold">
                      ブガッティ シロン
                    </p>
                  </div>
                  <p className="text-xs md:text-sm text-neutral-300">
                    2018年式・3,500km・価格￥380,000,000
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/inventory/bugatti-chiron-sport-01"
              className="block rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-black p-4 md:p-5 shadow-[0_0_24px_rgba(255,255,255,0.04)]"
            >
              <div className="flex gap-4">
                <div className="relative h-24 w-32 overflow-hidden rounded-2xl md:h-28 md:w-40">
                  <Image
                    src="/images/inventory/bugatti-chiron-main.jpg"
                    alt="ブガッティ シロン スポール"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-400">
                      BUGATTI
                    </p>
                    <p className="text-base md:text-lg font-semibold">
                      ブガッティ シロン スポール
                    </p>
                  </div>
                  <p className="text-xs md:text-sm text-neutral-300">
                    詳細スペックは個別ページで確認してください。
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
