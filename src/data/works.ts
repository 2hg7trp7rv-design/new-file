export type Work = {
  id: string;
  publishedLabel: string;
  customer: string;
  vehicle: string;
  menu: string;
  process: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
  servicePath: "/services/coating" | "/services/polish" | "/services/wash";
};

/**
 * Published work records migrated from the former official gallery.
 * Keep the source URL with every record so vehicle/menu claims remain auditable.
 */
export const WORKS: Work[] = [
  {
    id: "2815",
    publishedLabel: "公開記録 2025.02",
    customer: "A様",
    vehicle: "スズキ ハスラー",
    menu: "M’s DIA",
    process: "下地処理・コーティング塗り込み",
    image: "/images/work-hustler.jpg",
    imageAlt: "M’s DIA施工後の淡いブルーのスズキ ハスラー",
    sourceUrl: "https://remakestudioms.com/pg.html?id=2815",
    servicePath: "/services/coating",
  },
  {
    id: "2811",
    publishedLabel: "公開記録 2025.02",
    customer: "K様",
    vehicle: "トヨタ シエンタ",
    menu: "M’s COATING",
    process: "下地処理・研磨・コーティング塗り込み",
    image: "/images/work-sienta.jpg",
    imageAlt: "M’s COATING施工後の白いトヨタ シエンタ",
    sourceUrl: "https://remakestudioms.com/pg.html?id=2811",
    servicePath: "/services/coating",
  },
  {
    id: "2807",
    publishedLabel: "公開記録 2025.01",
    customer: "M様",
    vehicle: "ダイハツ コペン",
    menu: "メンテナンス",
    process: "下地処理・メンテナンス処理",
    image: "/images/work-copen.jpg",
    imageAlt: "コーティングメンテナンス後の赤紫色のダイハツ コペン",
    sourceUrl: "https://remakestudioms.com/pg.html?id=2807",
    servicePath: "/services/coating",
  },
  {
    id: "2803",
    publishedLabel: "公開記録 2025.01",
    customer: "T様",
    vehicle: "ダイハツ タフト",
    menu: "M’s COATING",
    process: "下地処理・研磨・コーティング塗り込み",
    image: "/images/work-taft.jpg",
    imageAlt: "M’s COATING施工後の白いダイハツ タフト",
    sourceUrl: "https://remakestudioms.com/pg.html?id=2803",
    servicePath: "/services/coating",
  },
];
