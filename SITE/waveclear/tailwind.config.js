module.exports = {
  theme: {
    colors:{
      'bg': '#129FEE',
      'nav-bg': 'rgb(3, 22, 192, 0.35)',
      'button-blue': '#B7DE5',
      'primary-blue': '#0316C0',
      'secondary-blue': '#1C19D3',
      'tertiary-blue': '#3548AF',
      'quaternary-blue': '#152370',
      'primary-white': '#F0F0F0',
    },
    extend: {
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
