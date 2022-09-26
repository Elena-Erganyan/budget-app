import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTransactionContext } from '../../context/globalState';
import {
  StyledTransactionWrapper,
  StyledTransactionHeader,
  StyledTransactionForm,
  StyledTransactionLabel,
  StyledTransactionInput,
} from './styled';
import Button from '../Button';

const TransactionForm = ({item, setReadOnly}) => {
  const [date, setDate] = useState((item && item.date) || new Date().toISOString().split('T')[0]);
  const [title, setTitle] = useState((item && item.title) || '');
  const [amount, setAmount] = useState((item && item.amount) || '');
  const [type, setType] = useState((item && item.type) || 'income');

  const { addTransaction, replaceTransaction } = useTransactionContext();

  const onSubmit = (evt) => {
    evt.preventDefault();
    const transaction = {
      id: item ? item.id : uuidv4(),
      date,
      type,
      title,
      amount,
    };

    if (item) {
      replaceTransaction(item.id, transaction);
      setReadOnly(true);
    } else {
      addTransaction(transaction);
      setDate(new Date().toISOString().split('T')[0]);
      setTitle('');
      setAmount('');
      setType('income');
    } 
  };

  return (
    <StyledTransactionWrapper item={item}>
      {item
        ? <StyledTransactionHeader>Edit transaction</StyledTransactionHeader>
        : <StyledTransactionHeader>New transaction</StyledTransactionHeader>}
      <StyledTransactionForm onSubmit={(evt) => onSubmit(evt)}>
        <div>
          <StyledTransactionLabel>
            Date
            <StyledTransactionInput
              onChange={(evt) => setDate(evt.target.value)}
              pattern="\d{4}-\d{2}-\d{2}"
              required
              type="date"
              value={date}
            />
          </StyledTransactionLabel>
          <StyledTransactionLabel>
            Title
            <StyledTransactionInput
              onChange={(evt) => setTitle(evt.target.value)}
              required
              type="text"
              value={title}
            />
          </StyledTransactionLabel>
          <StyledTransactionLabel>
            Amount
            <StyledTransactionInput
              min={0.01}
              step={0.01}
              onChange={(evt) => setAmount(+evt.target.value)}
              required
              type="number"
              value={amount}
            />
          </StyledTransactionLabel>
        </div>
        <div>
          <div>
            <div>
              <StyledTransactionInput
                id="income"
                checked={type === 'income'}
                color="#4C8D26"
                name="type"
                onChange={() => setType("income")}
                type="radio"
              />
              <StyledTransactionLabel color="#4C8D26" htmlFor="income" isSwitch>Income</StyledTransactionLabel>
            </div>
            <div>
              <StyledTransactionInput
                id="expense"
                checked={type === 'expense'}
                color="#882380"
                name="type"
                onChange={() => setType("expense")}
                type="radio"
              />
              <StyledTransactionLabel color="#882380" htmlFor="expense" isSwitch>Expense</StyledTransactionLabel>
            </div>
          </div>
        {item ?
          <div>
            <Button color="#DE60CA" onClick={() => setReadOnly(true)} type="button">Cancel</Button>
            <Button color="#DE60CA" primary>Save changes</Button>
          </div>
          : <Button color="#DE60CA" primary>Add transaction</Button>}
        </div>
      </StyledTransactionForm>
    </StyledTransactionWrapper>
  );
};

export default TransactionForm;
