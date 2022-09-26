import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.5rem;
  font-size: 1.5rem; 
  background-color: ${props => props.primary ? props.color : "white"};
  color: ${props => props.primary ? "white" : props.color};
  border: 1px solid ${props => props.color};
  border-radius: 0.3rem;
  cursor: pointer;
`;
