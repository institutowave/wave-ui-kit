import styled from 'styled-components'
import { head, tail } from 'lodash'

export const Wrapper = styled.div`
  position: absolute;
  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  right: ${({ position }) => position.right};
  bottom: ${({ position }) => position.bottom};
  z-index: 10;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

export const RightTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: ${({ size }) => tail(size)}px solid transparent;
  border-left: ${({ size }) => head(size)}px solid ${({ color }) => color};
  border-bottom: ${({ size }) => tail(size)}px solid transparent;
  margin-right: ${({ spacing }) => spacing}px;

  &:hover {
    filter: brightness(150%);
  }
`

export const LeftTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: ${({ size }) => tail(size)}px solid transparent;
  border-right: ${({ size }) => head(size)}px solid ${({ color }) => color};
  border-bottom: ${({ size }) => tail(size)}px solid transparent;
  margin-right: ${({ spacing }) => spacing}px;

  &:hover {
    filter: brightness(150%);
  }
`

export const Rows = styled.div`
  display: flex;
  flex-flow: row;
`
