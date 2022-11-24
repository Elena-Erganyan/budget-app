import styled from 'styled-components';

export const StyledTransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 1rem solid ${({color}) => color};
  border-radius: 0.7rem;
  background-color: ${({theme}) => theme.backgroundAccentColor};
  box-shadow: ${({theme}) => theme.name === 'light' ? '0 0 2px 1px #cccccc' : 'none'};
  color: ${({theme}) => theme.textColor};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledTransactionCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 1.7rem;
  line-height: 1.2;
  min-width: 20%; 
`;

export const StyledTransactionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
  font-size: 1.7rem;
  line-height: 1.2;
  min-width: 60%;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledTransactionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  font-size: 1.7rem;
  line-height: 1.2;

  svg {
    cursor: pointer;
  }
`;

export const StyledItemText = styled.span`
  color: ${({color}) => color};
  text-align: center;
`;
