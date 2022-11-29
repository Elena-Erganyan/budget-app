import styled from 'styled-components';
import { fadeIn } from '../../components/generalAnimations';

export const StyledTransactionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 1rem solid ${({color}) => color};
  border-radius: 0.7rem;
  background-color: ${({theme}) => theme.backgroundAccentColor};
  box-shadow: ${({theme}) => theme.name === 'light' ? '0 0 2px 1px #cccccc' : 'none'};
  color: ${({theme}) => theme.textColor};
  animation: 0.5s ${fadeIn} forwards;

  @media (min-width: 601px) {
    flex-direction: row;
  }
`;

export const StyledTransactionCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 1.7rem;
  line-height: 1.2;
  min-width: 20%; 
`;

export const StyledTransactionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
  font-size: 1.7rem;
  line-height: 1.2;
  min-width: 60%;
  width: 90%;

  @media (min-width: 601px) {
    width: auto;
  }
`;

export const StyledTransactionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  font-size: 1.7rem;
  line-height: 1.2;

  svg {
    cursor: pointer;
  }
`;

export const StyledItemText = styled.span`
  color: ${({color}) => color};
  text-align: center;
`;
