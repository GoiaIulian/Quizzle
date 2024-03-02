import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  colors: {
    primary: ['#FE5F55', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63'],
    secondary: ['#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63', '#EA6B63'],
    text: ['#FEF6C9', '#D9D9D9', '#FEF6C9', '#FEF6C9', '#FEF6C9', '#FEF6C9', '#FEF6C9', '#FEF6C9', '#FEF6C9', '#FEF6C9'],
    dark: ['#1B2021', '#272E30', '#323B3E', '#1B2021', '#1B2021', '#1B2021', '#1B2021', '#1B2021', '#1B2021', '#1B2021'],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Poppins, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
})