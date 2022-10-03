import * as Icon from 'phosphor-react';
import React, { useState } from 'react';
import { useTransactionContext } from '../../context/globalState';
import TransactionForm from '../TransactionForm';
import withIconComponent from '../withIconComponent';
import { StyledTransactionItem, StyledTransactionCategory } from './styled';

const TransactionItem = ({item}) => {
  const { amount, type, category, date, title, id } = item;
  const { deleteTransaction, categoryIcons } = useTransactionContext();
  const [readOnly, setReadOnly] = useState(true);

  const sign = type === 'Income' ? '+' : '-';
  const color = type === 'Income' ? '#4C8D26' : '#882380';

  const IconComponent = withIconComponent(Icon[categoryIcons[category]]);

  return readOnly ? (
    <StyledTransactionItem color={color}>
      <StyledTransactionCategory color={color}>
        <IconComponent color={color} size={28} weight="duotone" />
        <span>{category}</span>
      </StyledTransactionCategory>
      <div>
        <span>{date}</span><span>{title}</span><span style={{color: color}}>{sign}${amount}</span>
      </div>
      <div>
        <Icon.Pencil color={color} onClick={() => setReadOnly(false)} size={28} style={{cursor: 'pointer'}} weight="duotone" />
        <Icon.Trash color={color} onClick={() => deleteTransaction(id)} size={28} style={{cursor: 'pointer'}}  weight="duotone" />
      </div>
    </StyledTransactionItem>
  ) : (
    <TransactionForm item={item} setReadOnly={setReadOnly} />
  )
};

export default TransactionItem;
