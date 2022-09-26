import React from 'react';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionHistory from './components/TransactionHistory';

import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionHistory />
      <TransactionForm />
    </GlobalProvider>
  );
}

export default App;
