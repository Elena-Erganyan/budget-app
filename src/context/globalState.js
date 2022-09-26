import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  // for demonstration purposes
  transactions: [
    {
      id: 1,
      date: '2022-09-10',
      type: 'income',
      title: 'Cash',
      amount: 600,
    },
    {
      id: 2,
      date: '2022-09-12',
      type: 'expense',
      title: 'Food',
      amount: 250,
    },
    {
      id: 3,
      date: '2022-09-15',
      type: 'expense',
      title: 'Transportation',
      amount: 150,
    },
  ],
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
      deleteTransaction,
      addTransaction,
      replaceTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useTransactionContext = () => useContext(GlobalContext);
