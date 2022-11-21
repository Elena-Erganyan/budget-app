import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLogout } from '../../customHooks/useLogout';
import { useAuthContext } from '../../context/authState';
import { useTheme } from 'styled-components';
import { List, X } from 'phosphor-react';
import {
  StyledNavbar,
  StyledMenu,
  StyledLink,
  StyledLogo,
  StyledText,
  StyledOverlay,
  StyledNavButton,
} from './styled';
import logo from '../../images/logo.png';
import logoDark from '../../images/logo-dark.png';

const Navbar = () => {
  const location = useLocation();
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const theme = useTheme();

  const closeMenu = () => {
    menuRef.current.style.left = '-100%';
    overlayRef.current.style.display = 'none';
  };

  const openMenu = () => {
    menuRef.current.style.left = '0';
    overlayRef.current.style.display = 'block';
  };

  return (
    <StyledNavbar>
      <List onClick={openMenu} size={35} />
      <StyledLink
        status={location.pathname === '/' ? 'active' : null}
        to="/"
      >
        <StyledLogo>
          <img alt='logo' src={theme.name === 'light' ? logo : logoDark} />
          <span>Budget App</span>
        </StyledLogo>
      </StyledLink>
      <StyledMenu ref={menuRef}>
        {user ? (
          <>
          <StyledLink
            status={location.pathname === '/manage-transactions' ? 'active' : null}
            to="/manage-transactions"
          >
            Manage transactions
          </StyledLink>
          <StyledText>{user.email}</StyledText>
          <StyledText
            color={theme.expenseAccentColor}
            onClick={logout}
            status="active"
          >
            Log out
          </StyledText>
          </>
        ) : (
          <>
            <StyledNavButton
              as={Link}
              color={theme.expenseColors[2]}
              status={location.pathname === '/login' ? 'active' : null}
              to="/login"
            >
              Log in
            </StyledNavButton>
            <StyledNavButton
              as={Link}
              color={theme.expenseColors[2]}
              status={location.pathname === '/register' ? 'active' : null}
              to="/register"
              primary
            >
              Register
            </StyledNavButton>
          </>
        )}
        <X onClick={closeMenu} size={28} />
      </StyledMenu>
      <StyledOverlay ref={overlayRef}/>
    </StyledNavbar>
  );
};

export default Navbar;