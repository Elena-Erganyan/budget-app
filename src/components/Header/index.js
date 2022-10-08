import React from 'react';
import Navbar from '../Navbar';
import { StyledHeaderWrapper, StyledHeader } from './styled';

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>Budget app</StyledHeader>
      <Navbar/>
    </StyledHeaderWrapper>
  );
};

export default Header;
