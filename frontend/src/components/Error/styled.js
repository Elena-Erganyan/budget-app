import styled from 'styled-components';

export const StyledError = styled.div`
  padding: 0.5rem;
  margin: 2rem 0;
  font-size: 1.7rem;
  color: ${({theme})  => theme.errorColor};
  border: 2px solid ${({theme}) => theme.errorColor};
  border-radius: 0.3rem;
`;
