/**
 * Next.js Configuration for Local Testing
 *
 * This config enables API routes for local testing of the contact form.
 * Use this config when testing locally with: npm run dev
 *
 * @author Lalith
 * @version 1.0.0
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Remove 'output: export' to enable API routes for local testing
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Environment variables for local testing
  env: {
    EMAILJS_SERVICE_ID: "service_sbi2ycf",
    EMAILJS_TEMPLATE_ID: "template_csic1ln",
    EMAILJS_PUBLIC_KEY: "u0Q7pzBoYs7QFT9e9",
  },
};

module.exports = nextConfig;
