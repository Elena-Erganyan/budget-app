import styled from 'styled-components';

export const StyledMessage = styled.div`
  padding: 0.5rem;
  margin: 2rem 0;
  font-size: 1.7rem;
  color: ${({color}) => color};
  border: 2px solid  ${({color}) => color};
  border-radius: 0.3rem;
`;
