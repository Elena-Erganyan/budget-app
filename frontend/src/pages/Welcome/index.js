import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from '../../components/Button';
import { useTheme } from "styled-components";
import {
  StyledWelcome,
  StyledWelcomeWrapper,
  StyledWelcomeImage,
  StyledWelcomeHeader,
} from "./styled";
import congrats from '../../images/congrats.jpg';

const Welcome = () => {
  const theme = useTheme();
  const { confirmationCode } = useParams();
  const [message, setMessage] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(null);

  useEffect(() => {
    const confirmUser = async () => {
      const response = await fetch('/api/user/confirm/' + confirmationCode, {
        headers: {
          'Authorization': `Bearer ${confirmationCode}`,
        },
      });

      const json = await response.json();

      setIsSuccessful(response.ok);
      setMessage(json.message);
    }
      
    confirmUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return typeof isSuccessful === 'boolean' && (
    <StyledWelcome>
      {isSuccessful && <StyledWelcomeImage alt="congrats" src={congrats} />}
      <StyledWelcomeWrapper>
        <StyledWelcomeHeader>
          {message}
        </StyledWelcomeHeader>
        <Button
          color={theme.incomeColors[2]}
          as={Link}
          primary="true"
          style={{marginTop: '2rem'}}
          to={isSuccessful ? '/login' : '/'}
        >
          {isSuccessful ? 'Login' : 'Go home'}
        </Button>
      </StyledWelcomeWrapper>
    </StyledWelcome>
  );
};

export default Welcome;
