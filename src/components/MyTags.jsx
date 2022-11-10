import styled from 'styled-components';
import HighLight from './HighLight';
import Title from './Title';
import {AiOutlineCloseSquare} from 'react-icons/ai';

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
  border-radius: 5px;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Tag = styled.li`
  color: var(--main-text-color);
  font-size: 16px;
  background-color: var(--gray-light);
  padding: 4px 8px;
  margin: 0 4px;
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

const MyTags = ({tags, setIsUpdate, setLocalTags}) => {
  const deleteTag = (id) => {
    setLocalTags((pre) => pre.filter((tag) => tag != id));
    setIsUpdate(true);
  };

  return (
    <>
      {tags.length ? (
        <MyTagsContainer>
          <MyTagsHeader>
            <Title>
              등록한 해시태그<HighLight>{tags.length}</HighLight>
            </Title>
          </MyTagsHeader>
          <TagList>
            {tags &&
              tags.map((tag) => (
                <Tag key={tag}>
                  #{tag}
                  <AiOutlineCloseSquare
                    className="close"
                    onClick={() => deleteTag(tag)}
                  />
                </Tag>
              ))}
          </TagList>
        </MyTagsContainer>
      ) : (
        <p>등록된 해시 태그가 없습니다.</p>
      )}
    </>
  );
};

export default MyTags;
