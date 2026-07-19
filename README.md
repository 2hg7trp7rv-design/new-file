# Remake Studio M’s

鳥取県米子市の純水手洗い洗車・磨き・カーコーティング専門店、Remake Studio M’sの公式サイトです。

## 構成

- Next.js App Router
- TypeScript
- 静的エクスポート対応
- レスポンシブデザイン

## 開発

```bash
npm install
npm run dev
```

## 確認

```bash
npm run check
npm start
```

`npm run check` は型、プロダクションビルド、生成HTMLの内部リンク・ID・画像alt・基本SEOを確認します。

## 公開前ゲート

現在のVercel版はレビュー用のため、HTMLとHTTPヘッダーの両方で `noindex` にしています。公式ドメイン切替前に次を完了し、`src/app/layout.tsx` と `vercel.json` の `noindex` を外してください。

- 料金、営業時間、休業日、代車・レンタカー条件の店舗責任者確認
- `docs/asset-provenance.md` にある写真・車両・人物の二次利用許諾確認
- 旧URL一覧と301リダイレクト、ニュース・施工事例の移行方針決定
- GA4 / Search Consoleの設定とプライバシー表示の最終確認
- iPhone / Android実機での予約、電話、地図、レンタカー導線確認
