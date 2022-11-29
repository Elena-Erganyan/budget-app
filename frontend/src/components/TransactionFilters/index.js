import { useState, useEffect } from 'react';
import { useTransactionContext } from '../../context/globalState';
import { filterTransactions } from './utils';
import Input from '../Input';
import { StyledManageTransactionsForm } from './styled';
import { useTheme } from 'styled-components';
import { StyledFieldsWrapper, StyledTypesWrapper } from '../TransactionForm/styled';

const TransactionFilters = ({setFilteredTransactions}) => {
  const {
    transactions,
    incomeCategories,
    expenseCategories,
    filters,
    saveFilters,
  } = useTransactionContext();

  const theme = useTheme();
  
  const [type, setType] = useState(filters.type);
  const [category, setCategory] = useState(filters.category);
  const [startDate, setStartDate] = useState(filters.startDate);
  const [endDate, setEndDate] = useState(filters.endDate);
  const [sortType, setSortType] = useState(filters.sortType);

  const categories = type === 'Income' ? incomeCategories : expenseCategories;

  useEffect(() => {
    filterTransactions(setFilteredTransactions, transactions, category, type, startDate, endDate, sortType);
    saveFilters({type, category, startDate, endDate, sortType});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions, type, category, startDate, endDate, sortType]);

  const typeHandler = (type) => {
    setType(type);
    setCategory('All');
  };

  return (
    <StyledManageTransactionsForm>
      <StyledFieldsWrapper>
        <StyledTypesWrapper>
          <Input
            checked={type === 'Income'}
            color={theme.incomeColor}
            id="incomeFilter"
            isSwitch={true}
            name="transactionType"
            onChange={() => typeHandler('Income')}
            text="Income"
            type="radio"
          />
          <Input
            checked={type === 'Expense'}
            color={theme.expenseColor}
            isSwitch={true}
            id="expenseFilter"
            name="transactionType"
            onChange={() => typeHandler('Expense')}
            text="Expense"
            type="radio"
          />
        </StyledTypesWrapper>
        <Input
          onChange={(evt) => setStartDate(evt.target.value)}
          pattern="\d{4}-\d{2}-\d{2}"
          text="From"
          type="date"
          value={startDate} 
        />
        <Input
          onChange={(evt) => setEndDate(evt.target.value)}
          pattern="\d{4}-\d{2}-\d{2}"
          text="To"
          type="date"
          value={endDate} 
        />
      </StyledFieldsWrapper>
      <StyledFieldsWrapper>
        <Input
          onChange={(evt) => setCategory(evt.target.value)}
          options={[
            {value: 'All', text: 'All categories'},
            ...categories.map((category) => ({value: category, text: category})),
          ]}
          text="Category"
          type="select"
          value={category}
        />
        <Input
          onChange={(evt) => setSortType(evt.target.value)}
          options={[
            {value: 'dateDesc', text: 'Date (oldest)'},
            {value: 'dateAsc', text: 'Date (newest)'},
            {value: 'amountAsc', text: 'Amount (lowest)'},
            {value: 'amountDesc', text: 'Amount (highest)'},
          ]}
          text="Sort by"
          type="select"
          value={sortType}
        />
      </StyledFieldsWrapper>
    </StyledManageTransactionsForm>
  );
};

export default TransactionFilters;
