export type IColor = 'default' | 'primary' | 'danger' | 'warning' | 'success' | 'muted'
export type IAvaliableColors = {
  default: string
  primary: string
  danger: string
  warning: string
  success: string
  muted: string
  [x: string]: string
}

export type IFontFamily = 'default' | 'poppins'
export type IAvailableFonts = {
  default: string
  [x: string]: string
}

export type IFontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type IFontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
export type IAvailableFontSizes = {
  xs: string
  [x: string]: string
}