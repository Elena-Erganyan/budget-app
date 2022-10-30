import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.5rem;
  font-size: 1.7rem; 
  background-color: ${({primary, color, theme}) => primary ? color : theme.backgroundColor};
  color: ${({primary, color, theme})  => primary ? theme.backgroundAccentColor : color};
  border: 2px solid ${({color}) => color};
  border-radius: 0.3rem;
  cursor: pointer;
`;
