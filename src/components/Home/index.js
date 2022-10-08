import React from 'react';
import Balance from '../Balance';
import TransactionForm from '../TransactionForm';
import TransactionHistory from '../TransactionHistory';
import { StyledHome } from './styled';

const Home = () => {
  return (
    <StyledHome>
      <Balance />
      <TransactionForm />
      <TransactionHistory />
    </StyledHome>
  );
};

export default Home;
