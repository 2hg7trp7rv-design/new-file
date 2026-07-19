export const SITE = {
  name: "Remake Studio M’s",
  shortName: "M’s",
  description:
    "鳥取県米子市の純水手洗い洗車・磨き・カーコーティング専門店。店内でニコニコレンタカー米子久米町店の受付も行っています。",
  phone: "0859332060",
  phoneDisplay: "0859-33-2060",
  rentalPhone: "0859302528",
  rentalPhoneDisplay: "0859-30-2528",
  postalCode: "683-0824",
  address: "鳥取県米子市久米町270",
  hours: "9:00–18:00",
  closed: "毎週水曜・第2／第4火曜",
  rentalHours: "8:00–19:00",
  reserveUrl: "https://airrsv.net/remakestudioms/calendar",
  rentalUrl:
    "https://www.2525r.com/tottori/yonago/store-01537-001.html",
  instagramUrl: "https://www.instagram.com/remakestudioms/",
  mapUrl: "https://maps.google.com/?q=鳥取県米子市久米町270",
  mapEmbedUrl:
    "https://www.google.com/maps?q=鳥取県米子市久米町270&output=embed",
} as const;

export const MAIN_NAV = [
  { label: "サービス", href: "/#services" },
  { label: "コーティング", href: "/#coating" },
  { label: "レンタカー", href: "/mobility" },
  { label: "私たちについて", href: "/about" },
  { label: "アクセス", href: "/access" },
] as const;
