import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mycolor: '#DBE2F9',
        textcolor: "#141B2C",
        jobsTitleColor: "#181C20",
      },
      // my light and dark mode
      palette: {
        light: {
          mode: 'light',
          common: {
            black: '',
            white: '',
          },
          primary: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          secondary: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          error: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          warning: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          info: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          success: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          grey: {
            50: '',
            100: '',
            200: '',
            300: '',
            400: '',
            500: '',
            600: '',
            700: '',
            800: '',
            900: '',
            A100: '',
            A200: '',
            A400: '',
            A700: '',
          },
          text: {
            primary: '',
            secondary: '',
            disabled: '',
            divider: '',
          },
          background: {
            paper: '',
            default: '',
          },
          action: {
            active: '',
            hover: '',
            hoverOpacity: '',
            selected: '',
            selectedOpacity: '',
            disabled: '',
            disabledBackground: '',
            disabledOpacity: '',
            focus: '',
            focusOpacity: '',
            activatedOpacity: '',
          },
        },
        dark: {
          mode: 'dark',
          common: {
            black: '',
            white: '',
          },
          primary: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          secondary: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          error: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          warning: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          info: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          success: {
            main: '',
            light: '',
            dark: '',
            contrastText: '',
          },
          grey: {
            50: '',
            100: '',
            200: '',
            300: '',
            400: '',
            500: '',
            600: '',
            700: '',
            800: '',
            900: '',
            A100: '',
            A200: '',
            A400: '',
            A700: '',
          },
          text: {
            primary: '',
            secondary: '',
            disabled: '',
            divider: '',
          },
          background: {
            paper: '',
            default: '',
          },
          action: {
            active: '',
            hover: '',
            hoverOpacity: '',
            selected: '',
            selectedOpacity: '',
            disabled: '',
            disabledBackground: '',
            disabledOpacity: '',
            focus: '',
            focusOpacity: '',
            activatedOpacity: '',
          },
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      // my text
      typography: {
        '.m3-label-large': {
          '@apply font-roboto text-[14px] font-medium leading-[20px] tracking-[0.1px] text-left': {},
        },
        '.m3-label-medium': {
          '@apply font-roboto text-[12px] font-medium leading-[16px] tracking-[0.5px] text-left': {},
        },
        '.m3-label-small': {
          '@apply font-roboto text-[10px] font-medium text-left': {},
        },
        '.m3-headline-large': {
          '@apply font-roboto text-[32px] font-normal leading-[40px] text-left': {},
        },
        '.m3-headline-medium': {
          '@apply font-roboto text-[28px] font-normal leading-[36px] text-left': {},
        },
        '.m3-headline-small': {
          '@apply font-roboto text-[24px] font-normal leading-[32px] text-left': {},
        },
        '.m3-body-large': {
          '@apply font-roboto text-[16px] font-normal leading-[24px] tracking-[0.5px] text-left': {},
        },
        '.m3-body-medium': {
          '@apply font-roboto text-[14px] font-normal leading-[20px] tracking-[0.25px] text-left': {},
        },
        '.m3-body-small': {
          '@apply font-roboto text-[12px] font-normal leading-[16px] tracking-[0.4px] text-left': {},
        },
        '.m3-title-large': {
          '@apply font-roboto text-[22px] font-normal leading-[28px] text-left': {},
        },
        '.m3-title-medium': {
          '@apply font-roboto text-[16px] font-medium leading-[24px] tracking-[0.15px] text-left': {},
        },
        '.m3-title-small': {
          '@apply font-roboto text-[14px] font-medium leading-[20px] tracking-[0.1px] text-left': {},
        },
      },
      screens: {
        'xs': {'min': '0px', 'max': '539px'},
        'sm': {'min': '540px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1024px'},
        'lg': {'min': '1025px'},
      },
      backgroundImage: {
        'hero-bg-image': "url('/assets/hero.jpeg')",
      },
    },
  },
  plugins: [],
};
export default config;
