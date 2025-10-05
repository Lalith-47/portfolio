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
  // Static export for GitHub Pages and Azure Static Web Apps deployment
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Environment variables for local testing
  env: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID || "service_hxaf188",
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID || "template_csic1ln",
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY || "u0Q7pzBoYs7QFT9e9",
  },
};

module.exports = nextConfig;
