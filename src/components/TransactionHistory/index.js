import React, { useState } from 'react';
import { useTransactionContext } from '../../context/globalState';
import TransactionForm from '../TransactionForm';
import TransactionItem from '../TransactionItem';
import { StyledTransactionHistory } from './styled';

const TransactionHistory = () => {
  const [itemsToEdit, setItemsToEdit] = useState([]);
  const { transactions } = useTransactionContext();

  return (
    <StyledTransactionHistory>
      <h2>History</h2>
      {transactions.length > 0
      ? <div>{transactions.map(item => {
        if (itemsToEdit.includes(item.id)) {
          return (
            <TransactionForm
              item={item}
              key={item.id}
              setItemsToEdit={setItemsToEdit}
            />
          );
        } else {
          return (
            <TransactionItem
              item={item}
              key={item.id}
              setItemsToEdit={setItemsToEdit}
            />
          );
        }
      })}</div>
      : <div>Your transactions will be shown here</div>}
    </StyledTransactionHistory>
  );
};

export default TransactionHistory;