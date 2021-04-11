import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const StyledButton = styled.button`
  background: ${({ color }) => color};
  border: 0;
  border-radius: 50px;
  padding: 10px 30px;
  color: ${({ textColor }) => textColor};
  font-family: ${theme.font.fontBold};
  font-size: 1.2rem;
  text-transform: uppercase;
  transition: 0.3s;
  outline: none;
  letter-spacing: 0.05rem;
  line-height: 19px;

  ${(props) =>
    props.outlined &&
    css`
      padding: 12px 0;
      width: 230px;
      color: white;
      border-radius: 28px;
      width: 232px;
      vertical-align: middle;
      border: 1.5px solid white;
      background: transparent;
    `}

  ${(props) =>
    props.gutterBottom &&
    css`
      margin-bottom: 20px;
    `}

  ${(props) =>
    props.gutterTop &&
    css`
      margin-top: 20px;
    `}

  &:hover {
    cursor: pointer;

    ${({ theme, outlined }) =>
      outlined &&
      css`
        background: white;
        color: ${theme.color.secondaryColor};
      `}
  }

  &:active {
    opacity: 0.8;
    outline: none;
  }
`
