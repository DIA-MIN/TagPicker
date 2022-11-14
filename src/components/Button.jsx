import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0 12px;
  height: 34px;
  border: 3px solid var(--sub-bg-color);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: ${(p) => (p.size ? `${p.size}px` : `${1}rem`)};
  background-color: var(--sub-bg-color);
  color: var(--main-text-color);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: 0.4s ease;
    background-color: white;
    color: var(--sub-bg-color);
  }
`;

const Button = ({children, size}) => {
  return <StyledButton size={size}>{children}</StyledButton>;
};

export default Button;
