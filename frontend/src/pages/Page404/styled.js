import styled from "styled-components";
import { StyledButton } from "../../components/Button/styled";

export const Styled404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  min-height: calc(100vh - 10rem);
  padding: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Styled404Image = styled.img`
  width: 50%;

  @media (max-width: 600px) {
    width: 85%;
  }
`;

export const Styled404TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  line-height: 1.2;
  text-align: center;
`;

export const Styled404Header = styled.h1`
  font-size: 7rem;
`;

export const Styled404SmallHeader = styled.h2`
  font-size: 3rem;
  text-transform: capitalize;
`;

export const Styled404Text = styled.p`
  font-size: 1.7rem;
`;

export const Styled404Button = styled(StyledButton)`
  margin-top: 2rem;
`;
