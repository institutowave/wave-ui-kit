import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useTheme } from 'styled-components';
import { head, last, times } from 'lodash';
import { Wrapper, Dot, Rows, Columns } from './styles';

export default function DotMatrix({
  matrixPosition,
  matrix,
  spacingTop,
  spacingRight,
  dotSize,
  dotColor,
}) {
  const { t } = useTranslation('common');
  const { black: defaultColor } = useTheme();
  const defaultSize = '.75rem';
  const defaultSpacing = '3rem';

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
  );
}
