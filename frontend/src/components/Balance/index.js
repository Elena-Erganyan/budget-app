import { useTransactionContext } from '../../context/globalState';
import {
  StyledBalanceWrapper,
  StyledBalance,
  StyledBalanceHeader,
  StyledBalanceAmount,
  StyledIncomeExpenses,
  StyledIncome,
  StyledExpenses,
} from './styled';

const Balance = () => {
  const { transactions } = useTransactionContext() || [];
  const income = transactions.reduce((sum, item) => sum += (item.type === 'Income'? item.amount: 0), 0).toFixed(2);
  const expenses = transactions.reduce((sum, item) => sum += (item.type === 'Expense'? item.amount: 0), 0).toFixed(2);
  const balance = (income - expenses);
  const sign = balance < 0 ? '-' : '';

  return (
    <StyledBalanceWrapper>
      <StyledBalance>
        <StyledBalanceHeader>Your balance</StyledBalanceHeader>
        <StyledBalanceAmount>{sign}${Math.abs(balance).toFixed(2)}</StyledBalanceAmount>
      </StyledBalance>
      <StyledIncomeExpenses>
        <StyledIncome >
          <StyledBalanceHeader>Income</StyledBalanceHeader>
          <StyledBalanceAmount  type='income'>${income}</StyledBalanceAmount>
        </StyledIncome>
        <StyledExpenses>
          <StyledBalanceHeader>Expenses</StyledBalanceHeader>
          <StyledBalanceAmount type='expense'>${expenses}</StyledBalanceAmount>
        </StyledExpenses>
      </StyledIncomeExpenses>
    </StyledBalanceWrapper>
  );
};

export default Balance;
