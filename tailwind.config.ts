import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#123C35",
          hover: "#0E2F29",
          light: "#1B564C",
        },
        background: {
          DEFAULT: "#F8F5EE",
        },
        accent: {
          DEFAULT: "#C9A45C",
          muted: "#C9A45C26", // 15% opacity for badge fills
        },
        text: {
          DEFAULT: "#171717",
          inverse: "#F8F5EE",
          muted: "#171717B3", // ~70% opacity
        },
        surface: {
          DEFAULT: "#FFFFFF",
        },
        border: {
          DEFAULT: "#E4DFD3",
        },
        whatsapp: {
          DEFAULT: "#25D366",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2rem, 1.2rem + 4vw, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-lg": ["clamp(1.625rem, 1.1rem + 2.2vw, 2.5rem)", { lineHeight: "1.2" }],
        "heading-md": ["clamp(1.25rem, 1rem + 1vw, 1.75rem)", { lineHeight: "1.25" }],
        "heading-sm": ["clamp(1.125rem, 1rem + 0.4vw, 1.25rem)", { lineHeight: "1.3" }],
        "body-lg": ["clamp(1rem, 0.95rem + 0.2vw, 1.125rem)", { lineHeight: "1.6" }],
        "body-md": ["0.9375rem", { lineHeight: "1.6" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.5" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        container: "1280px",
        prose: "65ch",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(18, 60, 53, 0.08)",
        lift: "0 16px 32px rgba(18, 60, 53, 0.12)",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};

export default config;
