import React from 'react'
import { Wrapper, LeftTriangle, RightTriangle, Rows } from './styles'
import { times } from 'lodash'
import theme from '../../styles/theme'

export default function Triangles({
  position,
  quantity,
  direction,
  color,
  size,
  spacing
}) {
  const Triangle = direction === 'left' ? LeftTriangle : RightTriangle
  const defaultSpacing = 10
  const defaultSize = [20, 25]

  return (
    <Wrapper position={position}>
      <Rows>
        {times(quantity, () => (
          <Triangle
            size={size || defaultSize}
            color={color || theme.color.secondaryColor}
            spacing={spacing || defaultSpacing}
          />
        ))}
      </Rows>
    </Wrapper>
  )
}
