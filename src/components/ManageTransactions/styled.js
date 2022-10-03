import styled from "styled-components";
import { StyledTransactionForm } from "../TransactionForm/styled";

export const StyledManageTransactionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 70rem;
  font-size: 1.5rem;
  line-height: 1.2;
`;

export const StyledManageTransactionsForm = styled(StyledTransactionForm)`
  margin-bottom: 2rem;
  width: 90%;
`;

export const StyledManageTransactions = styled.div`
  width: 90%;
  text-align: center;
`;
