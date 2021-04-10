import React from 'react'
import theme from '../'
import { StyledButton } from './styles'

export default function Button(props) {
  const { color, textColor, outlined, ...rest } = props
  const { primaryColor, white } = theme.color

  return (
    <StyledButton
      {...rest}
      outlined={!!outlined}
      color={color || primaryColor}
      textColor={textColor || white}
    />
  )
}
