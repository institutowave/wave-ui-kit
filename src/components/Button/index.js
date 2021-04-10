import React from 'react'
import PropTypes from 'prop-types'

import theme from '../../styles/theme'
import { StyledButton } from './styles'

const Button = (props) => {
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

Button.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
  outlined: PropTypes.string,
  rest: PropTypes.any,
}

export default Button
