import React from 'react'
import PropTypes from 'prop-types'

import { head, last, times } from 'lodash'
import { Wrapper, Dot, Rows } from './styles'
import theme from '../../styles/theme'

const DotMatrix = ({
  matrixPosition,
  matrix,
  spacingTop,
  spacingRight,
  dotSize,
  dotColor,
}) => {
  const { black: defaultColor } = theme.color
  const defaultSize = '.75rem'
  const defaultSpacing = '3rem'

  return (
    <Wrapper position={matrixPosition}>
      {times(head(matrix), () => (
        <Rows>
          {times(last(matrix), () => (
            <Dot
              size={dotSize || defaultSize}
              color={dotColor || defaultColor}
              spacingTop={spacingTop || defaultSpacing}
              spacingRight={spacingRight || defaultSpacing}
            />
          ))}
        </Rows>
      ))}
    </Wrapper>
  )
}

DotMatrix.propTypes = {
  matrixPosition: PropTypes.any,
  matrix: PropTypes.any,
  spacingTop: PropTypes.any,
  spacingRight: PropTypes.any,
  dotSize: PropTypes.any,
  dotColor: PropTypes.any,
}

export default DotMatrix
