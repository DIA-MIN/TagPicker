import styled from 'styled-components';

const StyledSpan = styled.span`
  margin: 0 10px;
  color: var(--main-bg-color);
`;

const HighLight = ({children}) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default HighLight;
