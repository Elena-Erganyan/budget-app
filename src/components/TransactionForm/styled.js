import styled, { css } from "styled-components";

export const StyledTransactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({item}) => item ? '100%' : '90%'};
  margin-bottom: 1rem;
  color: var(--dark-color);
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
  ${({isSwitch, color}) => isSwitch ?
    css`background-color: white;
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
  background-color: white;
  color: var(--dark-color);
  border: 1px solid var(--dark-color);
  border-radius: 0.3rem;

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
    outline: 2px solid var(--dark-color);
  }
  &[type='radio']:checked + label {
    background-color: ${({color}) => color};
    color: white;
  }
`;
