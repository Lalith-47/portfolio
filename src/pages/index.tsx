/**
 * Home Page Component
 * 
 * Main landing page for Lalith's portfolio website featuring:
 * - Complete SEO optimization with meta tags and structured data
 * - OpenGraph and Twitter Card support for social media sharing
 * - Performance optimizations with preconnect and DNS prefetch
 * - Accessibility compliance and semantic HTML
 * - Integration of all portfolio sections
 * 
 * @author Lalith
 * @version 1.0.0
 */

import Head from "next/head";

/**
 * Site configuration object
 * Centralized SEO and metadata configuration for easy maintenance
 */
const siteConfig = {
  title: "Lalith - CSE Student & Developer",
  description:
    "Portfolio of Lalith - A passionate Computer Science and Engineering student exploring open-source, Linux, and cloud technologies. Experienced in Next.js, React, Python, and Microsoft Azure.",
  url: "https://lalith-portfolio.azurestaticapps.net",
  image: "/og-image.png",
  author: "Lalith",
  keywords:
    "Lalith, Computer Science, Engineering, Developer, Portfolio, Next.js, React, Python, Linux, Azure, Open Source, Web Development",
};

// Import all portfolio section components
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

/**
 * Home Page Component
 * 
 * Main entry point for the portfolio website.
 * Combines all sections with comprehensive SEO setup.
 */
export default function Home() {
  /**
   * Structured data for SEO and social media
   * Follows Schema.org Person specification for better search engine understanding
   */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lalith",
    jobTitle: "Computer Science and Engineering Student",
    description:
      "Passionate Computer Science and Engineering student exploring open-source, Linux, and cloud technologies",
    url: siteConfig.url,
    sameAs: [
      "https://github.com/Lalith-47/",
      "https://www.linkedin.com/in/lalithkumarm143/",
    ],
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "Python",
      "Linux",
      "Microsoft Azure",
      "Open Source",
      "Computer Science",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Computer Science and Engineering",
    },
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{siteConfig.title}</title>
        <meta name="title" content={siteConfig.title} />
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords} />
        <meta name="author" content={siteConfig.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />

        {/* Canonical URL */}
        <link rel="canonical" href={siteConfig.url} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />

        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lalith's Portfolio" />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta
          property="og:image"
          content={`${siteConfig.url}${siteConfig.image}`}
        />
        <meta
          property="og:image:alt"
          content="Lalith's Portfolio - Computer Science Student"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.title} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta
          name="twitter:image"
          content={`${siteConfig.url}${siteConfig.image}`}
        />
        <meta
          name="twitter:image:alt"
          content="Lalith's Portfolio - Computer Science Student"
        />
        <meta name="twitter:creator" content="@lalith" />
        <meta name="twitter:site" content="@lalith" />

        {/* Additional Meta Tags */}
        <meta property="profile:first_name" content="Lalith" />
        <meta property="profile:username" content="lalith" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>

      <main>
        {/* All sections will be rendered here by the Layout component */}
      </main>
    </>
  );
}
