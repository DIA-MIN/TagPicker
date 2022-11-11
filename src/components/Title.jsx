import styled from 'styled-components';

const StyledTitle = styled.p`
  color: var(--main-text-color);
  font-size: 24px;
  margin: 1rem 0;
`;

const Title = ({children}) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
