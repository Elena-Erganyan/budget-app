import { useState } from 'react';
import { useTransactionContext } from '../../context/globalState';
import { useAuthContext } from '../../context/authState';
import Input from '../Input';
import {
  StyledTransactionWrapper,
  StyledTransactionHeader,
  StyledTransactionForm,
  StyledFieldsWrapper,
  StyledTypesWrapper,
  StyledTransactionError,
  StyledButtons,
  StyledFormButton,
} from './styled';
import { useTheme } from 'styled-components';

const TransactionForm = ({item, setItemsToEdit}) => {
  
  const [date, setDate] = useState((item && item.date) || new Date().toISOString().split('T')[0]);
  const [title, setTitle] = useState((item && item.title) || '');
  const [amount, setAmount] = useState((item && item.amount) || '');
  const [type, setType] = useState((item && item.type) || 'Income');
  const [category, setCategory] = useState((item && item.category) || 'Salary');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const {
    addTransaction,
    replaceTransaction,
    incomeCategories,
    expenseCategories
  } = useTransactionContext();

  const { user } = useAuthContext();

  const theme = useTheme();

  const categories = type === 'Income' ? incomeCategories : expenseCategories;

  const typeHandler = (type) => {
    setType(type);
    setCategory(type === 'Income' ? 'Salary' : 'Food');
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }
    
    const transaction = {
      date,
      type,
      category,
      title,
      amount,
    };

    // update a transaction
    if (item) {
      const response = await fetch('/api/transactions/' + item._id, {
        method: 'PATCH',
        body: JSON.stringify(transaction),
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (response.ok) {
        replaceTransaction(json);
        setItemsToEdit(prevState => prevState.filter((oldId) => oldId !== item._id));
      } else {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
    } else {
      // create a new transaction
      const response = await fetch('/api/transactions/', {
        method: 'POST',
        body: JSON.stringify(transaction),
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (response.ok) {
        addTransaction(json);
        setEmptyFields([]);
        setError(null);
        setTitle('');
        setAmount('');
      } else {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
    }
  };

  return (
    <StyledTransactionWrapper item={item}>
      {item
        ? <StyledTransactionHeader>Edit transaction</StyledTransactionHeader>
        : <StyledTransactionHeader>New transaction</StyledTransactionHeader>}
      <StyledTransactionForm onSubmit={(evt) => onSubmit(evt)}>
        <StyledFieldsWrapper>
          <Input
            error={emptyFields.includes('date')}
            onChange={(evt) => setDate(evt.target.value)}
            pattern="\d{4}-\d{2}-\d{2}"
            text="Date"
            type="date"
            value={date.split('T')[0]}
          />
          <Input
            error={emptyFields.includes('title')}
            onChange={(evt) => setTitle(evt.target.value)}
            text="Title"
            type="text"
            value={title}
          />
          <Input
            error={emptyFields.includes('amount')}
            min={0.01}
            step={0.01}
            onChange={(evt) => setAmount(+evt.target.value)}
            text="Amount"
            type="number"
            value={amount}
          />
        </StyledFieldsWrapper>
        <StyledFieldsWrapper>
          <StyledTypesWrapper>
            <Input
              id={item ? 'income' + item._id : 'income'}
              checked={type === 'Income'}
              color={theme.incomeColor}
              name={item ? 'type' + item._id : 'type'}
              onChange={() => typeHandler('Income')}
              text="Income"
              type="radio"
            />
            <Input
              id={item ? 'expense' + item._id : 'expense'}
              checked={type === 'Expense'}
              color={theme.expenseColor}
              name={item ? 'type' + item._id : 'type'}
              onChange={() => typeHandler('Expense')}
              text="Expense"
              type="radio"
            />
          </StyledTypesWrapper>
          <Input
            text="Category"
            type="select"
            value={category}
            onChange={(evt) => setCategory(evt.target.value)}
            options={categories.map((category) => ({value: category, text: category}))}
          />
        {item ?
          <StyledButtons>
            <StyledFormButton color={theme.expenseAccentColor} primary edit>Save changes</StyledFormButton>
            <StyledFormButton
              color={theme.expenseAccentColor}
              edit
              onClick={() => setItemsToEdit(prevState => prevState.filter((oldId) => oldId !== item._id))}
              type="button"
            >
              Cancel
            </StyledFormButton>
          </StyledButtons>
          : <StyledFormButton color={theme.expenseAccentColor} primary>Add transaction</StyledFormButton>}
        </StyledFieldsWrapper>
        {error && <StyledTransactionError>{error}</StyledTransactionError>}
      </StyledTransactionForm>
    </StyledTransactionWrapper>
  );
};

export default TransactionForm;