"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";

const plans = [
  {
    id: "one",
    tab: "約1年",
    name: "M’s COATING",
    price: "27,500円",
    caption: "新車SSサイズ",
    description: "まずはコーティングを試したい方、毎年きれいに整え直したい方に。",
    points: ["約1年耐久", "オリジナルガラスコーティング", "経年車はLEVEL 2研磨込み"],
  },
  {
    id: "two",
    tab: "約2年",
    name: "M’s PRO",
    price: "36,300円",
    caption: "新車SSサイズ",
    description: "価格と耐久のバランスを取りながら、きれいを長く保ちたい方に。",
    points: ["約2年耐久", "施工証明の継続には年1回のメンテナンスが必要", "経年車はLEVEL 2研磨込み"],
  },
  {
    id: "three",
    tab: "約3年",
    name: "M’s DIA",
    price: "52,800円",
    caption: "新車SSサイズ",
    description: "長く乗る予定の愛車を、艶と保護力の両方で守りたい方に。",
    points: ["約3年耐久", "施工証明の継続には年1回のメンテナンスが必要", "経年車はLEVEL 2研磨込み"],
  },
  {
    id: "premium",
    tab: "プレミアム",
    name: "G’ZOX",
    price: "65,100円",
    caption: "class R・新車SSサイズ",
    description: "水弾き、艶、耐久の違いまで相談して、上位商品から選びたい方に。",
    points: ["複数の公式施工商品", "3〜5年クラスまで用意", "G’ZOXパートナープログラム登録店"],
  },
] as const;

export function CoatingSelector() {
  const [selected, setSelected] = useState<(typeof plans)[number]["id"]>("one");
  const plan = plans.find((item) => item.id === selected) ?? plans[0];

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % plans.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + plans.length) % plans.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = plans.length - 1;
    const nextPlan = plans[nextIndex];
    setSelected(nextPlan.id);
    document.getElementById(`coating-tab-${nextPlan.id}`)?.focus();
  }

  return (
    <div className="coating-selector">
      <div className="coating-tabs" role="tablist" aria-label="耐久年数でコーティングを比較">
        {plans.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`coating-tab-${item.id}`}
            aria-controls={`coating-panel-${item.id}`}
            aria-selected={selected === item.id}
            tabIndex={selected === item.id ? 0 : -1}
            className={selected === item.id ? "is-active" : ""}
            onClick={() => setSelected(item.id)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div
        className="coating-result"
        role="tabpanel"
        id={`coating-panel-${plan.id}`}
        aria-labelledby={`coating-tab-${plan.id}`}
        tabIndex={0}
      >
        <div className="coating-result-main">
          <p className="plan-label">おすすめの考え方</p>
          <h3>{plan.name}</h3>
          <p className="plan-description">{plan.description}</p>
          <ul>
            {plan.points.map((point) => (
              <li key={point}><CheckIcon />{point}</li>
            ))}
          </ul>
        </div>
        <div className="coating-result-price">
          <span>税込</span>
          <strong>{plan.price}</strong>
          <small>{plan.caption}</small>
          <Link className="text-link" href="/services/coating">
            料金表を見る <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
