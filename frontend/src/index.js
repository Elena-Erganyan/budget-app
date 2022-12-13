import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalState';
import { AuthContextProvider } from './context/authState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </AuthContextProvider>
);
