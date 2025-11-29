/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cloudflare Pages で静的サイトとしてホストするための設定
  output: "export",
};

export default nextConfig;
