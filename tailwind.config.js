const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')
const _ = require('lodash')

module.exports = {
  prefix: 'tw-',
  important: true,
  purge: [
    "./resources/views/**/*.pug",
    "./resources/sass/**/*.sass",
    "./resources/js/**/*.js",
    "./resources/js/**/*.jsx",
  ],
  theme: {
    rotate: {
      '1/4': '90deg',
      '1/2': '180deg',
      '3/4': '270deg',
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: [".70rem", "1rem"],
      },
      width: {
        112: "28rem",
      },
      height: {
        128: "32rem",
      },
      translate: {
        112: "28rem",
        "-112": "-28rem",
      },
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      cursor: {
        crosshair: "crosshair",
      },
      colors: {
        "light-grayish-yellow": "rgb(236,235,225)",
        "grayish-blue": "rgb(59, 88, 111)",
        primary: {
          50: "#e5f7f7",
          100: "#cceff0",
          200: "#99e0e2",
          300: "#66d1d3",
          400: "#32c2c5",
          500: "#00b3b7",
          600: "#00a1a4",
          700: "#008f92",
          800: "#00595b",
          900: "#004749",
        },
        slate: {
          50: "#d3dcde",
          100: "#bdcace",
          200: "#92a7ae",
          300: "#66848d",
          400: "#3a616d",
          500: "#25505d",
          600: "#214853",
          700: "#1d404a",
          800: "#193841",
          900: "#12282e",
        },
        process: {
          50: "#FCEDD0",
          100: "#F9DCA2",
          200: "#F7CB74",
          300: "#F5C25D",
          400: "#F3B12F",
          500: "#f2a918",
          600: "#D99815",
          700: "#C18713",
          800: "#79540C",
          900: "#604309",
        },
        visualise: {
          50: "#e7efbe",
          100: "#d8e594",
          200: "#d0e07e",
          300: "#c8db69",
          400: "#b8d13e",
          500: "#b1cc29",
          600: "#9fb724",
          700: "#7b8e1c",
          800: "#586614",
          900: "#353d0c",
        },
        replace: {
          50: "#D0F3FA",
          100: "#B9EDF7",
          200: "#8BE1F2",
          300: "#5CD5ED",
          400: "#2EC9E8",
          500: "#17c3e6",
          600: "#14AFCF",
          700: "#129CB8",
          800: "#0B6173",
          900: "#063A45",
        },
        analyse: {
          50: "#E4E0F9",
          100: "#CAC1F4",
          200: "#B0A2EF",
          300: "#9683EA",
          400: "#8973E7",
          500: "#7c64e5",
          600: "#6F5ACE",
          700: "#5646A0",
          800: "#3D3272",
          900: "#251E44",
        },
      },
    },
  },
  variants: {
    customPlugin: ['responsive', 'hover'],
    borderColor: ["responsive", "hover", "focus", "focus-within"],
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },

  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      const screens = theme('screens', {})

      const mediaQueries = _.map(screens, width => {
        return {
          [`@media (min-width: ${width})`]: {
            '.container': {
              'max-width': width,
            },
          },
        }
      })

      addComponents([
        { '.container': { width: '100%' } },
        ...mediaQueries,
      ])
    }),
    plugin(function({ addUtilities, theme, e }) {
      const rotateUtilities = _.map(theme('rotate'), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`
          }
        }
      })

      addUtilities(rotateUtilities)
    }),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    }), 
    plugin(function ({ addComponents }) {
      const buttons = {
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600",
        },
        ".btn-blue": {
          backgroundColor: "#3490dc",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#2779bd",
          },
        },
        ".btn-red": {
          backgroundColor: "#e3342f",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#cc1f1a",
          },
        },
      };

      addComponents(buttons);
    }),
  ],
};
