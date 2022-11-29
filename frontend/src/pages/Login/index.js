import { useState } from 'react';
import { useLogin } from '../../customHooks/useLogin';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Error from '../../components/Error';
import { useTheme } from 'styled-components';
import {
  StyledLoginForm,
  StyledLoginLink,
  StyledLoginHeader,
  StyledLoginText,
} from './styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemembered, setIsRemembered] = useState(false);
  const { login, isLoading, error } = useLogin();

  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password, isRemembered);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <StyledLoginHeader>Log in</StyledLoginHeader>
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
      <Input
        checked={isRemembered}
        id="rememberMe"
        isCheckbox={true}
        name="rememberMe"
        text="remember me"
        type="checkbox"
        onChange={() => setIsRemembered(!isRemembered)}
      />
      <Button
        color={theme.name === 'light' ? theme.expenseColors[2] : theme.incomeColor}
        disabled={isLoading}
        primary
      >
        Log in
      </Button>
      <StyledLoginText>
        Don't have an account yet? <StyledLoginLink to='/register'>Register</StyledLoginLink>
      </StyledLoginText>
      {error && <Error>{error}</Error>}
    </StyledLoginForm>
  );
};

export default Login;
