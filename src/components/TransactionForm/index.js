import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTransactionContext } from '../../context/globalState';
import { StyledNewTransaction } from './styled';
import Button from '../Button';
import RadioBtn from '../RadioBtn';

const NewTransaction = ({item, setReadOnly}) => {
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
    <StyledNewTransaction item={item}>
      {item ? <h2>Edit transaction</h2> : <h2>New transaction</h2>}
      <form onSubmit={(evt) => onSubmit(evt)}>
        <div>
          <label>
            Date
            <input
              onChange={(evt) => setDate(evt.target.value)}
              pattern="\d{4}-\d{2}-\d{2}"
              required
              type="date"
              value={date}
            />
          </label>
          <label>
            Title
            <input
              onChange={(evt) => setTitle(evt.target.value)}
              required
              type="text"
              value={title}
            />
          </label>
          <label>
            Amount
            <input
              min={0.01}
              step={0.01}
              onChange={(evt) => setAmount(+evt.target.value)}
              required
              type="number"
              value={amount}
            />
          </label>
        </div>
        <div>
          <div>
            <RadioBtn
              checked={type === 'income'}
              name="type"
              onChange={(evt) => setType(evt.target.value)}
              title="Income"
              value="income"
            />
            <RadioBtn
              checked={type === 'expense'}
              name="type"
              onChange={(evt) => setType(evt.target.value)}
              title=" Expense"
              value="expense"
            />
          </div>
        {item ?
          <div>
            <Button color="#DE60CA" onClick={() => setReadOnly(true)} type="button">Cancel</Button>
            <Button color="#DE60CA" primary>Save changes</Button>
          </div>
          : <Button color="#DE60CA" primary>Add transaction</Button>}
        </div>
      </form>
    </StyledNewTransaction>
  );
};

export default NewTransaction;