import styled from "styled-components";
import { StyledButton } from "../Button/styled";
import { StyledMessage } from "../Message/styled";

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
`;

export const StyledFieldsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 601px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const StyledTypesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  position: relative;
  width: 100%;
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  position: relative;
  width: 100%;
`;

export const StyledFormButton = styled(StyledButton)`
  order: ${({primary}) => primary ? 1 : 0};
  min-height: 3.4rem;
  width: ${({edit}) => edit ? 'auto' : '100%'};
  flex-grow: ${({edit}) => edit ? '1' : '0'};
`;

export const StyledTransactionError = styled(StyledMessage)`
  align-self: center;
`;
