import styled from 'styled-components';
import { fadeIn } from '../generalAnimations';
import { StyledTransactionForm } from '../TransactionForm/styled';

export const StyledManageTransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  font-size: 1.5rem;
  line-height: 1.2;
  animation: 0.5s ${fadeIn} forwards;
`;

export const StyledManageTransactionsForm = styled(StyledTransactionForm)`
  margin-bottom: 2rem;
  width: 90%;
  div {
    justify-content: center;
  }
`;

export const StyledManageTransactions = styled.div`
  width: 90%;
  text-align: center;
`;