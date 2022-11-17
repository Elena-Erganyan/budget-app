import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  gap: 2rem;
  padding: 2rem;

  h3 {
    font-size: 2rem;
    line-height: 1.5;
  }

  p {
    font-size: 1.7rem;
    line-height: 1.2;
    text-align: center;
  }

  label {
    width: 100%;
    max-width: 30rem;
  }
`;

export const StyledLoginLink = styled(Link)`
  font-family: 'Rosa Sans Bold', sans-serif;
  text-decoration: none;
  color: ${({theme}) => theme.name === 'light' ? theme.expenseColor : theme.incomeColor}
`;
