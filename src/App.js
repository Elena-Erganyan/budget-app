import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ManageTransactions from './pages/ManageTransactions';
import { GlobalProvider } from './context/globalState';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useToggleTheme } from './customHooks/useToggleTheme';

function App() {
  const [theme, toggleTheme] = useToggleTheme();

  return (
    <GlobalProvider>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manage-transactions" element={<ManageTransactions />} />
        </Routes>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
