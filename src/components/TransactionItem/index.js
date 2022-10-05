import * as Icons from 'phosphor-react';
import React from 'react';
import { useTransactionContext } from '../../context/globalState';
import { StyledTransactionItem, StyledTransactionCategory } from './styled';

const { Pencil, Trash } = Icons;

const TransactionItem = ({item, setItemsToEdit}) => {
  const { amount, type, category, date, title, id } = item;
  const { deleteTransaction, categoryIcons } = useTransactionContext();

  const sign = type === 'Income' ? '+' : '-';
  const color = type === 'Income' ? '#4C8D26' : '#882380';

  const IconComponent = Icons[categoryIcons[category]];

  return (
    <StyledTransactionItem color={color}>
      <StyledTransactionCategory color={color}>
        <IconComponent color={color} size={28} weight="duotone" />
        <span>{category}</span>
      </StyledTransactionCategory>
      <div>
        <span>{date}</span><span>{title}</span><span style={{color: color}}>{sign}${amount}</span>
      </div>
      <div>
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
      </div>
    </StyledTransactionItem>
  );
};

export default TransactionItem;
