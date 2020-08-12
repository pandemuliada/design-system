import { IAvaliableColors, IAvailableFonts, IAvailableFontSizes } from "../types/theme"

export const colorSchemes: IAvaliableColors = {
  default: '#333',
  primary: '#00bcd4',
  danger: '#dd2c00',
  warning: '#ffd36b',
  success: '#2fc4b2',
  muted: '#e0dede',
}

export const availableSizes: { [x:number]: string } = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  13: '3.25rem',
  14: '3.5rem',
  15: '3.75rem',
  16: '4rem',
  17: '4.25rem',
  18: '4.5rem',
  19: '4.75rem',
  20: '5rem',
  21: '5.25rem',
  22: '5.5rem',
  23: '5.75rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
}

export const availableFonts: IAvailableFonts = {
  default: 'Open Sans, sans-serif',
  poppins: 'Poppins, sans-serif',
}

export const availableFontSizes: IAvailableFontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem',
}