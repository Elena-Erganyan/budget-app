import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import {
  StyledWelcome,
  StyledWelcomeWrapper,
  StyledWelcomeImage,
  StyledWelcomeHeader,
  StyledWelcomeButton,
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
        <StyledWelcomeButton
          color={theme.incomeColors[2]}
          as={Link}
          primary='true'
          to={isSuccessful ? '/login' : '/'}
        >
          {isSuccessful ? 'Login' : 'Go home'}
        </StyledWelcomeButton>
      </StyledWelcomeWrapper>
    </StyledWelcome>
  );
};

export default Welcome;
