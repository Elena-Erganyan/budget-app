import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledNavbar } from './styled';

const Navbar = () => {
  const location = useLocation();

  return (
    <StyledNavbar>
      <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
      <Link className={location.pathname === '/manage-transactions' ? 'active' : ''} to="/manage-transactions">Manage transactions</Link>
    </StyledNavbar>
  );
};

export default Navbar;