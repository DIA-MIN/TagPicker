import {useState} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import {AiOutlinePlusSquare} from 'react-icons/ai';

const InputContainer = styled.form`
  padding-bottom: 3rem;
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

const InputTag = ({tags, setTags}) => {
  const [tag, setTag] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (!tags.includes(tag)) {
      setTags((prev) => [...prev, tag]);
    } else {
      alert('이미 등록된 해시태그입니다.');
    }
    setTag('');
  };

  const changeHandler = (e) => {
    setTag(e.target.value);
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
