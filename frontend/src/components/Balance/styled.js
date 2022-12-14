import styled from 'styled-components';

export const StyledBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 1.5rem;
  border-radius: 0.7rem;
  box-shadow: ${({theme}) => theme.name === 'light' ? '0 0 2px 1px #cccccc' : 'none'};
`;

export const StyledBalance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({theme}) => theme.incomeAccentColor};
  color: ${({theme}) => theme.textColor};
  border-radius: 0.7rem 0.7rem 0 0;
`;

export const StyledBalanceHeader = styled.h3`
  font-size: 2rem;
  line-height: 1.5;
`;

export const StyledBalanceAmount = styled.span`
  font-size: 1.7rem;
  line-height: 1.2;
  font-weight: bold;
  color: ${({theme, type}) => type === 'income'
    ? theme.incomeColor 
    : type === 'expense'
      ? theme.expenseColor
      : theme.backgroundAccentColor
  };
`;

export const StyledIncomeExpenses = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({theme}) => theme.textColor};
  border-radius: 0 0 0.7rem 0.7rem;
`;

export const StyledIncome = styled(StyledBalance)`
  width: 50%;
  border-radius: 0 0 0 0.7rem;
  background-color: ${({theme}) => theme.backgroundAccentColor};
  border: 3px solid ${({theme}) => theme.backgroundColor};
  border-left: none;
  border-bottom: none;
`;

export const StyledExpenses = styled(StyledIncome)`
  border-radius: 0 0 0.7rem 0;
  border-right: none;
`;
