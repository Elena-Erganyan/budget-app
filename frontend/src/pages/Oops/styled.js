import styled from "styled-components";

export const StyledOops = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  min-height: calc(100vh - 10rem);
  padding: 0 2rem;

  img {
    width: 50%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;

    img {
      width: 70%;
    }
  }
`;

export const StyledOopsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  line-height: 1.2;
  text-align: center;

  h1 {
    font-size: 7rem;
  }

  h2 {
    font-size: 3rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1.7rem;
  }

  a {
    margin-top: 2rem;
  }
`;
