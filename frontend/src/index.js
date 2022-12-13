import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalState';
import { AuthContextProvider } from './context/authState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// React.StrictMode renders App.js twice, that's why email confirmation can be done twice
// in the development mode
