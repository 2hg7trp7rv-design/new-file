export type Service = {
  slug: "wash" | "polish" | "coating";
  eyebrow: string;
  name: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  startingPrice: string;
  priceCaption: string;
  highlights: Array<{ title: string; text: string }>;
  steps: Array<{ title: string; text: string }>;
  pricing: {
    columns: string[];
    rows: string[][];
    notes: string[];
  };
};

export const SERVICES: Service[] = [
  {
    slug: "wash",
    eyebrow: "PURE WATER HAND WASH",
    name: "純水手洗い洗車",
    title: "水の跡まで残しにくい、やさしい手洗い。",
    summary:
      "高圧予洗い、マイクロムース、羊毛100％のムートン、純水仕上げまで。細部も丁寧に整えます。",
    description:
      "砂やほこりを高圧水で落としてから、たっぷりの泡で汚れを包み込みます。ボディは羊毛100％のムートンでやさしく洗い、最後はミネラルをほとんど含まない純水で仕上げます。",
    image: "/images/wash-hand.jpg",
    imageAlt: "M’sのスタッフが泡とムートンで実車を手洗いしている様子",
    startingPrice: "3,500円",
    priceCaption: "一般料金・SSサイズ・税込",
    highlights: [
      {
        title: "純水仕上げ",
        text: "水道水に含まれるミネラル由来の水ジミを残しにくい仕上げです。",
      },
      {
        title: "羊毛100％ムートン",
        text: "砂を引きずらないよう予洗いを徹底し、やさしく洗い上げます。",
      },
      {
        title: "細部まで仕上げ",
        text: "エアブロー、ボディ拭き上げ、ステップ・車内・タイヤまで整えます。",
      },
    ],
    steps: [
      { title: "高圧予洗い", text: "足回りとボディの砂・ほこりを先に落とします。" },
      { title: "泡で包む", text: "マイクロムースで汚れを浮かせます。" },
      { title: "やさしく手洗い", text: "羊毛100％ムートンで丁寧に洗います。" },
      { title: "純水ですすぐ", text: "泡を落とし、最後に純水で全体をすすぎます。" },
      { title: "エア＆拭き上げ", text: "隙間の水分まで飛ばし、クロスで仕上げます。" },
      { title: "最終確認", text: "ステップ、室内、タイヤ周りまで確認します。" },
    ],
    pricing: {
      columns: ["サイズ", "一般", "M’s施工車 会員"],
      rows: [
        ["SS", "3,500円", "2,500円"],
        ["S", "3,700円", "2,700円"],
        ["M", "3,900円", "2,900円"],
        ["L", "4,300円", "3,300円"],
        ["LL", "4,500円", "3,500円"],
        ["XL", "5,200円", "4,200円"],
      ],
      notes: ["すべて税込価格です。", "車種サイズが不明な場合はご予約時に確認します。"],
    },
  },
  {
    slug: "polish",
    eyebrow: "PAINT CORRECTION",
    name: "ボディ磨き",
    title: "コーティングの前に、塗装そのものを整える。",
    summary:
      "塗装状態を見極め、削り過ぎない必要最小限の研磨で、くすみや洗車傷を整えます。",
    description:
      "高価なコーティングでも、下地が整っていなければ性能と美しさは十分に引き出せません。車両状態、予算、保管環境を確認し、軽研磨または鏡面研磨をご提案します。",
    image: "/images/craft-polish.jpg",
    imageAlt: "M’sのスタッフが実車の塗装面を機械研磨している様子",
    startingPrice: "11,000円",
    priceCaption: "LEVEL 1・SSサイズ・税込",
    highlights: [
      {
        title: "必要最小限の研磨",
        text: "塗装をむやみに削らず、状態に合わせた工程を組み立てます。",
      },
      {
        title: "2段階から提案",
        text: "軽研磨のLEVEL 1と、より深く整える鏡面研磨LEVEL 2から選べます。",
      },
      {
        title: "専用施工ブース",
        text: "雨、ほこり、湿度、気温の影響を抑えた環境で作業します。",
      },
    ],
    steps: [
      { title: "状態確認", text: "傷、くすみ、水ジミ、塗装状態を確認します。" },
      { title: "ご希望をヒアリング", text: "仕上がり、予算、保管環境を伺います。" },
      { title: "レベルを決定", text: "必要な研磨レベルと施工内容をご説明します。" },
      { title: "下地を洗浄", text: "研磨を妨げる汚れを丁寧に除去します。" },
      { title: "ポリッシング", text: "塗装への負担を抑えながら表面を整えます。" },
      { title: "仕上がり確認", text: "照明下で状態を確認し、お引き渡しします。" },
    ],
    pricing: {
      columns: ["サイズ", "LEVEL 1 軽研磨", "LEVEL 2 鏡面研磨"],
      rows: [
        ["SS", "11,000円", "24,200円"],
        ["S", "13,200円", "26,400円"],
        ["M", "15,400円", "28,600円"],
        ["L", "17,600円", "33,000円"],
        ["LL", "22,000円", "37,400円"],
        ["XL", "26,400円", "41,800円"],
      ],
      notes: [
        "すべて税込価格です。",
        "傷の深さや塗装状態によって、施工できる範囲が異なります。まずは実車確認をご相談ください。",
      ],
    },
  },
  {
    slug: "coating",
    eyebrow: "BODY COATING",
    name: "カーコーティング",
    title: "年数と使い方から、ちょうどいい保護を選ぶ。",
    summary:
      "約1年・2年・3年のM’sオリジナルと、G’ZOXのプレミアムラインから選べます。",
    description:
      "価格や名前だけで決めるのではなく、乗る年数、保管場所、洗車頻度、求める艶や水弾きを伺ってご提案します。経年車のM’sオリジナル料金にはLEVEL 2研磨が含まれます。",
    image: "/images/work-hustler.jpg",
    imageAlt: "M’s DIA施工後の淡いブルーのスズキ ハスラー",
    startingPrice: "27,500円",
    priceCaption: "M’s COATING・新車SS・税込",
    highlights: [
      {
        title: "1・2・3年から選べる",
        text: "予算と保有期間に合わせて、オリジナル3商品から選べます。",
      },
      {
        title: "研磨込みの経年車価格",
        text: "経年車のオリジナル商品はLEVEL 2研磨込みで下地から整えます。",
      },
      {
        title: "G’ZOX公式施工店",
        text: "複数のG’ZOX商品を扱う、パートナープログラム登録店です。",
      },
    ],
    steps: [
      { title: "使い方を確認", text: "保管環境、洗車頻度、保有予定年数を伺います。" },
      { title: "塗装診断", text: "傷、くすみ、付着物など現車の状態を確認します。" },
      { title: "商品をご提案", text: "耐久、仕上がり、予算の違いをご説明します。" },
      { title: "下地を整える", text: "洗浄と必要な研磨で塗装面を整えます。" },
      { title: "専用ブースで施工", text: "外気の影響を抑えた環境でコーティングします。" },
      { title: "お手入れをご案内", text: "施工後の洗車とメンテナンス方法をお伝えします。" },
    ],
    pricing: {
      columns: ["商品", "目安耐久", "新車 SS", "経年車 SS"],
      rows: [
        ["M’s COATING", "約1年", "27,500円", "44,000円"],
        ["M’s PRO", "約2年", "36,300円", "52,800円"],
        ["M’s DIA", "約3年", "52,800円", "69,300円"],
        ["G’ZOX class R", "約3年", "65,100円", "81,600円"],
        ["Hi-MOHS EDGE / GLOW", "3〜5年", "134,200円", "150,700円"],
      ],
      notes: [
        "表示はSSサイズの税込価格です。車種サイズにより料金が異なります。",
        "新車扱いは納車から1カ月以内です。",
        "M’s PRO／DIAは施工証明の継続に年1回のメンテナンスが必要です。",
        "コーティングは基本2泊3日の案内ですが、商品・車両状態で異なります。予約時にご確認ください。",
      ],
    },
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
