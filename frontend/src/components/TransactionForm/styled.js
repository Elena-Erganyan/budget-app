import styled, { css } from "styled-components";
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

export const StyledTransactionLabel = styled.label`
  font-size: 1.7rem;
  line-height: 1.2;
  flex-grow: 1;
  ${({isSwitch, color, theme}) => isSwitch ?
    css`background-color: ${theme.backgroundColor};
      color: ${color};
      min-height: 3.4rem;
      border: 0.2rem solid ${color};
      border-radius: 0.3rem;
      padding: 0.5rem;
      text-align: center;
      cursor: pointer;
    ` :
    css`display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 33%;   
    @media (max-width: 600px) {
      width: 100%;
    }
  `}
`;

export const StyledTransactionInput = styled.input`
  min-height: 3.4rem;
  width: 100%;
  font-size: 1.7rem;
  line-height: 1.2;
  padding: 0.5rem;
  background-color: ${({theme}) => theme.backgroundAccentColor}; 
  color: ${({theme}) => theme.textColor};
  border: ${({theme, error}) => error ? `2px solid ${theme.errorColor}` : 'none'};
  border-radius: 0.3rem;
  box-shadow: ${({theme}) => theme.backgroundAccentColor === '#ffffff' ? '0 0 2px 1px #cccccc' : 'none'};

  &[type='radio'] {
    position: absolute;
    left: 1rem;
    z-index: -1;
    width: 0;
    height: 0;
    &:focus {
      border: none;
    }
  }
  &[type="radio"]:focus-visible + label {
    outline: 2px solid ${({theme}) => theme.textColor};
  }
  &[type='radio']:checked + label {
    background-color: ${({color}) => color};
    color: ${({theme}) => theme.backgroundAccentColor};
  }
`;

export const StyledTransactionError = styled(StyledTransactionListText)`
  color: ${({theme}) => theme.errorColor};
`;
