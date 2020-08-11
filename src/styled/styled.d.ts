import 'styled-components'
import { IColor } from './types/styled'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: number

    colors?: {
      primary: string
      danger: string
      [x: string]: string
    }

    setSize: (size: number) => string | undefined
    setMargin: (margin: number) => string | undefined
    setPadding: (padding: number) => string | undefined
    setColor: (color: IColor) => string | undefined
  }
}
