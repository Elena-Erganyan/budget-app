import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  // for demonstration purposes
  transactions: [
    {
      id: 1,
      date: new Date('2022-09-12').getTime(),
      type: 'Expense',
      category: 'Food',
      title: 'Meat and vegetables',
      amount: 150,
    },
    {
      id: 2,
      date: new Date('2022-09-10').getTime(),
      type: 'Income',
      category: 'Salary',
      title: 'Cash',
      amount: 600,
    },
    {
      id: 3,
      date: new Date('2022-09-15').getTime(),
      type: 'Expense',
      category: 'Clothes',
      title: 'Pants',
      amount: 250,
    },
    {
      id: 4,
      date: new Date('2022-09-11').getTime(),
      type: 'Income',
      category: 'Gift',
      title: 'Cash',
      amount: 100,
    },
    {
      id: 5,
      date: new Date('2022-10-01').getTime(),
      type: 'Expense',
      category: 'Other expenses',
      title: 'Cinema',
      amount: 50,
    },
    {
      id: 6,
      date: new Date('2022-10-05').getTime(),
      type: 'Income',
      category: 'Other income',
      title: 'Cash',
      amount: 200,
    },
  ],
  incomeCategories: [
    'Salary',
    'Part-time job',
    'Gift',
    'Other income',
  ],
  expenseCategories: [
    'Food',
    'Clothes',
    'Transportation',
    'Internet',
    'Mobile service',
    'Other expenses',
  ],
  categoryIcons: {
    'Salary': 'Money',
    'Part-time job': 'Coins',
    'Gift': 'Gift',
    'Other income': 'Wallet',
    'Food': 'Hamburger',
    'Clothes': 'TShirt',
    'Transportation': 'Car',
    'Internet': 'Globe',
    'Mobile service': 'DeviceMobile',
    'Other expenses': 'Receipt',
  },
  filters: {
    type: 'Income',
    category: 'All',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    sortType: 'dateDesc',
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(item) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: item,
    });
  }

  function replaceTransaction(id, newItem) {
    dispatch({
      type: 'REPLACE_TRANSACTION',
      payload: { id, newItem },
    });
  }

  function saveFilters(filters) {
    dispatch({
      type: 'SAVE_FILTERS',
      payload: filters,
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      incomeCategories: state.incomeCategories,
      expenseCategories: state.expenseCategories,
      categoryIcons: state.categoryIcons,
      deleteTransaction,
      addTransaction,
      replaceTransaction,
      filters: state.filters,
      saveFilters,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useTransactionContext = () => useContext(GlobalContext);
