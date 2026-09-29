import type { NextConfig } from 'next';
const staticPreview = process.env.HOM_STATIC_EXPORT === '1';
const nextConfig: NextConfig = {
  devIndicators: false,
  ...(staticPreview ? { output: 'export', trailingSlash: true, images: { unoptimized: true } } : {}),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
};
export default nextConfig;
