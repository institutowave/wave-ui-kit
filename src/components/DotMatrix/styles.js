import styled from 'styled-components';

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
`;

export const Dot = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background: ${({ color }) => color};
  margin-top: ${({ spacingTop }) => spacingTop};
  margin-right: ${({ spacingRight }) => spacingRight};
  border-radius: 100%;
  transition: 0.5s;

  &:hover {
    -webkit-filter: brightness(150%);
  }
`;

export const Rows = styled.div`
  display: flex;
  flex-flow: row;
`;
