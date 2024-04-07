// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        },
        boxShadow: {
            '3xl': '-13px 16px 9px -5px rgba(0,0,0,0.19),0px 8px 10px -6px rgba(0,0,0,0.1)'
        },
        colors: {
            'kashmir-blue': {
                '50': '#f6f7f9',
                '100': '#eceef2',
                '200': '#d5dbe2',
                '300': '#b0bbc9',
                '400': '#8595ab',
                '500': '#5e7087',
                '600': '#516178',
                '700': '#424f62',
                '800': '#394353',
                '900': '#333b47',
                '950': '#22272f',
            },
        },
        screens: {
            '3xl': '1800px',
        }
    },
},
  plugins: [
    typography,
    forms,
    aspectRatio,
    require('flowbite/plugin')
  ],
}