import * as Icons from 'phosphor-react';
import React from 'react';
import { useTransactionContext } from '../../context/globalState';
import {
  StyledTransactionItem,
  StyledTransactionCategory,
  StyledTransactionInfo,
  StyledTransactionButtons,
} from './styled';

const { Pencil, Trash } = Icons;

const TransactionItem = ({item, setItemsToEdit}) => {
  const { amount, type, category, date, title, id } = item;
  const { deleteTransaction, categoryIcons } = useTransactionContext();

  const sign = type === 'Income' ? '+' : '-';
  const color = type === 'Income' ? 'var(--income-color)' : 'var(--expense-color)';

  const IconComponent = Icons[categoryIcons[category]];

  return (
    <StyledTransactionItem color={color}>
      <StyledTransactionCategory color={color}>
        <IconComponent color={color} size={28} weight="duotone" />
        <span>{category}</span>
      </StyledTransactionCategory>
      <StyledTransactionInfo>
        <span>{new Date(date).toISOString().split('T')[0]}</span>
        <span>{title}</span>
        <span style={{color: color}}>{sign}${amount}</span>
      </StyledTransactionInfo>
      <StyledTransactionButtons>
        <Pencil
          color={color}
          onClick={() => setItemsToEdit(prevIds => [...prevIds, id])}
          size={28}
          style={{cursor: 'pointer'}}
          weight="duotone"
        />
        <Trash
          color={color}
          onClick={() => deleteTransaction(id)}
          size={28}
          style={{cursor: 'pointer'}}
          weight="duotone"
        />
      </StyledTransactionButtons>
    </StyledTransactionItem>
  );
};

export default TransactionItem;
