import styled from "styled-components";

export const StyledBalance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 70rem;
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
  width: 90%;
  max-width: 70rem;
  margin-bottom: 1rem;
  color: #223C20;
  border-radius: 0 0 0.7rem 0.7rem;
`;

export const StyledIncome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #D5FB00;
  border-radius: 0 0 0 0.7rem;
  h3 {
    font-size: 2rem;
    line-height: 1.5;
  }
  span {
    font-size: 1.5rem;
    line-height: 1.2;
    font-weight: bold;
    color: #4C8D26;
  }
`;

export const StyledExpenses = styled(StyledIncome)`
  border-radius: 0 0 0.7rem 0;
  span {
    color: #882380;
  }
`;