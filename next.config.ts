import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/bwa-wadde" : "", // Replace with your GitHub repo name
  assetPrefix: process.env.NODE_ENV === "production" ? "/bwa-wadde/" : "",
};

export default nextConfig;
