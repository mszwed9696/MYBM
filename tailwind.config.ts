import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'newspaper': ['Georgia', 'Times New Roman', 'serif'],
        'headline': ['Impact', 'Arial Black', 'sans-serif'],
        'cartoon': ['"Bangers"', '"Londrina Solid"', '"Permanent Marker"', 'Impact', 'sans-serif'],
        'comic': ['"Comic Sans MS"', '"Comic Neue"', 'cursive'],
        'mobster': ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        'cartoon': {
          // Grayscale Palette
          'white': '#FFFFFF',
          'cream': '#F5F5F5',        // Light gray background
          'sepia': '#E5E5E5',        // Light gray
          'tan': '#CCCCCC',          // Medium-light gray
          'brown': '#999999',        // Medium gray

          // Grayscale Primaries
          'red': '#000000',          // Black
          'blue': '#666666',         // Dark gray
          'yellow': '#CCCCCC',       // Light gray
          'green': '#555555',        // Charcoal gray

          // Grayscale Accents
          'gold': '#888888',         // Medium gray
          'burgundy': '#333333',     // Dark charcoal
          'olive': '#777777',        // Gray

          // Newspaper Elements
          'ink': '#000000',          // Pure black
          'newsprint': '#FAFAFA',    // Off-white
          'halftone': '#AAAAAA',     // Mid-gray

          // Pure values
          'black': '#000000',
        },
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
    },
  },
  plugins: [],
};
export default config;
