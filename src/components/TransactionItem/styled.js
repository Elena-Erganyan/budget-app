import styled from "styled-components";

export const StyledTransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${props => props.color};
  border-left: 1rem solid ${props => props.color};
  border-radius: 0.7rem;
  color: #223C20;
  h2 {
    font-size: 2.5rem;
    line-height: 1.5;
  }
  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1.5rem;
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const StyledTransactionCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  span {
    color: ${props => props.color};
    text-align: center;
  }
`;
