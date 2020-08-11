import { DefaultTheme } from 'styled-components'
import { IColor, IAvaliableColors } from '../types/theme'

const colorScheme: IAvaliableColors = {
  default: '#b2ebf2',
  primary: '#00bcd4',
  danger: '#dd2c00',
  warning: '#ffd36b',
  success: '#2fc4b2',
  muted: '#e0dede',
}

const availableSize: any = {
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
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
}

const theme: DefaultTheme = {
  borderRadius: 5,

  colors: {
    primary: '#00bcd4',
    danger: 'dd2c00',
  },

  setSize: (size: number) => {
    return availableSize[size]
  },
  setMargin: (margin: number) => {
    return availableSize[margin]
  },
  setPadding: (padding: number) => {
    return availableSize[padding]
  },
  setColor: (color: IColor) => {
    return colorScheme[color]
  },
}

export default theme
