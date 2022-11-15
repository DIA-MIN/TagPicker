import styled from 'styled-components';
import Title from './Title';
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';
import {useState, useEffect} from 'react';

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  /* background-color: rgba(0, 0, 0, 0.4); */
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
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  animation: fade-in 0.4s ease;

  @keyframes fade-in {
    0% {
      transform: translateY(-200%);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

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

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  animation: fade-in 0.4s ease;

  @keyframes fade-in {
    0% {
      transform: translateY(-200%);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const StyledInput = styled.input`
  all: unset;
  color: var(--main-text-color);
  border-radius: 10px;
  background: linear-gradient(
    to right,
    var(--main-bg-color),
    var(--sub-bg-color)
  );
  margin-bottom: 8px;
  width: 100px;
  height: 40px;
  padding: 0 1rem;
`;

const ConfirmModal = ({
  children,
  setIsClicked,
  deleteTag,
  delTag,
  type,
  option,
  setOption,
}) => {
  const [koValue, setKovalue] = useState(option.ko);
  const [enValue, setEnvalue] = useState(option.en);

  const clickCloseHandler = () => {
    setIsClicked(false);
  };

  const clickCheckHandler = () => {
    deleteTag(delTag);
    setIsClicked(false);
  };

  const koChangeHandler = (e) => {
    setKovalue(e.target.value);
  };

  const enChangeHandler = (e) => {
    setEnvalue(e.target.value);
  };

  const optionSubmit = (e) => {
    e.preventDefault();
    const values = {
      ko: +koValue,
      en: +enValue,
    };
    setOption(values);
    localStorage.setItem('myTagsOption', JSON.stringify(values));
    setIsClicked(false);
  };

  return (
    <ModalContainer>
      {type === 'confirm' && (
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
      )}
      {type === 'check' && (
        <Modal>
          <Title>{children}</Title>
          <BtnContainer>
            <AiFillCheckCircle
              className="btn check"
              onClick={clickCloseHandler}
            />
          </BtnContainer>
        </Modal>
      )}
      {type === 'option' && (
        <ModalForm onSubmit={optionSubmit}>
          <Title>{children}</Title>
          <InputContainer>
            <InputLabel>KO</InputLabel>
            <StyledInput
              placeholder="KO 개수"
              value={koValue}
              onChange={koChangeHandler}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>EN</InputLabel>
            <StyledInput
              placeholder="EN 개수"
              value={enValue}
              onChange={enChangeHandler}
            />
          </InputContainer>
          <BtnContainer>
            <AiFillCheckCircle className="btn check" onClick={optionSubmit} />
            <AiFillCloseCircle
              className="btn close"
              onClick={clickCloseHandler}
            />
          </BtnContainer>
        </ModalForm>
      )}
    </ModalContainer>
  );
};

export default ConfirmModal;
