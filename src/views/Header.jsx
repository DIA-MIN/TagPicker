import styled from 'styled-components';

const AppHeader = styled.header`
  text-align: center;
  width: 300px;
  font-size: 45px;
  padding-top: 3rem;
  padding-bottom: 5rem;
  background: linear-gradient(to right, #ffafbd, #ffc3a0);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

const Header = () => {
  return <AppHeader>#TAGPICKER</AppHeader>;
};

export default Header;
