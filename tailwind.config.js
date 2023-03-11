module.exports = {
  mode: 'jit',
  purge: [
    './dist/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/*',
    './index.html',
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
