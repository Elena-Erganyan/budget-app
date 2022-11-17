import { useState } from 'react';
import { useRegister} from '../../customHooks/useRegister';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Error from '../../components/Error';
import { StyledLoginForm, StyledLoginLink } from '../Login/styled';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoading, error } = useRegister();

  const theme = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await register(email, password);
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <h3>Register</h3>
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
        color={theme.incomeAccentColor}
        disabled={isLoading}
        primary
      >
        Register
      </Button>
      <p>Have an account already? <StyledLoginLink to='/login'>Log in</StyledLoginLink></p>
      {error && <Error>{error}</Error>}
    </StyledLoginForm>
  );
};

export default Register;
