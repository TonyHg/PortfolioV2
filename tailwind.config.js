module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        main: 'var(--main)',
        background: 'var(--background)',
        header: 'var(--header)',
        accent: 'var(--accent)',
        'dark-primary': 'var(--dark-primary)',
        'dark-secondary': 'var(--dark-secondary)',
        'dark-background': 'var(--dark-background)',
        'dark-accent': 'var(--dark-accent)',
      },
      boxShadow: {
        navbar: 'rgba(120, 126, 154, 0.81) 0px -6px 44px -17px',
      },
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    container: {
      padding: '6rem',
    },
  },
  plugins: [],
}
