import {useState} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import {AiOutlinePlusSquare, AiOutlineVerticalAlignTop} from 'react-icons/ai';
import {BsThreeDotsVertical} from 'react-icons/bs';
import ConfirmModal from '../components/ConfirmModal';

const InputContainer = styled.form`
  /* position: sticky;
  bottom: 0; */
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;

  .add {
    font-size: 20px;
  }

  .push {
    border-radius: 5px;
    padding: 4px;
    cursor: pointer;
    font-size: 24px;
    margin-left: 10px;
    &:hover {
      transition: 0.4s ease;
      background-color: var(--sub-bg-color);
      color: white;
    }
  }

  .push.active {
    background-color: var(--sub-bg-color);
    color: white;
  }

  .option {
    border-radius: 5px;
    padding: 4px;
    cursor: pointer;
    font-size: 24px;
    margin-left: 10px;
    &:hover {
      transition: 0.4s ease;
      background-color: var(--sub-bg-color);
      color: white;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const StyledInput = styled.input`
  all: unset;
  color: var(--main-text-color);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: linear-gradient(
    to right,
    var(--main-bg-color),
    var(--sub-bg-color)
  );
  width: 100%;
  max-width: 700px;
  height: 40px;
  padding: 0 1rem;

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const InputTag = ({
  localTags,
  setLocalTags,
  setIsUpdate,
  option,
  setOption,
}) => {
  const [tag, setTag] = useState('');
  const [message, setMessage] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isPush, setIsPush] = useState(false);
  const [isClickedOption, setIsClickedOption] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (isPush) {
      const tags = tag.replace(/["[\]]/g, '').split(',');
      setLocalTags(tags);
      setIsUpdate(true);
    } else {
      if (tag === '') {
        setMessage('해시태그를 입력해주세요.');
        clickModalHandler();
      } else if (tag.includes('[') || tag.includes(']')) {
        setMessage('등록할 수 없는 해시태그입니다.');
        clickModalHandler();
      } else if (localTags.includes(tag)) {
        setMessage('이미 등록된 해시 태그입니다.');
        clickModalHandler();
      } else {
        setLocalTags((pre) => [...pre, tag]);
        setIsUpdate(true);
      }
    }

    setTag('');
  };

  const changeHandler = (e) => {
    const value = e.target.value;
    setTag(value.replaceAll(' ', ''));
  };

  const clickModalHandler = () => {
    setIsClicked((pre) => !pre);
  };

  const pushClickHandler = () => {
    setIsPush((pre) => !pre);
  };

  const clickOptionModalHandler = () => {
    setIsClickedOption((pre) => !pre);
  };

  return (
    <>
      <InputContainer onSubmit={submitHandler}>
        <StyledInput
          type="text"
          value={tag}
          placeholder={
            isPush
              ? '덮어 씌울 해시태그 그룹을 입력해주세요.'
              : '# 해시태그를 입력해주세요.'
          }
          onChange={changeHandler}
        />
        <Button type="submit">
          <AiOutlinePlusSquare className="add" />
        </Button>
        <AiOutlineVerticalAlignTop
          className={isPush ? `push active` : `push`}
          onClick={pushClickHandler}
        />
        <BsThreeDotsVertical
          className="option"
          onClick={clickOptionModalHandler}
        />
      </InputContainer>
      {isClicked && (
        <ConfirmModal
          setIsClicked={setIsClicked}
          type={'check'}
          option={option}
        >
          {message}
        </ConfirmModal>
      )}
      {isClickedOption && (
        <ConfirmModal
          setIsClicked={setIsClickedOption}
          type={'option'}
          option={option}
          setOption={setOption}
        >
          TAGPICK OPTION
        </ConfirmModal>
      )}
    </>
  );
};

export default InputTag;
