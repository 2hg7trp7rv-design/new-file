export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-20 pt-8">
      {/* HERO セクション */}
      <section className="rounded-3xl bg-gradient-to-br from-red-900/70 via-black to-[#1f130b] p-[1px] shadow-[0_0_80px_rgba(220,38,38,0.35)]">
        <div className="rounded-3xl bg-[#050505] px-6 py-8 sm:px-10 sm:py-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Auto Collection Bondage
          </p>
          <h1 className="mb-4 text-3xl font-semibold leading-tight sm:text-4xl">
            夜はボンデージ。<br />
            昼はガレージのリビング。
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-neutral-300 sm:text-base">
            軽トラからフェラーリ、レンジローバーまで。
            「夜の優雅さと色気」と、看板犬いなりちゃんがつくる
            「昼の温もりと親しみやすさ」。そのギャップを、スマホの中にも。
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-red-900/50 transition active:scale-[0.97]">
              在庫車を見る
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-[#ecdab9]/50 bg-black/40 px-6 py-2.5 text-sm font-medium text-[#ecdab9] backdrop-blur-sm transition hover:bg-[#ecdab9]/5 active:scale-[0.97]">
              お店の雰囲気を知る
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-neutral-400">
            <span className="rounded-full border border-neutral-800 bg-black/40 px-3 py-1">
              #NocturnalElegance
            </span>
            <span className="rounded-full border border-neutral-800 bg-black/40 px-3 py-1">
              #軽トラからフェラーリまで
            </span>
            <span className="rounded-full border border-neutral-800 bg-black/40 px-3 py-1">
              #いなりちゃん常駐
            </span>
          </div>
        </div>
      </section>

      {/* 昼と夜の二面性セクション */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-neutral-800 bg-gradient-to-b from-black/70 to-neutral-950 px-5 py-5">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-neutral-500">
            Night Side
          </p>
          <h2 className="mb-2 text-lg font-semibold text-[#ecdab9]">
            夜の優雅さ・色気
          </h2>
          <p className="text-sm leading-relaxed text-neutral-300">
            フェラーリやレンジローバーが静かに並ぶ、薄暗いガレージ。
            レッドのテールランプと、グロスブラックのボディだけが浮かび上がる時間帯。
            「Bondage」の名前がいちばん似合うのは、きっとこの瞬間です。
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-black/70 px-5 py-5">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-neutral-500">
            Day Side
          </p>
          <h2 className="mb-2 text-lg font-semibold text-red-400">
            昼の温もり・親しみやすさ
          </h2>
          <p className="text-sm leading-relaxed text-neutral-300">
            軽トラを見に来たおじちゃんも、輸入車を眺めに来た学生さんも、
            みんなを同じトーンで迎えるお店。
            いなりちゃんが転がっているソファのすぐそばで、次の相棒の相談が始まります。
          </p>
        </div>
      </section>

      {/* これから増やしていく導線の土台 */}
      <section className="space-y-3 rounded-2xl border border-neutral-800 bg-black/60 px-5 py-5">
        <h2 className="text-base font-semibold">
          このサイトでできること（これから増やしていきます）
        </h2>
        <ul className="space-y-2 text-sm text-neutral-300">
          <li className="flex items-start gap-2">
            <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
            <span>在庫車の一覧と、1台ごとの「生活が見える」紹介文を読む。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-[#ecdab9]" />
            <span>軽トラ〜スーパーカーまで、「Bondageならではの視点」で比較する。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[5px] inline-block h-1.5 w-1.5 rounded-full bg-neutral-500" />
            <span>Instagramや実店舗での様子とつなげて、雰囲気を掴む。</span>
          </li>
        </ul>
        <p className="pt-1 text-[11px] text-neutral-500">
          ※在庫データベース（inventory.json）と連動した本格的な在庫ページは、
          このあと一緒に組んでいきます。
        </p>
      </section>
    </div>
  );
}
