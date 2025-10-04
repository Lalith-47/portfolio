/**
 * Next.js Configuration
 * 
 * Optimized configuration for Lalith's portfolio website
 * - Static export for Azure Static Web Apps deployment
 * - Image optimization settings
 * - Performance and build optimizations
 * 
 * @author Lalith
 * @version 1.0.0
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
