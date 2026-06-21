import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: "#FFF8F0",
          100: "#FFEDCC",
          200: "#FFD699",
          300: "#FFBE66",
          400: "#FFA633",
          500: "#FF8C00",
          600: "#FF6B00",
          700: "#CC5500",
          800: "#993F00",
          900: "#662A00",
        },
        gold: {
          50: "#FFFDF0",
          100: "#FFF8CC",
          200: "#FFF099",
          300: "#FFE766",
          400: "#FFDD33",
          500: "#D4AF37",
          600: "#B8960C",
          700: "#8B7200",
          800: "#5C4C00",
          900: "#2E2600",
        },
        sacred: {
          red: "#8B0000",
          maroon: "#4A0000",
          cream: "#FFFAF5",
          light: "#FFF8F0",
        },
        divine: {
          dark: "#1A0800",
          brown: "#3D1C02",
          muted: "#6B4C2A",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        marquee: "marquee 30s linear infinite",
        "whatsapp-ping": "whatsapp-ping 2s ease-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        glow: "glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "whatsapp-ping": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "75%, 100%": { transform: "scale(1.8)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5", filter: "blur(20px)" },
          "50%": { opacity: "1", filter: "blur(30px)" },
        },
      },
      backgroundImage: {
        "divine-gradient":
          "linear-gradient(135deg, #1A0800 0%, #3D1C02 40%, #6B1A00 70%, #8B2500 100%)",
        "hero-overlay":
          "linear-gradient(to bottom, rgba(26,8,0,0.85) 0%, rgba(61,28,2,0.7) 40%, rgba(139,37,0,0.5) 80%, rgba(255,140,0,0.3) 100%)",
        "saffron-gradient": "linear-gradient(135deg, #FF8C00 0%, #FF6B00 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        "shimmer-gradient":
          "linear-gradient(105deg, transparent 40%, rgba(255,215,0,0.3) 50%, transparent 60%)",
      },
      boxShadow: {
        "saffron-glow": "0 0 30px rgba(255,107,0,0.35), 0 0 60px rgba(255,107,0,0.15)",
        "gold-glow": "0 0 25px rgba(212,175,55,0.4), 0 0 50px rgba(212,175,55,0.2)",
        "card-hover": "0 25px 60px rgba(0,0,0,0.3), 0 0 40px rgba(212,175,55,0.1)",
        premium: "0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(212,175,55,0.2)",
        "whatsapp-glow": "0 0 0 0 rgba(37,211,102,0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
