import styled from "styled-components";
import { StyledTransactionListText } from "../TransactionList/styled";

export const StyledTransactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({item}) => item ? '100%' : '90%'};
  margin-bottom: 2rem;
  color: ${({theme}) => theme.textColor};
`;
  
export const StyledTransactionHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  line-height: 1.5;
`;
  
export const StyledTransactionForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    div {
      position: relative;
      width: 33%;
      button {
        width: auto;
      }
    }
  }
  button {
    flex-grow: 1;
    width: 33%;
    min-height: 3.4rem;
  }
  @media (max-width: 600px) {
    & > div {
      flex-direction: column;
      align-items: center;
      div {
        width: auto;
      }
    }
    button {
      width: auto;
    }
  }
`;

export const StyledTransactionError = styled(StyledTransactionListText)`
  color: ${({theme}) => theme.errorColor};
`;
