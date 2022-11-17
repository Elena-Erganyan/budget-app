import { useState } from 'react';
import { useLogin } from '../../customHooks/useLogin';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Error from '../../components/Error';
import { StyledLoginForm, StyledLoginLink } from './styled';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();

  const theme = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <h3>Log in</h3>
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
      <Button
        color={theme.name === 'light' ? theme.expenseAccentColor : theme.incomeAccentColor}
        disabled={isLoading}
        primary
      >
        Log in
      </Button>
      <p>Don't have an account yet? <StyledLoginLink to='/register'>Register</StyledLoginLink></p>
      {error && <Error>{error}</Error>}
    </StyledLoginForm>
  );
};

export default Login;
