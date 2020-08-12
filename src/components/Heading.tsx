import styled from 'styled-components'
import { IFontFamily, IColor, IFontWeight, IFontSize } from '../types/theme'
import { IUtils } from '../types/general'

interface IHeadingProps extends IUtils {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: IFontSize
  color: IColor
  fontFamily: IFontFamily
  fontWeight: IFontWeight
  variantColor?: string
  leading: number
  tracking: number
  uppercase: boolean
  italic: boolean
}

const Heading = styled.div.attrs((props: IHeadingProps) => ({
  ...props,
  as: props.as || 'h1',
  size: props.size || 'base',
  color: props.color || 'default',
  fontWeight: props.fontWeight || 700,
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

  letter-spacing: ${({ theme, tracking }) => theme.setSize(tracking)};
  text-transform: ${({ uppercase }) => uppercase && 'uppercase'};
  font-style: ${({ italic }) => italic && 'italic'};

  ${({ theme, size, leading }) => size === 'xs' && `
    line-height: ${theme.setSize(leading) || theme.setSize(6)};
  `}
  ${({ theme, size, leading }) => size === 'sm' && `
    line-height: ${theme.setSize(leading) || theme.setSize(6)};
  `}
  ${({ theme, size, leading }) => size === 'base' && `
    line-height: ${theme.setSize(leading) || theme.setSize(6)};
  `}
  ${({ theme, size, leading }) => size === 'lg' && `
    line-height: ${theme.setSize(leading) || theme.setSize(6)};
  `}
  ${({ theme, size, leading }) => size === 'xl' && `
    line-height: ${theme.setSize(leading) || theme.setSize(8)};
  `}
  ${({ theme, size, leading }) => size === '2xl' && `
    line-height: ${theme.setSize(leading) || theme.setSize(10)};
  `}
  ${({ theme, size, leading }) => size === '3xl' && `
    line-height: ${theme.setSize(leading) || theme.setSize(12)};
  `}
  ${({ theme, size, leading }) => size === '4xl' && `
    line-height: ${theme.setSize(leading) || theme.setSize(14)};
  `}
  ${({ theme, size, leading }) => size === '5xl' && `
    line-height: ${theme.setSize(leading) || theme.setSize(16)};
  `}
  ${({ theme, size, leading }) => size === '6xl' && `
    line-height: ${theme.setSize(leading) || theme.setSize(20)};
  `}
  font-size: ${({ theme, size }) => theme.setFontSize(size)};

`

export default Heading