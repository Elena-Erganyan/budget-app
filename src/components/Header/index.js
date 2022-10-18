import React from 'react';
import Navbar from '../Navbar';
import ThemeToggler from '../ThemeToggler';
import { StyledHeaderWrapper, StyledHeader } from './styled';

const Header = ({ theme, toggleTheme }) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>Budget app</StyledHeader>
        <Navbar />
        <ThemeToggler theme={theme} toggleTheme={toggleTheme}/>
    </StyledHeaderWrapper>
  );
};

export default Header;
