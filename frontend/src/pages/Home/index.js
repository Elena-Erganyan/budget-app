import Balance from '../../components/Balance';
import TransactionForm from '../../components/TransactionForm';
import TransactionHistory from '../../components/TransactionHistory';
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
