import styled from "styled-components";

export const StyledRadioBtn = styled.div` 
  label {
    width: 100%;
    background-color: white;
    border: 0.2rem solid #D5FB00;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
  }
  input {
    display: none;
  }
  input:checked + label {
    background-color: #D5FB00;
  }
`;
