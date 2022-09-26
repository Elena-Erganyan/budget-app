import React, { useState } from 'react';
import { useTransactionContext } from '../../context/globalState';
import Button from '../Button';
import NewTransaction from '../NewTransaction';
import { StyledTransactionItem } from './styled';

const TransactionItem = ({item}) => {
  const { amount, type, date, title, id } = item;
  const { deleteTransaction } = useTransactionContext();
  const [readOnly, setReadOnly] = useState(true);

  const sign = type === 'income' ? '+' : '-';
  const color = type === 'income' ? '#4C8D26' : '#882380';

  return readOnly ? (
    <StyledTransactionItem color={color}>
      <div>
        <span>{date}</span><span>{title}</span><span>{sign}${amount}</span>
      </div>
      <div>
        <Button color={color} onClick={() => setReadOnly(false)}>Edit</Button>
        <Button color={color} onClick={() => deleteTransaction(id)} primary>Delete</Button>
      </div>
    </StyledTransactionItem>
  ) : (
    <NewTransaction item={item} setReadOnly={setReadOnly} />
  )
};

export default TransactionItem;
