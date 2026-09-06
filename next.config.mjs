/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true, // required for static export — Next.js Image Optimization API is not available
  },
  experimental: {
    optimizeCss: true, // inline critical CSS & defer non-critical to eliminate render-blocking
  },
};

export default nextConfig;

