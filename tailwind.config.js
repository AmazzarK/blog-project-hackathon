/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      fontFamily: {
        // 'sans' is typically the default for most body text
       // Add your custom fonts here
        'my-custom-font': ['Roboto', 'sans-serif'], // 'Roboto' is the name from Google Fonts
        'heading-font': ['Playfair Display', 'serif'], // Another example
      },
      fontFamily: {
        // Custom font family for headings
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

