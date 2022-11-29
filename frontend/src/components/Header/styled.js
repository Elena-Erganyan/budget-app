import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  background-color: ${({theme}) => theme.backgroundAccentColor};
  box-shadow: ${({theme}) => theme.name === 'light' ? '0 0 2px 1px #cccccc' : 'none'};
`;

export const StyledHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 90rem;
`;
