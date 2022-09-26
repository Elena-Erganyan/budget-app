import React from 'react';
import Balance from './components/Balance';
import Header from './components/Header';
import NewTransaction from './components/NewTransaction';
import TransactionHistory from './components/TransactionHistory';

import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionHistory />
      <NewTransaction />
    </GlobalProvider>
  );
}

export default App;
