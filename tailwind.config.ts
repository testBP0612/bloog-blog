import type { Config } from 'tailwindcss';

const colors = {
  primary: {
    100: '#E1F2FD',
    200: '#B3D8FB',
    300: '#85BEF9',
    400: '#57A4F7',
    500: '#4A90E2',
    600: '#3073B1',
    700: '#164680',
    800: '#001A4F',
    900: '#00082A',
  },
  secondary: {
    100: '#E5F9F4',
    200: '#C1F2E3',
    300: '#9DEBD2',
    400: '#79E3C1',
    500: '#A8E6CF',
    600: '#6DB8A1',
    700: '#328A73',
    800: '#005C45',
    900: '#002E17',
  },
  tertiary: {
    100: '#FFF5ED',
    200: '#FFEBDB',
    300: '#FFE0C9',
    400: '#FFD6B7',
    500: '#FFD3B6',
    600: '#CFA88D',
    700: '#A07D64',
    800: '#70523B',
    900: '#402712',
  },
  quaternary: {
    100: '#FFF1EE',
    200: '#FFE3DD',
    300: '#FFD5CC',
    400: '#FFC7BB',
    500: '#FFAAA5',
    600: '#CF7D7A',
    700: '#A0504F',
    800: '#702324',
    900: '#401200',
  },
  darkText: {
    100: '#AAB7BF',
    200: '#85939E',
    300: '#5F6F7D',
    400: '#3A4B5C',
    500: '#2C3E50',
    600: '#1F2A35',
    700: '#12161A',
    800: '#05080F',
    900: '#000204',
  },
  lightText: {
    100: '#FFFFFF',
    200: '#FAFAFA',
    300: '#F0F0F0',
    400: '#E6E6E6',
    500: '#F5F5F5',
    600: '#C4C4C4',
    700: '#939393',
    800: '#626262',
    900: '#313131',
  },
};


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        tertiary: colors.tertiary,
        quaternary: colors.quaternary,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        darkBackground: "url('/images/dark-bg.svg')",
        lightBackground: "url('/images/light-bg.svg')",
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              fontWeight: 'bold',
              color: colors.darkText,
            },
            h2: {
              fontWeight: 'bold',
              color: colors.darkText,
            },
            h3: {
              fontWeight: 'semi-bold',
              color: colors.darkText,
            },
            h4: {
              fontWeight: 'semi-bold',
              color: colors.darkText,
            },
            a: {
              color: colors.primary,
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
            'ul > li::marker': {
              color: colors.darkText[500],
            },
            'ol > li::marker': {
              color: colors.darkText[500],
            },
            strong: {
              color: colors.darkText[500],
            },
            code: {
              backgroundColor: colors.lightText[400],
              padding: '0.2em 0.4em',
              borderRadius: '4px',
              color: colors.darkText[400],
              fontWeight: '400',
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            pre: {
              backgroundColor: colors.darkText,
            },
            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: colors.secondary[700],
            },
            details: {
              color: colors.tertiary,
            },
            hr: {
              borderColor: colors.quaternary,
            },
            p: {
              lineHeight: '1.6',
            }
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            h1: {
              color: colors.lightText,
            },
            h2: {
              color: colors.lightText,
            },
            h3: {
              color: colors.lightText,
            },
            h4: {
              color: colors.lightText,
            },
            a: {
              color: colors.lightText,
              '&:hover': {
                color: theme('colors.secondary.400'),
              },
            },
            'ul > li::marker': {
              color: colors.lightText[500],
            },
            'ol > li::marker': {
              color: colors.lightText[500],
            },
            strong: {
              color: colors.lightText[500],
            },
            code: {
              backgroundColor: theme('colors.gray.700'),
              color: colors.lightText[400],
            },
            pre: {
              backgroundColor: theme('colors.gray.700'),
            },
            blockquote: {
              color: theme('colors.gray.200'),
              borderLeftColor: colors.secondary[200],
            },
            details: {
              color: colors.quaternary,
            },
            hr: {
              borderColor: colors.tertiary,
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
