import { DefaultTheme } from 'styled-components'
import { 
  IColor, 
  IFontFamily, 
  IFontSize 
} from '../types/theme'
import { 
  availableFonts, 
  availableSizes, 
  colorSchemes, 
  availableFontSizes 
} from '../config/theme'

const theme: DefaultTheme = {
  borderRadius: 5,

  colors: {
    primary: '#00bcd4',
    danger: 'dd2c00',
  },
  
  setFontFamily: (font: IFontFamily) => {
    return availableFonts[font]
  },
  setFontSize: (size: IFontSize) => {
    return availableFontSizes[size]
  },
  setSize: (size: number) => {
    return availableSizes[size]
  },
  setMargin: (margin: number) => {
    return availableSizes[margin]
  },
  setPadding: (padding: number) => {
    return availableSizes[padding]
  },
  setColor: (color: IColor) => {
    return colorSchemes[color]
  },
}

export default theme
