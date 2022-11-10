import styled from 'styled-components';

const StyledTitle = styled.p`
  font-size: 24px;
`;

const Title = ({children}) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
