import styled, {css} from 'styled-components';
import HighLight from './HighLight';
import Title from './Title';
import {
  AiOutlineCloseSquare,
  AiOutlineDownCircle,
  AiOutlineUpCircle,
} from 'react-icons/ai';
import {useEffect, useState} from 'react';

const MyTagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MyTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 85%;
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
      transition: 0.5s ease-out;
    `}

  ${(p) =>
    p.en &&
    p.clamp &&
    css`
      height: 100%;
      transition: 0.5s ease-out;
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

const MyTags = ({tags, setIsUpdate, setLocalTags}) => {
  const [koTags, setKoTags] = useState([]);
  const [enTags, setEnTags] = useState([]);
  const [isClampKo, setIsClampKo] = useState(false);
  const [isClampEn, setIsClampEn] = useState(false);

  useEffect(() => {
    const enfilter = /[a-zA-Z]/;
    const koTag = [];
    const enTag = [];
    if (tags.length) {
      for (let tag of tags) {
        enfilter.test(tag) ? enTag.push(tag) : koTag.push(tag);
      }
    }
    setKoTags(koTag);
    setEnTags(enTag);
  }, [tags.length]);

  const deleteTag = (id) => {
    setLocalTags((pre) => pre.filter((tag) => tag != id));
    setIsUpdate(true);
  };

  const clampHandler = (type) => {
    type === 'ko' ? setIsClampKo((pre) => !pre) : setIsClampEn((pre) => !pre);
  };

  return (
    <>
      {tags.length ? (
        <MyTagsWrapper>
          <MyTagsContainer>
            <MyTagsHeader>
              <Title>
                등록한 해시태그(KO)<HighLight>{koTags.length}</HighLight>
              </Title>
            </MyTagsHeader>
            <TagList ko clamp={isClampKo}>
              {koTags &&
                koTags.map((tag) => (
                  <Tag key={tag}>
                    #{tag}
                    <AiOutlineCloseSquare
                      className="close"
                      onClick={() => deleteTag(tag)}
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
          <MyTagsContainer>
            <MyTagsHeader>
              <Title>
                등록한 해시태그(EN)<HighLight>{enTags.length}</HighLight>
              </Title>
            </MyTagsHeader>
            <TagList en clamp={isClampEn}>
              {enTags &&
                enTags.map((tag) => (
                  <Tag key={tag}>
                    #{tag}
                    <AiOutlineCloseSquare
                      className="close"
                      onClick={() => deleteTag(tag)}
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
        </MyTagsWrapper>
      ) : (
        <p>등록된 해시 태그가 없습니다.</p>
      )}
    </>
  );
};

export default MyTags;
