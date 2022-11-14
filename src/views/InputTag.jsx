import {useState} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import {AiOutlinePlusSquare} from 'react-icons/ai';

const InputContainer = styled.form`
  /* position: sticky;
  bottom: 0; */
  padding: 3rem 0;
  display: flex;
  align-items: center;

  .add {
    font-size: 20px;
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
  width: 500px;
  height: 40px;
  padding: 0 1rem;
`;

const InputTag = ({localTags, setLocalTags, setIsUpdate}) => {
  const [tag, setTag] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (tag !== '') {
      if (!localTags.includes(tag)) {
        setLocalTags((pre) => [...pre, tag]);
        setIsUpdate(true);
      } else {
        alert('이미 등록된 해시 태그입니다.');
      }
    } else {
      alert('해시태그를 입력해주세요.');
    }
    setTag('');
  };

  const changeHandler = (e) => {
    const value = e.target.value;
    setTag(value.replaceAll(' ', ''));
  };

  return (
    <InputContainer onSubmit={submitHandler}>
      <StyledInput
        type="text"
        value={tag}
        placeholder="# 해시태그를 입력해주세요."
        onChange={changeHandler}
      />
      <Button type="submit">
        <AiOutlinePlusSquare className="add" />
      </Button>
    </InputContainer>
  );
};

export default InputTag;
