const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem !important',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    colors: {
      ...colors,
    },
    customForms: theme => ({
      default: {
        checkbox: {
          icon: iconColor => `<svg fill="${iconColor}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>`,
          iconColor: theme('colors.green.556'),
          '&:hover': {
            iconColor: theme('colors.gray.700'),
          }
        },
      }
    }),
    extend: {
      colors: {
        'primary1': '#FFB900',
        'primary2': '#F77E0B',
        'primary3': '#374053',
        'secondary1': '#969CAA',
        'secondary2': '#F4F5F6',
        'green-556': '#5cd5c4',
        'gray-111': '#f5f5f5',
        'gray-112': '#fcfcfc',
        'reed-301': 'rgba(245,81,87,.2)',
        'reed-302': '#f55157',
        'gray-557': '#888',
        'dark-green': '#49ada0',
        'dark-brown': 'rgb(82 82 82)',
      },
      width: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
        "800-px": "800px",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
        "800-px": "800px",
      },
      maxHeight: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "450-px": "450px",
        "500-px": "500px",
        "600-px": "600px",
      },
      fontSize: {
        "-10-px": "10px",
      },
      padding: {
        "-10-px": "10px",
        "14-px": "14px",
        "15-px": "15px",
        "16-px": "16px",
        "18-px": "18px",
        "22-px": "22px",
        "50-px": "50px",
        "53-px": "53px",
        "54-px": "54px",
        "78-px": "78px",
        "90-px": "90px",
        "122-px": "122px",
        sm: "14px",
      },
      margin: {
        "2-px": "2px",
        "5-px": "5px",
        "6-px": "6px",
        "10-px": "10px",
        "15-px": "15px",
        "16-px": "16px",
        "18-px": "18px",
        "50-px": "50px",
        "54-px": "54px",
        "70-px": "70px",
        "122-px": "122px",
        sm: "14px",
      },
      lineHeight: {
        '12': '50px',
        '13': '55px',
        '14': '60px',
        '15': '65px',
        '16': '70px',
      },
      inset: {
        "10-px": "10px",
        "15-px": "15px",
        "5-px": "-5px"
      }
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
    },
  },
  plugins: [],
}
