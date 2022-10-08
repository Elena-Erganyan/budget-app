import React from 'react';
import { StyledButton } from './styled';

const Button = ({children, color, onClick, primary}) => {
  return <StyledButton color={color} onClick={onClick} primary={primary}>{children}</StyledButton>
};

export default Button;
