import {useState, useEffect} from 'react';
import styled from 'styled-components';
import ConfirmModal from './ConfirmModal';
import Title from './Title';

const Container = styled.div`
  padding: 0 3rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    padding-top: 3rem;
    align-items: center;
  }
`;

const TagPickBtn = styled.button`
  all: unset;
  cursor: pointer;
  width: 120px;
  height: 120px;
  border: 3px solid var(--sub-bg-color);
  border-radius: 50%;
  font-size: 22px;
  background-color: var(--sub-bg-color);
  color: var(--main-text-color);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: 0.4s ease;
    background-color: white;
    color: var(--sub-bg-color);
  }
`;

const TagsContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
`;

const TagList = styled.ul`
  align-self: center;
  border: 3px solid var(--sub-bg-color);
  border-radius: 5px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Tag = styled.li`
  color: var(--main-text-color);
  font-size: 16px;
  background-color: var(--gray-light);
  padding: 4px 8px;
  margin: 5px 4px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const TagsPick = ({koTags, enTags, option}) => {
  const [history, setHistory] = useState(() => {
    const data = localStorage.getItem('myTagsHistory');
    if (data !== null) return JSON.parse(data);
    else return [];
  });
  const [isEmty, setIsEmty] = useState(false);

  const pickTagsHandler = () => {
    const koPicks = [];
    const enPicks = [];

    if (koPicks.length === 0 || enTags.length === 0) {
      setIsEmty((pre) => !pre);
      return;
    }

    while (koPicks.length < option.ko) {
      let koPick = koTags[Math.floor(Math.random() * koTags.length)];
      if (!koPicks.includes(koPick)) koPicks.push(koPick);
    }

    while (enPicks.length < option.en) {
      let enPick = enTags[Math.floor(Math.random() * enTags.length)];
      if (!enPicks.includes(enPick)) enPicks.push(enPick);
    }

    setHistory([...koPicks, ...enPicks]);
    localStorage.setItem(
      'myTagsHistory',
      JSON.stringify([...koPicks, ...enPicks])
    );
  };

  return (
    <>
      <Container>
        <TagPickBtn onClick={pickTagsHandler}>TAGPICK</TagPickBtn>
        {history.length ? (
          <TagsContainer>
            <Title size={20}>최근 사용한 해시태그는 다음과 같습니다.</Title>
            <TagList>
              {history && history.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </TagList>
          </TagsContainer>
        ) : (
          <TagsContainer>
            <Title size={24}>최근 사용한 해시태그가 없습니다.</Title>
          </TagsContainer>
        )}
      </Container>
      {isEmty && (
        <ConfirmModal setIsClicked={setIsEmty} type={'check'} option={option}>
          먼저 해시태그를 등록해주세요.
        </ConfirmModal>
      )}
    </>
  );
};

export default TagsPick;
