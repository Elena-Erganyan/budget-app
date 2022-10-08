import styled from 'styled-components';

export const StyledBalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 1.5rem;
`;

export const StyledBalance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background-color: #D5FB00;
  color: #223C20;
  border-radius: 0.7rem 0.7rem 0 0;
  h3 {
    font-size: 2rem;
    line-height: 1.5;
  }
  span {
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: bold;
  }
`;

export const StyledIncomeExpenses = styled.div`
  display: flex;
  justify-content: space-between;
  color: #223C20;
  border-radius: 0 0 0.7rem 0.7rem;
`;

export const StyledIncome = styled(StyledBalance)`
  width: 50%;
  border: 1px solid #D5FB00;
  border-radius: 0 0 0 0.7rem;
  background-color: transparent;
  span {
    color: #4C8D26;
  }
`;

export const StyledExpenses = styled(StyledIncome)`
  border-radius: 0 0 0.7rem 0;
  span {
    color: #882380;
  }
`;
