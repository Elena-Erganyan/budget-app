import styled from 'styled-components';

export const StyledTransactionHistory = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  color: ${({theme}) => theme.textColor};
`;

export const StyledTransactionHistoryHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 1.5;
`;