import styled from 'styled-components';

const AppHeader = styled.header`
  width: 300px;
  font-size: 45px;
  padding: 3rem 0;
  background: linear-gradient(to right, #ffafbd, #ffc3a0);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const Header = () => {
  return <AppHeader>TAGPICKER</AppHeader>;
};

export default Header;
