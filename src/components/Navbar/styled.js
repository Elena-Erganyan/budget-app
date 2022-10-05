import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
`;

export const StyledLink = styled(Link)`
  padding: 1rem;
  font-size: 2rem;
  line-height: 1.2;
  text-decoration: none;
  text-align: center;
  color: ${({disabled}) => disabled ? '#882380' : '#DE60CA'};
  cursor: ${({disabled}) => disabled ? 'auto' : 'pointer'};
`;
