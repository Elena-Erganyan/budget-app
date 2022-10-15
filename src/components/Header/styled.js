import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90rem;
`;

export const StyledHeader = styled.h1`
  padding: 1rem;
  font-family: 'Rosa Sans Bold', sans-serif;
  font-size: 3.5rem;
  line-height: 1.5;
  text-transform: capitalize;
  color: var(--expense-color);
`;
