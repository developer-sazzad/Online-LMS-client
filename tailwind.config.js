module.exports = {
    darkMode: 'class', // Make sure this stays
    important: true,
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark"], // explicitly define supported themes
    },
  };
  