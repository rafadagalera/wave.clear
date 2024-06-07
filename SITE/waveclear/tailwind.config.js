module.exports = {
  darkMode: 'class',
  theme: {
    extend: {

      backgroundImage: {
        "bg-home" : "url(src/assets/oce.jpg)"
      },
      colors: {
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554"
        },
        'bg': '#03223f',
        'nav-bg': '#038bbb',
        'button-blue': '#0B7DE5',
        'primary-blue': '#0316C',
        'secondary-blue': '#1C19D3',
        'tertiary-blue': '#3548AF',
        'quaternary-blue': '#152370',
        'primary-white': '#F0F0F0',
        'primary-gray': '#808080',
        'primary-black': '#000000',
        'primary-lightblue': '#9ACEEB'
      },
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif'],
        'b16': ["B612", 'sans-serif'],
        'body': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
