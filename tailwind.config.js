/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    screens: {
      sm:"480px",
      md:"768px",
      lg:"992px",
      xl:"1200px",
    },
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        hero: "url('https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80')",
      },
      colors: {
        'dark-blue': '#5651e5',
        'light-blue': '#709dff',
      },
    },
  },
  plugins: [],
}

