import React, { useEffect } from 'react';
import { useTransactionContext } from '../../context/globalState';
import { useAuthContext } from '../../context/authState';
import TransactionList from '../TransactionList';
import { StyledTransactionHistory } from './styled';


const TransactionHistory = () => {
  const { transactions, setTransactions } = useTransactionContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions', {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setTransactions(json);
      }
    };
    if (user) {
      fetchTransactions();
    }
  }, [setTransactions, user]);

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
