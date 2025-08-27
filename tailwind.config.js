/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Personaliza el color 'green'
        green: {
          DEFAULT: "#008556", // Este es el verde que se aplicará al usar `bg-green` o `text-green`
          light: "#4caf89", // Puedes agregar otras variantes de `green` si quieres
          dark: "#005f3c",
        },
        blue: {
          DEFAULT: "#1226aa", // Este es el verde que se aplicará al usar `bg-green` o `text-green`
          light: "#3f51d1", // Puedes agregar otras variantes de `green` si quieres
          dark: "#0a1970",
        },
      },
    },
  },
  plugins: [],
};
