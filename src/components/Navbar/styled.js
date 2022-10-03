import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  a {
    padding: 1rem;
    font-size: 2rem;
    line-height: 1.2;
    text-decoration: none;
    text-align: center;
    color: #DE60CA;
  }
  a.active {
    color: #882380;
  }
`;
