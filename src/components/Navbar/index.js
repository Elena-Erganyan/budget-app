import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledNavbar, StyledLink } from './styled';

const Navbar = () => {
  const location = useLocation();

  return (
    <StyledNavbar>
      <StyledLink
        disabled={location.pathname === '/'}
        to="/"
      >
        Home
      </StyledLink>
      <StyledLink
        disabled={location.pathname === '/manage-transactions'}
        to="/manage-transactions"
      >
        Manage transactions
      </StyledLink>
    </StyledNavbar>
  );
};

export default Navbar;