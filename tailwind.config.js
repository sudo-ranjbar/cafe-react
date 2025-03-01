/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

      colors: {
        "brown": {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        }
      },

      boxShadow: {
        "normal": "0px 1px 10px rgba(0, 0, 0, 0.05)",
        "lgoveral": "0 7px 15px -3px rgb(0 0 0 / 0.1), 0 -7px 15px -3px rgb(0 0 0 / 0.1)",
        // "dark": "0px 1px 10px rgba(0, 0, 0, 0.05)"
      },

      borderRadius: {
        "4xl": "2rem"
      },

      fontFamily: {
        "Vazir": "Vazir",
        "VazirLight": "Vazir Light",
        "VazirMedium": "Vazir Medium",
        "VazirBold": "Vazir Bold",
        "VazirThin": "Vazir Thin",
      },

      letterSpacing: {
        "tightest": "-0.065em"
      },

      spacing: {
        "30": "7.5rem",
        "25": "6.25rem",
        "50": "12.5rem",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625rem"
        }
      },

      backgroundImage: {
        "home-desktop": "url(../img/headerBgDesktop.webp)",
        "home-mobile": "url(../img/headerBgMobile.webp)"
      },

    },

    screens: {
      'xs': '350px',
      // => @media (min-width: 480px) { ... }

      'sm': '580px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover')
    }
  ],
}

