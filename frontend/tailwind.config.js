/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "biblioteca-green": "#97bf45",
        "biblioteca-red": "#ec6a0d",
        "biblioteca-blue": "#00adb5",
        "biblioteca-purple": "#b73386",
        "biblioteca-yellow": "#f9ba00",
        "foreground": "#3c3c3b"
      }
    },
  },
  plugins: [],
}

