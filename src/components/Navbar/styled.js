import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

export const StyledLink = styled(Link)`
  padding: 1rem;
  font-size: 2rem;
  line-height: 1.2;
  text-decoration: none;
  text-align: center;
  color: ${({status, theme}) => status === 'active' ? theme.expenseColor : theme.expenseAccentColor};
  cursor: ${({status}) => status === 'active' ? 'auto' : 'pointer'};
`;
