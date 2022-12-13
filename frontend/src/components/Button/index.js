import { StyledButton } from './styled';

const Button = ({children, color, onClick, primary, as, to, style}) => {
  return (
    <StyledButton
      as={as}
      color={color}
      onClick={onClick}
      primary={primary}
      style={style}
      to={to}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
