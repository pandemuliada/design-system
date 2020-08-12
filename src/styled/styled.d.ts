import 'styled-components'
import { IFontFamily, IColor, IFontSize } from '../types/theme'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: number

    colors?: {
      primary: string
      danger: string
      [x: string]: string
    }

    setFontFamily: (font: IFontFamily) => string | undefined
    setFontSize: (font: IFontSize) => string | undefined
    setSize: (size: number) => string | undefined
    setMargin: (margin: number) => string | undefined
    setPadding: (padding: number) => string | undefined
    setColor: (color: IColor) => string | undefined
  }
}
