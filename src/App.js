import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ManageTransactions from './pages/ManageTransactions';
import { GlobalProvider } from './context/globalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-transactions" element={<ManageTransactions />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
