/** @type {import('tailwindcss').Config} */
module.exports = {
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
        spacing: {
            'max-container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
        },
      },
    },
    plugins: [],
  }