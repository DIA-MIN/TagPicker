import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0 12px;
  height: 34px;
  border: 3px solid var(--sub-bg-color);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 1rem;
  background-color: var(--sub-bg-color);
  color: var(--main-text-color);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: 0.4s ease;
    background-color: white;
    color: var(--main-bg-color);
  }
`;

const Button = ({children}) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
