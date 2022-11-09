import React, { useEffect } from 'react';
import { useTransactionContext } from '../../context/globalState';
import TransactionList from '../TransactionList';
import { StyledTransactionHistory } from './styled';

const TransactionHistory = () => {
  const { transactions, setTransactions } = useTransactionContext();

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions/');
      const json = await response.json();

      if (response.ok) {
        setTransactions(json);
      }
    };
    fetchTransactions();
  }, [setTransactions]);

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
