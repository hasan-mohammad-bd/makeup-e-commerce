/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        body: ['var(--font-body)', 'sans-serif'],
        title: ['var(--font-title)', 'sans-serif']
      },
      screens:{
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      container:{  
        center: true,
        padding: "1rem"
      },
      colors: {
        primary: "#F99104",
        slate: {
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          700: "#334155",
          900: "#0F172A"
        }
      }
    },
  },
  plugins: [],
}
