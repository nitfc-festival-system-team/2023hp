/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 画像の最適化を無効にする
  },
};

module.exports = nextConfig;
