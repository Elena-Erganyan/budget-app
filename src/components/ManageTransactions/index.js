import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTransactionContext } from '../../context/globalState';
import Button from '../Button';
import TransactionItem from '../TransactionItem';
import { StyledTransactionLabel, StyledTransactionInput } from '../TransactionForm/styled';
import { StyledManageTransactionsWrapper, StyledManageTransactions, StyledManageTransactionsForm } from './styled';

const Categories = () => {
  const [type, setType] = useState('Income');
  const [category, setCategory] = useState('All');
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [sortType, setSortType] = useState('dateDesc');
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  
  const { transactions, incomeCategories, expenseCategories } = useTransactionContext();
  const categories = type === 'Income' ? incomeCategories : expenseCategories;

  useEffect(() => {
    filterTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  const typeHandler = (type) => {
    setType(type);
    setCategory('All');
  };

  const filterTransactions = () => {
    if (category === 'All') {
      setFilteredTransactions(transactions.filter((item) => {
        return type === item.type && item.date >= startDate && item.date <= endDate;
      }).sort((a, b) => sortTransactions(a, b, sortType)));
    } else {
      setFilteredTransactions(transactions.filter((item) => {
        return category === item.category && item.date >= startDate && item.date <= endDate;
      }).sort((a, b) => sortTransactions(a, b, sortType)));
    }
  };

  const sortTransactions = (a, b, sortType) => {
    switch(sortType) {
      case 'dateAsc':
        return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
      case 'dateDesc':
        return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
      case 'amountAsc':
        return a.amount - b.amount;
      case 'amountDesc':
        return b.amount - a.amount;
      default:
        return;
    }
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    filterTransactions();
  };

  return (
    <StyledManageTransactionsWrapper>
      <StyledManageTransactionsForm onSubmit={(evt) => onSubmit(evt)}>
        <div>
          <div>
            <div>
              <StyledTransactionInput
                id="income"
                checked={type === 'Income'}
                color="#4C8D26"
                name="type"
                onChange={() => typeHandler("Income")}
                type="radio"
              />
              <StyledTransactionLabel color="#4C8D26" htmlFor="income" isSwitch>Income</StyledTransactionLabel>
            </div>
            <div>
              <StyledTransactionInput
                id="expense"
                checked={type === 'Expense'}
                color="#882380"
                name="type"
                onChange={() => typeHandler("Expense")}
                type="radio"
              />
              <StyledTransactionLabel color="#882380" htmlFor="expense" isSwitch>Expense</StyledTransactionLabel>
            </div>
          </div>
          <StyledTransactionLabel>
            From
            <StyledTransactionInput onChange={(evt) => setStartDate(evt.target.value)} type="date" value={startDate} />
          </StyledTransactionLabel>
          <StyledTransactionLabel>
            To
            <StyledTransactionInput onChange={(evt) => setEndDate(evt.target.value)} type="date" value={endDate} />
          </StyledTransactionLabel>
        </div>
        <div>
          <StyledTransactionLabel>
            Category
            <StyledTransactionInput as="select" value={category} onChange={(evt) => setCategory(evt.target.value)}>
              <option value="All">All categories</option>
              {categories.map((category, i) => <option key={i + 1}>{category}</option>)}
            </StyledTransactionInput>
          </StyledTransactionLabel>
          <StyledTransactionLabel>
            Sort by
            <StyledTransactionInput as="select" value={sortType} onChange={(evt) => setSortType(evt.target.value)}>
              <option key={0} value="dateDesc">Date (oldest)</option>
              <option key={1} value="dateAsc">Date (newest)</option>
              <option key={2} value="amountAsc">Amount (lowest)</option>
              <option key={3} value="amountDesc">Amount (highest)</option>
            </StyledTransactionInput>
          </StyledTransactionLabel>
          <Button color="#DE60CA" primary>Show transactions</Button>
        </div>
      </StyledManageTransactionsForm>
      <StyledManageTransactions>
        {filteredTransactions.length > 0
        ? filteredTransactions.map((item) =>
          <TransactionItem
            item={item}
            key={item.id}
          />)
        : <div>No transactions with the selected parameters</div>}
      </StyledManageTransactions>
    </StyledManageTransactionsWrapper>
  );
};

export default Categories;