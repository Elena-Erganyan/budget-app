import React from 'react';
import { useTransactionContext } from '../../context/globalState';
import TransactionItem from '../TransactionItem';
import { StyledTransactionHistory } from './styled';

const TransactionHistory = () => {
  const { transactions } = useTransactionContext();

  return (
    <StyledTransactionHistory>
      <h2>History</h2>
      {transactions.length > 0
      ? <div>{transactions.map(item => 
          <TransactionItem
            item={item}
            key={item.id}
          />
        )}</div>
      : <div>Your transactions will be shown here</div>}
    </StyledTransactionHistory>
  );
};

export default TransactionHistory;