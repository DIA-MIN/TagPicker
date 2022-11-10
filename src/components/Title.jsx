import styled from 'styled-components';

const StyledTitle = styled.p`
  color: var(--main-text-color);
  font-size: 24px;
`;

const Title = ({children}) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
