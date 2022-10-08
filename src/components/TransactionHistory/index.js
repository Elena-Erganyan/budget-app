import React from 'react';
import { useTransactionContext } from '../../context/globalState';
import TransactionList from '../TransactionList';
import { StyledTransactionHistory } from './styled';

const TransactionHistory = () => {
  const { transactions } = useTransactionContext();

  return (
    <StyledTransactionHistory>
      <h2>History</h2>
      <TransactionList
        text="Your transactions will be shown here"
        transactions={transactions}
      />
    </StyledTransactionHistory>
  );
};

export default TransactionHistory;
