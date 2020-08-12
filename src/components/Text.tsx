import styled from 'styled-components'
import { IFontFamily, IColor, IFontWeight, IFontSize } from '../types/theme'
import { IUtils } from '../types/general'

interface ITextProps extends IUtils {
  as: string
  size: IFontSize
  color: IColor
  fontFamily: IFontFamily
  fontWeight: IFontWeight
  fontSize: string
  variantColor?: string
  leading: number
  tracking: number
  uppercase: boolean
  italic: boolean
}

const Text = styled.p.attrs((props: ITextProps) => ({
  ...props,
  as: props.as || 'p',
  size: props.size || 'base',
  color: props.color || 'default',
  fontWeight: props.fontWeight || 400,
  fontFamily: props.fontFamily || 'default',
}))`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ theme, fontFamily }) => theme.setFontFamily(fontFamily)};
  color: ${({ theme, color, variantColor }) => variantColor ? variantColor : theme.setColor(color)};
  margin-top: ${({ theme, mt }) => theme.setMargin(mt)};
  margin-right: ${({ theme, mr }) => theme.setMargin(mr)};
  margin-left: ${({ theme, ml }) => theme.setMargin(ml)};
  margin-bottom: ${({ theme, mb }) => theme.setMargin(mb)};

  padding-top: ${({ theme, pt }) => theme.setPadding(pt)};
  padding-right: ${({ theme, pr }) => theme.setPadding(pr)};
  padding-left: ${({ theme, pl }) => theme.setPadding(pl)};
  padding-bottom: ${({ theme, pb }) => theme.setPadding(pb)};

  letter-spacing: ${({ theme, tracking }) => `${tracking}px`};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  font-style: ${({ italic }) => italic && 'italic'};
  line-height: ${({ theme, leading }) => theme.setSize(leading) || theme.setSize(5)};
  font-size: ${({ theme, size, fontSize }) => fontSize ? fontSize : theme.setFontSize(size)};
`

export default Text