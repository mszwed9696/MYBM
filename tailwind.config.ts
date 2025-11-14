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
      },
      colors: {
        'newspaper': {
          'white': '#FFFFFF',
          'cream': '#F5F5DC',
          'light-gray': '#E5E5E5',
          'gray': '#CCCCCC',
          'medium-gray': '#999999',
          'dark-gray': '#666666',
          'charcoal': '#333333',
          'black': '#000000',
          'ink': '#1a1a1a',
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
