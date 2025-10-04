/**
 * Tailwind CSS Configuration
 *
 * Custom configuration for Lalith's portfolio website featuring:
 * - Glassmorphism design system with custom colors
 * - Inter and Poppins font integration
 * - Custom spacing and screen breakpoints
 * - Production optimizations for smaller bundle size
 *
 * @author Lalith
 * @version 1.0.0
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        glass: {
          light: "rgba(255, 255, 255, 0.1)",
          medium: "rgba(255, 255, 255, 0.2)",
          dark: "rgba(0, 0, 0, 0.1)",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        typewriter: "typewriter 2s steps(40) forwards",
        blink: "blink 1s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(14, 165, 233, 0.5)" },
          to: { boxShadow: "0 0 30px rgba(14, 165, 233, 0.8)" },
        },
        typewriter: {
          to: { left: "100%" },
        },
        blink: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      // Enhanced responsive breakpoints for better device coverage
      screens: {
        xs: "475px", // Extra small devices (large phones)
        sm: "640px", // Small devices (landscape phones, small tablets)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (laptops)
        xl: "1280px", // Extra large devices (desktops)
        "2xl": "1536px", // 2X large devices (large desktops)
        // Custom breakpoints for specific use cases
        mobile: { max: "767px" }, // Mobile-first approach
        tablet: { min: "768px", max: "1023px" }, // Tablet range
        desktop: { min: "1024px" }, // Desktop and above
      },
      // Enhanced spacing scale for better responsive design
      spacing: {
        18: "4.5rem", // 72px
        88: "22rem", // 352px
        104: "26rem", // 416px
        112: "28rem", // 448px
        128: "32rem", // 512px
        144: "36rem", // 576px
      },
      // Responsive font sizes with better scaling
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        // Responsive display sizes
        "display-sm": ["2.5rem", { lineHeight: "3rem" }],
        "display-md": ["3.5rem", { lineHeight: "4rem" }],
        "display-lg": ["4.5rem", { lineHeight: "5rem" }],
        "display-xl": ["6rem", { lineHeight: "6rem" }],
      },
      // Container queries for component-based responsive design
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "3rem",
          "2xl": "4rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px", // Slightly smaller max-width for better readability
        },
      },
    },
  },
  plugins: [],
  // Optimize for production
  ...(process.env.NODE_ENV === "production" && {
    corePlugins: {
      // Disable unused core plugins for smaller bundle
      preflight: true,
      container: false,
      accessibility: true,
      alignContent: true,
      alignItems: true,
      alignSelf: true,
      animation: true,
      appearance: false,
      backdropBlur: true,
      backdropBrightness: false,
      backdropContrast: false,
      backdropGrayscale: false,
      backdropHueRotate: false,
      backdropInvert: false,
      backdropOpacity: true,
      backdropSaturate: false,
      backdropSepia: false,
      backgroundAttachment: false,
      backgroundClip: true,
      backgroundColor: true,
      backgroundImage: true,
      backgroundOpacity: true,
      backgroundPosition: true,
      backgroundRepeat: false,
      backgroundSize: true,
      blur: true,
      borderCollapse: false,
      borderColor: true,
      borderOpacity: true,
      borderRadius: true,
      borderStyle: true,
      borderWidth: true,
      boxShadow: true,
      boxSizing: true,
      brightness: false,
      clear: false,
      contrast: false,
      cursor: true,
      display: true,
      divideColor: false,
      divideOpacity: false,
      divideStyle: false,
      divideWidth: false,
      dropShadow: false,
      fill: false,
      filter: false,
      flex: true,
      flexDirection: true,
      flexGrow: true,
      flexShrink: true,
      flexWrap: true,
      float: false,
      fontFamily: true,
      fontSize: true,
      fontSmoothing: true,
      fontStyle: true,
      fontVariantNumeric: false,
      fontWeight: true,
      gap: true,
      gradientColorStops: true,
      grayscale: false,
      gridAutoColumns: false,
      gridAutoFlow: false,
      gridAutoRows: false,
      gridColumn: false,
      gridColumnEnd: false,
      gridColumnStart: false,
      gridRow: false,
      gridRowEnd: false,
      gridRowStart: false,
      gridTemplateColumns: true,
      gridTemplateRows: false,
      height: true,
      hueRotate: false,
      inset: true,
      invert: false,
      isolation: false,
      justifyContent: true,
      justifyItems: false,
      justifySelf: false,
      letterSpacing: true,
      lineHeight: true,
      listStylePosition: false,
      listStyleType: false,
      margin: true,
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true,
      mixBlendMode: false,
      objectFit: false,
      objectPosition: false,
      opacity: true,
      order: false,
      outline: true,
      overflow: true,
      overscrollBehavior: false,
      padding: true,
      placeContent: false,
      placeItems: false,
      placeSelf: false,
      placeholderColor: true,
      placeholderOpacity: true,
      pointerEvents: true,
      position: true,
      resize: true,
      ringColor: true,
      ringOffsetColor: true,
      ringOffsetWidth: true,
      ringOpacity: true,
      ringWidth: true,
      rotate: false,
      saturate: false,
      scale: false,
      sepia: false,
      skew: false,
      space: true,
      stroke: false,
      strokeWidth: false,
      tableLayout: false,
      textAlign: true,
      textColor: true,
      textDecoration: false,
      textDecorationColor: false,
      textDecorationStyle: false,
      textDecorationThickness: false,
      textIndent: false,
      textOpacity: true,
      textOverflow: false,
      textTransform: false,
      textUnderlineOffset: false,
      transform: true,
      transformOrigin: false,
      transitionDelay: false,
      transitionDuration: true,
      transitionProperty: true,
      transitionTimingFunction: true,
      translate: false,
      userSelect: false,
      verticalAlign: false,
      visibility: false,
      whitespace: false,
      width: true,
      wordBreak: false,
      zIndex: true,
    },
  }),
};
