import styled from 'styled-components';

const StyledTitle = styled.p`
  color: var(--main-text-color);
  font-size: ${(p) => (p.size ? `${p.size}px` : `${24}px`)};
  margin: 1rem 0;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Title = ({children, size}) => {
  return <StyledTitle size={size}>{children}</StyledTitle>;
};

export default Title;
