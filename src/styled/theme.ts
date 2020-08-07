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

const theme: DefaultTheme = {
  borderRadius: 5,

  colors: {
    primary: '#00bcd4',
    danger: 'dd2c00',
  },

  getColor: (color: IColor) => {
    return colorScheme[color]
  },
}

export default theme
