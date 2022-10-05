import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledNavbar, StyledLink } from './styled';

const Navbar = () => {
  const location = useLocation();

  return (
    <StyledNavbar>
      <StyledLink
        status={location.pathname === '/' ? 'active' : null}
        to="/">Home
      </StyledLink>
      <StyledLink
        status={location.pathname === '/manage-transactions' ? 'active' : null}
        to="/manage-transactions">Manage transactions
      </StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;