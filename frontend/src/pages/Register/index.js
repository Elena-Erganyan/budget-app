import { useState } from 'react';
import { useRegister} from '../../customHooks/useRegister';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Error from '../../components/Error';
import { useTheme } from 'styled-components';
import {
  StyledLoginForm,
  StyledLoginLink,
  StyledLoginHeader,
  StyledLoginText,
} from '../Login/styled';
import { StyledSmallText } from './styled';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoading, error } = useRegister();

  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();

    register(email, password);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <StyledLoginHeader>Register</StyledLoginHeader>
      <Input
        text="Email:"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <Input
        text="Password:"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <StyledSmallText>
        Should consist of minimum 8 characters and include small and capital letters, numbers and symbols
      </StyledSmallText>
      <Button
        color={theme.name === 'light' ? theme.expenseColors[2] : theme.incomeAccentColor}
        disabled={isLoading}
        primary
      >
        Register
      </Button>
      <StyledLoginText>
        Have an account already? <StyledLoginLink to='/login'>Log in</StyledLoginLink>
      </StyledLoginText>
      {error && <Error>{error}</Error>}
    </StyledLoginForm>
  );
};

export default Register;
