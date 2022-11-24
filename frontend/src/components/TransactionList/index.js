import { useState } from 'react';
import TransactionForm from '../TransactionForm';
import TransactionItem from '../TransactionItem';
import { StyledTransactionList, StyledTransactionListText } from './styled';

const TransactionList = ({transactions, text}) => {
  const [itemsToEdit, setItemsToEdit] = useState([]);

  return (
    <>
      {transactions.length > 0
      ? <StyledTransactionList>{transactions.map(item => {
        if (itemsToEdit.includes(item._id)) {
          return (
            <TransactionForm
              item={item}
              key={item._id}
              setItemsToEdit={setItemsToEdit}
            />
          );
        } else {
          return (
            <TransactionItem
              item={item}
              key={item._id}
              setItemsToEdit={setItemsToEdit}
            />
          );
        }
      })}</StyledTransactionList>
      : <StyledTransactionListText>{text}</StyledTransactionListText>}
    </>
  );
};

export default TransactionList;