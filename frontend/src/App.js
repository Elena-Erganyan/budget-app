import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ManageTransactions from './pages/ManageTransactions';
import { useAuthContext } from './context/authState';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useToggleTheme } from './customHooks/useToggleTheme';

function App() {
  const [theme, toggleTheme] = useToggleTheme();
  const { user } = useAuthContext();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <BrowserRouter basename={'/budget-app'}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/manage-transactions" element={user ? <ManageTransactions /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
