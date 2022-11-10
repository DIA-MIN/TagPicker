import styled from 'styled-components';
import HighLight from './HighLight';
import Title from './Title';

const MyTagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 80%;
  padding: 0 1rem;
`;

const MyTagsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagList = styled.ul`
  border: 3px solid var(--sub-bg-color);
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const Tag = styled.li`
  color: var(--main-text-color);
  background-color: var(--gray-light);
  padding: 4px 8px;
  margin: 0 4px;
  border-radius: 5px;
`;

const MyTags = ({tags}) => {
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
            {tags && tags.map((tag) => <Tag key={tag}>#{tag}</Tag>)}
          </TagList>
        </MyTagsContainer>
      ) : (
        <p>등록된 해시 태그가 없습니다.</p>
      )}
    </>
  );
};

export default MyTags;
