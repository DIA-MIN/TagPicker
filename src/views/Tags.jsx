import styled from 'styled-components';
import MyTags from '../components/MyTags';

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Tags = ({tags, setIsUpdate, setLocalTags}) => {
  return (
    <TagContainer>
      <MyTags
        tags={tags}
        setIsUpdate={setIsUpdate}
        setLocalTags={setLocalTags}
      />
    </TagContainer>
  );
};

export default Tags;
