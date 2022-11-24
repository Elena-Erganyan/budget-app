import styled from "styled-components";
import { StyledButton } from "../Button/styled";
import { StyledError } from '../Error/styled';

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
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTypesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  position: relative;
  width: 33%;

  @media (max-width: 600px) {
    width: auto;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  position: relative;
  width: 33%;

  @media (max-width: 600px) {
    width: auto;
  }
`;

export const StyledFormButton = styled(StyledButton)`
  flex-grow: 1;
  order: ${({primary}) => primary ? 1 : 0};
  width: ${({edit}) => edit ? 'auto' : '33%'};
  min-height: 3.4rem;

  @media (max-width: 600px) {
    width: auto;
  }
`;

export const StyledTransactionError = styled(StyledError)`
  align-self: center;
`;
