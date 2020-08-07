import 'styled-components'
import { IColor } from './types/styled'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: number

    colors?: {
      primary: string
      danger: string
    }

    getColor: (color: IColor) => string | undefined
  }
}
