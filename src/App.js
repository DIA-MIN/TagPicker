import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Header from './views/Header';
import InputTag from './views/InputTag';
import Tags from './views/Tags';

const AppConatainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

function App() {
  const [localTags, setLocalTags] = useState(() => {
    const data = localStorage.getItem('myTags');
    if (data !== null) return JSON.parse(data);
    else return [];
  });
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (isUpdate) {
      localStorage.setItem('myTags', JSON.stringify([...localTags]));
      setIsUpdate(false);
    }
  }, [isUpdate]);

  return (
    <AppConatainer>
      <Header />
      <Tags
        tags={localTags}
        setIsUpdate={setIsUpdate}
        setLocalTags={setLocalTags}
      />
      <InputTag
        localTags={localTags}
        setLocalTags={setLocalTags}
        setIsUpdate={setIsUpdate}
      />
    </AppConatainer>
  );
}

export default App;
