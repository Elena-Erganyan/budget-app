import styled from "styled-components";

export const StyledNewTransaction = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.item ? '100%' : '90%'};
  max-width: 70rem;
  margin-bottom: 2rem;
  color: #223C20;
  h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 1.5;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 33%;
    font-size: 1.5rem;
    line-height: 1.2;
  }
  input {
    min-height: 3.4rem;
    width: 100%;
    font-size: 1.5rem;
    line-height: 1.2;
    padding: 0.5rem;
    color: #223C20;
    border: 1px solid #223C20;
    border-radius: 0.3rem;
  }
  @media (max-width: 500px) {
    form div {
      flex-direction: column;
      div {
        flex-direction: row;
      }
    }
    label {
      width: 80%;
    }
  }
`;
