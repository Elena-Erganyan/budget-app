import styled from 'styled-components';

export const StyledTransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${({color}) => color};
  border-left: 1rem solid ${({color}) => color};
  border-radius: 0.7rem;
  color: #223C20;
  h2 {
    font-size: 2.5rem;
    line-height: 1.5;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    font-size: 1.7rem;
    line-height: 1.2;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledTransactionCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 20%;
  span {
    color: ${({color}) => color};
    text-align: center;
  }
  @media (max-width: 600px) {
    width: auto;
  }
`;

export const StyledTransactionInfo = styled.div`
  gap: 2rem;
  min-width: 65%;
`;

export const StyledTransactionButtons = styled.div`
  gap: 1rem;
`;
