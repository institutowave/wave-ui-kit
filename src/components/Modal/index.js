import ReactModal from 'react-modal';
import styled from 'styled-components';
import theme from 'styles/theme';
import { AiOutlineClose } from 'react-icons/ai';
import { StyledModal, Wrapper, CloseIcon } from './styles';

export default function WaveModal({ modalIsOpen, onClose, children }) {
  return (
    <StyledModal
      isOpen={modalIsOpen}
      onBackgroundClick={onClose}
      onEscapeKeydown={onClose}
    >
      <CloseIcon onClick={onClose}>
        <AiOutlineClose />
      </CloseIcon>
      <Wrapper>{children}</Wrapper>
    </StyledModal>
  );
}
