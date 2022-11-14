import styled, {css} from 'styled-components';
import HighLight from './HighLight';
import Title from './Title';
import {
  AiOutlineCloseSquare,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from 'react-icons/ai';
import {useEffect, useState} from 'react';
import ConfirmModal from './ConfirmModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    align-items: center;
  }
`;

const MyTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const MyTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 700px;
`;

const MyTagsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagList = styled.ul`
  align-self: center;
  border: 3px solid var(--sub-bg-color);
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;

  ${(p) =>
    p.ko &&
    p.clamp &&
    css`
      height: 100%;
      transition: 0.5s ease;
    `}

  ${(p) =>
    p.en &&
    p.clamp &&
    css`
      height: 100%;
      transition: 0.5s ease;
    `}
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

  .close {
    font-size: 18px;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
      color: var(--close-color);
      transition: 0.3s ease;
    }
  }
`;

const ButtonContainer = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--sub-bg-color);
  border-top: none;
  width: 100%;
  padding: 1.25rem 1rem;
  color: var(--main-text-color);

  .clamp {
    cursor: pointer;
    font-size: 24px;

    &:hover {
      color: white;
      background-color: var(--sub-bg-color);
      transform: scale(1.2);
      border-radius: 50%;
      transition: 0.4s ease;
    }
  }
`;

const MyTags = ({tags, koTags, enTags, setLocalTags, setIsUpdate, option}) => {
  const [isClampKo, setIsClampKo] = useState(false);
  const [isClampEn, setIsClampEn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [delTag, setDelTag] = useState('');

  const deleteTag = (id) => {
    setLocalTags((pre) => pre.filter((tag) => tag != id));
    setIsUpdate(true);
    setDelTag('');
  };

  const modalHandler = (id) => {
    setDelTag(id);
    setIsClicked((pre) => !pre);
  };

  const clampHandler = (type) => {
    type === 'ko' ? setIsClampKo((pre) => !pre) : setIsClampEn((pre) => !pre);
  };

  return (
    <>
      {tags.length ? (
        <Container>
          <Title>
            등록한 해시태그 (<HighLight>{tags.length}</HighLight>)
          </Title>
          <MyTagsWrapper>
            {koTags.length > 0 && (
              <MyTagsContainer>
                <MyTagsHeader>
                  <Title>
                    KO (<HighLight>{koTags.length}</HighLight>)
                  </Title>
                </MyTagsHeader>
                <TagList ko clamp={isClampKo}>
                  {koTags &&
                    koTags.map((tag) => (
                      <Tag key={tag}>
                        #{tag}
                        <AiOutlineCloseSquare
                          className="close"
                          onClick={() => modalHandler(tag)}
                        />
                      </Tag>
                    ))}
                </TagList>
                <ButtonContainer>
                  {isClampKo ? (
                    <AiOutlineUpCircle
                      className="clamp"
                      onClick={() => clampHandler('ko')}
                    />
                  ) : (
                    <AiOutlineDownCircle
                      className="clamp"
                      onClick={() => clampHandler('ko')}
                    />
                  )}
                </ButtonContainer>
              </MyTagsContainer>
            )}
            {enTags.length > 0 && (
              <MyTagsContainer>
                <MyTagsHeader>
                  <Title>
                    EN (<HighLight>{enTags.length}</HighLight>)
                  </Title>
                </MyTagsHeader>
                <TagList en clamp={isClampEn}>
                  {enTags &&
                    enTags.map((tag) => (
                      <Tag key={tag}>
                        #{tag}
                        <AiOutlineCloseSquare
                          className="close"
                          onClick={() => modalHandler(tag)}
                        />
                      </Tag>
                    ))}
                </TagList>
                <ButtonContainer>
                  {isClampEn ? (
                    <AiOutlineUpCircle
                      className="clamp"
                      onClick={() => clampHandler('en')}
                    />
                  ) : (
                    <AiOutlineDownCircle
                      className="clamp"
                      onClick={() => clampHandler('en')}
                    />
                  )}
                </ButtonContainer>
              </MyTagsContainer>
            )}
          </MyTagsWrapper>
        </Container>
      ) : (
        <Title size={24}>등록된 해시 태그가 없습니다.</Title>
      )}
      {isClicked && (
        <ConfirmModal
          setIsClicked={setIsClicked}
          deleteTag={deleteTag}
          delTag={delTag}
          type={'confirm'}
          option={option}
        >
          해시태그를 삭제할까요?
        </ConfirmModal>
      )}
    </>
  );
};

export default MyTags;
