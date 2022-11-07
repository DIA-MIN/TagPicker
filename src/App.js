import styled from 'styled-components';
import Header from './views/Header';

const AppConatainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppConatainer>
      <Header />
    </AppConatainer>
  );
}

export default App;
