/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif'],
        Courier: ['Courier', 'sans-serif'],
       },
    },
  },
  plugins: [],
}
