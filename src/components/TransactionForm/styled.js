import styled, { css } from "styled-components";

export const StyledTransactionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.item ? '100%' : '90%'};
  max-width: 70rem;
  margin-bottom: 2rem;
  color: #223C20;
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
    }
  }
  @media (max-width: 500px) {
    div {
      flex-direction: column;
      align-items: center;
      div {
        flex-direction: row;
      }
    }
  }
`;

export const StyledTransactionLabel = styled.label`
  font-size: 1.5rem;
  line-height: 1.2;
  ${({isSwitch, color}) => isSwitch ?
    css`background-color: white;
      color: ${color};
      border: 0.2rem solid ${color};
      border-radius: 0.3rem;
      padding: 0.5rem;
      cursor: pointer;
    ` :
    css`display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 33%;
    @media (max-width: 500px) {
      width: 80%;
    }
  `}
`;

export const StyledTransactionInput = styled.input`
  min-height: 3.4rem;
  width: 100%;
  font-size: 1.5rem;
  line-height: 1.2;
  padding: 0.5rem;
  background-color: white;
  color: #223C20;
  border: 1px solid #223C20;
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
    outline: 2px solid #223C20;
  }
  &[type='radio']:checked + label {
    background-color: ${props => props.color};
    color: white;
  }
`;
