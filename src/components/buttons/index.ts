import styled from 'styled-components'

interface IButtonProps {
  size?: 'small' | 'normal' | 'large'
  padding?: string
  margin?: string
  noMargin?: boolean
  block?: boolean
}

export const Button = styled.button<IButtonProps>`
  border: none;
  display: 'inline-block';
  background-color: ${({ theme }) => theme.setColor('primary') || 'gray'};
  color: white;
  margin: ${({ margin, noMargin }) => (noMargin ? '0px' : margin || '10px')};

  ${({ theme, size, padding }) =>
    size === 'small' &&
    ` 
      font-size: 14px;
      padding: ${`${theme.setSize(2)} ${theme.setSize(3)}` || padding};
    `}

  ${({ theme, size, padding }) =>
    size === 'normal' &&
    ` 
      padding: ${`${theme.setSize(3)} ${theme.setSize(4)}` || padding};
    `};

  ${({ theme, size, padding }) =>
    size === 'large' &&
    ` padding: ${`${theme.setSize(4)} ${theme.setSize(6)}` || padding};
  `};
`
