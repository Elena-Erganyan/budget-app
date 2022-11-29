import { createContext, useContext, useReducer } from 'react';
import { useAuthContext } from './authState';
import reducer from './reducer';

const initialState = {
  transactions: [],
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
  formData: {
    date: new Date().toISOString().split('T')[0],
    type: 'Income',
    category: 'Salary',
    title: '',
    amount: '',
  },
  filters: {
    type: 'Income',
    category: 'All',
    startDate: '', // is set in the GlobalProvider below, because we can't use hooks on the top level 
    endDate: new Date().toISOString().split('T')[0],
    sortType: 'dateDesc',
  },
};

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const { user } = useAuthContext();
  if (user) {
    initialState.filters.startDate = user.createdAt.split('T')[0];
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function setTransactions(items) {
    dispatch({
      type: 'SET_TRANSACTIONS',
      payload: items,
    });
  }

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

  function replaceTransaction(newItem) {
    dispatch({
      type: 'REPLACE_TRANSACTION',
      payload: newItem,
    });
  }

  function saveFormData(data) {
    dispatch({
      type: 'SAVE_FORM_DATA',
      payload: data,
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
      setTransactions,
      deleteTransaction,
      addTransaction,
      replaceTransaction,
      formData: state.formData,
      saveFormData,
      filters: state.filters,
      saveFilters,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useTransactionContext = () => useContext(GlobalContext);
