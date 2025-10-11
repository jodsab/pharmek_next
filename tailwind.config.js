/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Tus colores principales
        green: {
          DEFAULT: "#008556",
          light: "#4caf89",
          dark: "#005f3c",
        },
        blue: {
          DEFAULT: "#1226aa",
          light: "#3f51d1",
          dark: "#0a1970",
        },

        // 🎨 Sistema shadcn/ui (con fallback a tus colores)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#008556", // usa tu verde como base
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1226aa", // usa tu azul como secundario
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#4caf89", // tono verde claro
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f5f5f5",
          foreground: "#737373",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-myriad)", "sans-serif"],
        futura: ["var(--font-futura)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
