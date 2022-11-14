import styled from 'styled-components';
import MyTags from '../components/MyTags';
import {useState, useEffect} from 'react';
import TagsPick from '../components/TagsPick';

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Tags = ({tags, setIsUpdate, setLocalTags}) => {
  const [koTags, setKoTags] = useState([]);
  const [enTags, setEnTags] = useState([]);

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

  return (
    <TagContainer>
      <MyTags
        tags={tags}
        koTags={koTags}
        enTags={enTags}
        setIsUpdate={setIsUpdate}
        setLocalTags={setLocalTags}
      />
      <TagsPick koTags={koTags} enTags={enTags} />
    </TagContainer>
  );
};

export default Tags;
