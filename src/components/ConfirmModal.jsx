import styled from 'styled-components';
import Title from './Title';
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem 0;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
    font-size: 28px;
    margin: 0 10px;
    transition: 0.4s ease;
  }

  .btn.check {
    &:hover {
      color: var(--check-color);
    }
  }

  .btn.close {
    &:hover {
      color: var(--close-color);
    }
  }
`;

const ConfirmModal = ({children, setIsClicked, deleteTag, delTag}) => {
  const clickCloseHandler = () => {
    setIsClicked(false);
  };

  const clickCheckHandler = () => {
    deleteTag(delTag);
    setIsClicked(false);
  };

  return (
    <ModalContainer>
      <Modal>
        <Title>{children}</Title>
        <BtnContainer>
          <AiFillCheckCircle
            className="btn check"
            onClick={clickCheckHandler}
          />
          <AiFillCloseCircle
            className="btn close"
            onClick={clickCloseHandler}
          />
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
};

export default ConfirmModal;
