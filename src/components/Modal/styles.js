import styled from 'styled-components'
import Modal from 'styled-react-modal'
import theme from '../../styles/theme'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.primaryColor + 'BB'};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledModal = Modal.styled`
  background: white;
  z-index: 99999;
  box-shadow: 0px 6px 15px #0000003d;
  border-radius: 65px;
  width: 50%;
  min-height: 300px;
  padding: 40px 50px 60px;
  position: relative;

  @media only screen and (max-width: 1040px) {
    width: 80%;
  }
  @media only screen and (max-width: 425px) {
    border-radius: 0;
    overflow-y: auto;
    max-height: 100vh;
    padding: 30px 30px 40px;
    width: 100%;
  }
`

export const CloseIcon = styled.div`
  cursor: pointer;
  top: 1.5rem;
  right: 1.5rem;
  position: absolute;
  display: none;

  @media only screen and (max-width: 425px) {
    display: block;
  }
`

export const Wrapper = styled.div`
  & h2 {
    text-align: center;
    font-size: 2.2rem;
    font-family: ${theme.font.fontBold};
    color: ${theme.color.primaryColor + 'BB'};
  }
  h3 {
    font-size: 2rem;
    font-family: ${theme.font.fontBold};
    color: ${theme.color.secondaryColor};
  }
  h4 {
    font-size: 1.6rem;
    font-family: ${theme.font.fontBold};
    color: ${theme.color.secondaryColor};
  }
  & p {
    font-size: 1.1rem;
  }
`
