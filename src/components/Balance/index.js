import React from 'react';
import { useTransactionContext } from '../../context/globalState';
import { StyledBalance, StyledIncomeExpenses, StyledIncome, StyledExpenses } from './styled';

const Balance = () => {
  const { transactions } = useTransactionContext();
  const income = transactions.filter((item) => item.type === 'income').reduce((sum, item) => sum += item.amount, 0).toFixed(2);
  const expenses = transactions.filter((item) => item.type === 'expense').reduce((sum, item) => sum += item.amount, 0).toFixed(2);
  const balance = (income - expenses);
  const sign = balance < 0 ? '-' : '';

  return (
    <>
    <StyledBalance>
      <h3>Your balance</h3>
      <span>{sign}${Math.abs(balance).toFixed(2)}</span>
    </StyledBalance>
    <StyledIncomeExpenses>
      <StyledIncome>
        <h3>Income</h3>
        <span>${income}</span>
      </StyledIncome>
      <StyledExpenses>
        <h3>Expenses</h3>
        <span>${expenses}</span>
      </StyledExpenses>
    </StyledIncomeExpenses>
  </>
  );
};

export default Balance;