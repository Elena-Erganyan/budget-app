import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 80rem;
`;

export const StyledHeader = styled.h1`
  padding: 2rem 1rem 1rem 1rem;
  font-family: 'Rosa Sans Bold', sans-serif;
  font-size: 3.5rem;
  line-height: 1.5;
  text-align: center;
  text-transform: capitalize;
  color: ${({theme}) => theme.expenseColor};
`;
