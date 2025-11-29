/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cloudflare Pages で静的サイトとして配信する
  output: "export",
};

export default nextConfig;
