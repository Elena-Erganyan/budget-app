import React from 'react';
import { StyledButton } from './styled';

const Button = ({children, color, onClick, primary, as, to}) => {
  return (
    <StyledButton
      as={as}
      color={color}
      onClick={onClick}
      primary={primary}
      to={to}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
