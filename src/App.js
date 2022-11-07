import {useState} from 'react';
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
  const [tags, setTags] = useState([]);

  return (
    <AppConatainer>
      <Header />
      <Tags tags={tags} />
      <InputTag tags={tags} setTags={setTags} />
    </AppConatainer>
  );
}

export default App;
