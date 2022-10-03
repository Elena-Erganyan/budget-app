import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  // for demonstration purposes
  transactions: [
    {
      id: 1,
      date: '2022-09-10',
      type: 'Income',
      category: 'Salary',
      title: 'Cash',
      amount: 600,
    },
    {
      id: 2,
      date: '2022-09-12',
      type: 'Expense',
      category: 'Food',
      title: 'Food',
      amount: 250,
    },
    {
      id: 3,
      date: '2022-09-15',
      type: 'Expense',
      category: 'Transportation',
      title: 'Transportation',
      amount: 150,
    },
    {
      id: 4,
      date: '2022-09-15',
      type: 'Income',
      category: 'Gift',
      title: 'Gift',
      amount: 50,
    },
    {
      id: 5,
      date: '2022-09-25',
      type: 'Expense',
      category: 'Food',
      title: 'Vegetables',
      amount: 30,
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

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      incomeCategories: state.incomeCategories,
      expenseCategories: state.expenseCategories,
      categoryIcons: state.categoryIcons,
      deleteTransaction,
      addTransaction,
      replaceTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useTransactionContext = () => useContext(GlobalContext);
