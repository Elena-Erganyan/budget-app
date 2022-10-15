import React, { useState, useEffect } from 'react';
import { useTransactionContext } from '../../context/globalState';
import { filterTransactions } from './utils';
import { StyledTransactionLabel, StyledTransactionInput } from '../TransactionForm/styled';
import { StyledManageTransactionsForm } from './styled';

const TransactionFilters = ({filteredTransactions, setFilteredTransactions}) => {
  const {
    transactions,
    incomeCategories,
    expenseCategories,
    filters,
    saveFilters,
  } = useTransactionContext();
  
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
      <div>
        <div>
          <StyledTransactionInput
            id="incomeFilter"
            checked={type === 'Income'}
            color="var(--income-color)"
            name="transactionType"
            onChange={() => typeHandler('Income')}
            type="radio"
          />
          <StyledTransactionLabel
            color="var(--income-color)"
            htmlFor="incomeFilter"
            isSwitch
          >
            Income
          </StyledTransactionLabel>
          <StyledTransactionInput
            id="expenseFilter"
            checked={type === 'Expense'}
            color="var(--expense-color)"
            name="transactionType"
            onChange={() => typeHandler('Expense')}
            type="radio"
          />
          <StyledTransactionLabel
            color="var(--expense-color)"
            htmlFor="expenseFilter"
            isSwitch
          >
            Expense
          </StyledTransactionLabel>
        </div>
        <StyledTransactionLabel>
          From
          <StyledTransactionInput
            onChange={(evt) => setStartDate(evt.target.value)}
            pattern="\d{4}-\d{2}-\d{2}"
            type="date"
            value={startDate} 
          />
        </StyledTransactionLabel>
        <StyledTransactionLabel>
          To
          <StyledTransactionInput
            onChange={(evt) => setEndDate(evt.target.value)}
            pattern="\d{4}-\d{2}-\d{2}"
            type="date"
            value={endDate} 
          />
        </StyledTransactionLabel>
      </div>
      <div>
        <StyledTransactionLabel>
          Category
          <StyledTransactionInput
            as="select"
            value={category}
            onChange={(evt) => setCategory(evt.target.value)}
          >
            <option value="All">All categories</option>
            {categories.map((category, i) => <option key={i}>{category}</option>)}
          </StyledTransactionInput>
        </StyledTransactionLabel>
        <StyledTransactionLabel>
          Sort by
          <StyledTransactionInput
            as="select"
            value={sortType}
            onChange={(evt) => setSortType(evt.target.value)}
          >
            <option value="dateDesc">Date (oldest)</option>
            <option value="dateAsc">Date (newest)</option>
            <option value="amountAsc">Amount (lowest)</option>
            <option value="amountDesc">Amount (highest)</option>
          </StyledTransactionInput>
        </StyledTransactionLabel>
      </div>
    </StyledManageTransactionsForm>
  );
};

export default TransactionFilters;
