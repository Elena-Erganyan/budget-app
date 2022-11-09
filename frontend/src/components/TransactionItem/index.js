import * as Icons from 'phosphor-react';
import React from 'react';
import { useTheme } from 'styled-components';
import { useTransactionContext } from '../../context/globalState';
import {
  StyledTransactionItem,
  StyledTransactionCategory,
  StyledTransactionInfo,
  StyledTransactionButtons,
} from './styled';

const { Pencil, Trash } = Icons;

const TransactionItem = ({item, setItemsToEdit}) => {
  const { amount, type, category, date, title, _id } = item;
  const { deleteTransaction, categoryIcons } = useTransactionContext();
  const theme = useTheme();

  const sign = type === 'Income' ? '+' : '-';
  const color = type === 'Income' ? theme.incomeColor : theme.expenseColor;

  const IconComponent = Icons[categoryIcons[category]];

  const deleteHandler = async (id) => {
    const response = await fetch('/api/transactions/' + id, {
      method: 'DELETE',
    });

    if (response.ok) {
      deleteTransaction(id);
    }
  };

  return (
    <StyledTransactionItem color={color}>
      <StyledTransactionCategory color={color}>
        <IconComponent color={color} size={28} weight="duotone" />
        <span>{category}</span>
      </StyledTransactionCategory>
      <StyledTransactionInfo color={color}>
        <span>{new Date(date).toISOString().split('T')[0]}</span>
        <span>{title}</span>
        <span>{sign}${amount}</span>
      </StyledTransactionInfo>
      <StyledTransactionButtons>
        <Pencil
          color={color}
          onClick={() => setItemsToEdit(prevIds => [...prevIds, _id])}
          size={28}
          style={{cursor: 'pointer'}}
          weight="duotone"
        />
        <Trash
          color={color}
          onClick={() => deleteHandler(_id)}
          size={28}
          style={{cursor: 'pointer'}}
          weight="duotone"
        />
      </StyledTransactionButtons>
    </StyledTransactionItem>
  );
};

export default TransactionItem;
