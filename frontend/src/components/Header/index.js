import React from 'react';
import Navbar from '../Navbar';
import ThemeToggler from '../ThemeToggler';
import { StyledHeader, StyledHeaderWrapper } from './styled';

const Header = ({ theme, toggleTheme }) => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Navbar />
        <ThemeToggler theme={theme} toggleTheme={toggleTheme}/>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
