import { useTransactionContext } from '../../context/globalState';
import TransactionList from '../TransactionList';
import { StyledTransactionHistory, StyledTransactionHistoryHeader } from './styled';

const TransactionHistory = () => {
  const { transactions } = useTransactionContext();

  return (
    <StyledTransactionHistory>
      <StyledTransactionHistoryHeader>History</StyledTransactionHistoryHeader>
      <TransactionList
        text="Your transactions will be shown here"
        transactions={transactions}
      />
    </StyledTransactionHistory>
  );
};

export default TransactionHistory;
