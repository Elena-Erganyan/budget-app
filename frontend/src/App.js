import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ManageTransactions from './pages/ManageTransactions';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import { useTransactionContext } from './context/globalState';
import { useAuthContext } from './context/authState';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useToggleTheme } from './customHooks/useToggleTheme';

function App() {
  const [theme, toggleTheme] = useToggleTheme();
  const { setTransactions } = useTransactionContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions', {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        setTransactions(json);
      }
    };
    if (user) {
      fetchTransactions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <BrowserRouter basename={'/budget-app'}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={user ? <Home /> : <Landing />} />
          <Route path="/manage-transactions" element={user ? <ManageTransactions /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
