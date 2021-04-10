import { Wrapper, LeftTriangle, RightTriangle, Rows } from './styles';
import { times } from 'lodash';
import { useTheme } from 'styled-components';

export default function Triangles({
  position,
  quantity,
  direction,
  color,
  size,
  spacing,
}) {
  const Triangle = direction === 'left' ? LeftTriangle : RightTriangle;
  const defaultSpacing = 10;
  const defaultSize = [20, 25];
  const { secondaryColor } = useTheme();

  return (
    <Wrapper position={position}>
      <Rows>
        {times(quantity, () => (
          <Triangle
            size={size || defaultSize}
            color={color || secondaryColor}
            spacing={spacing || defaultSpacing}
          />
        ))}
      </Rows>
    </Wrapper>
  );
}
