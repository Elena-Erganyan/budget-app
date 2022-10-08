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

const TransactionForm = ({item, setItemsToEdit}) => {
  
  const [date, setDate] = useState((item && item.date) || Date.now());
  const [title, setTitle] = useState((item && item.title) || '');
  const [amount, setAmount] = useState((item && item.amount) || '');
  const [type, setType] = useState((item && item.type) || 'Income');
  const [category, setCategory] = useState((item && item.category) || 'Salary');

  const {
    addTransaction,
    replaceTransaction,
    incomeCategories,
    expenseCategories
  } = useTransactionContext();

  const categories = type === 'Income' ? incomeCategories : expenseCategories;

  const typeHandler = (type) => {
    setType(type);
    setCategory(type === 'Income' ? 'Salary' : 'Food');
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const transaction = {
      id: item ? item.id : uuidv4(),
      date,
      type,
      category,
      title,
      amount,
    };

    if (item) {
      replaceTransaction(item.id, transaction);
      setItemsToEdit(prevState => prevState.filter((oldId) => oldId !== item.id))
    } else {
      addTransaction(transaction);
      setDate(Date.now());
      setTitle('');
      setAmount('');
      setType('Income');
      setCategory('Salary');
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
              onChange={(evt) => setDate(evt.target.valueAsNumber)}
              pattern="\d{4}-\d{2}-\d{2}"
              required
              type="date"
              value={new Date(date).toISOString().split('T')[0]}
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
            <StyledTransactionInput
              id={item ? 'income' + item.id : 'income'}
              checked={type === 'Income'}
              color="#4C8D26"
              name={item ? 'type' + item.id : 'type'}
              onChange={() => typeHandler('Income')}
              type="radio"
            />
            <StyledTransactionLabel
              color="#4C8D26"
              htmlFor={item ? 'income' + item.id : 'income'}
              isSwitch
            >
              Income
            </StyledTransactionLabel>
            <StyledTransactionInput
              id={item ? 'expense' + item.id : 'expense'}
              checked={type === 'Expense'}
              color="#882380"
              name={item ? 'type' + item.id : 'type'}
              onChange={() => typeHandler('Expense')}
              type="radio"
            />
            <StyledTransactionLabel
              color="#882380"
              htmlFor={item ? 'expense' + item.id : 'expense'}
              isSwitch
            >
              Expense
            </StyledTransactionLabel>
          </div>
          <StyledTransactionLabel>
            Category
            <StyledTransactionInput
              as="select"
              value={category}
              onChange={(evt) => setCategory(evt.target.value)}
            >
              {categories.map((category, i) => <option key={i}>{category}</option>)}
            </StyledTransactionInput>
          </StyledTransactionLabel>
        {item ?
          <div>
            <Button
              color="#DE60CA"
              onClick={() => setItemsToEdit(prevState => prevState.filter((oldId) => oldId !== item.id))}
              type="button"
            >
              Cancel
            </Button>
            <Button color="#DE60CA" primary>Save changes</Button>
          </div>
          : <Button color="#DE60CA" primary>Add transaction</Button>}
        </div>
      </StyledTransactionForm>
    </StyledTransactionWrapper>
  );
};

export default TransactionForm;
