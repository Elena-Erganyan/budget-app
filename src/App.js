import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ManageTransactions from './components/ManageTransactions';
import { GlobalProvider } from './context/globalState';
import { Animation } from './styled';

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransistionStage('fadeOut');
    }
  }, [location, displayLocation]);

  return (
    <GlobalProvider>
      <Header />
      <Animation
        transitionStage={transitionStage}
        onAnimationEnd={() => {
          if (transitionStage === 'fadeOut') {
            setTransistionStage('fadeIn');
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/manage-transactions" element={<ManageTransactions />} />
        </Routes>
      </Animation>
    </GlobalProvider>
  );
}

export default App;
