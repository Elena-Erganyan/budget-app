import styled from "styled-components";
import { StyledButton } from "../../components/Button/styled";

export const StyledWelcome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  min-height: calc(100vh - 10rem); // subtracting the height of the header
  padding: 2rem;

  @media (min-width: 601px) {
    flex-direction: row;
  }
`;

export const StyledWelcomeImage = styled.img`
  width: 85%;

  @media (min-width: 601px) {
    width: 50%;
  }
`;

export const StyledWelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  line-height: 1.2;
  text-align: center;
`;

export const StyledWelcomeHeader = styled.h1`
  font-size: 7rem;
`;

export const StyledWelcomeButton = styled(StyledButton)`
  margin-top: 2rem;
`;
