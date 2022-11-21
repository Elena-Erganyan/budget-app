import styled from "styled-components";

export const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  max-width: 90rem;
  padding: 0 2rem;
`;

export const StyledLandingSection = styled.div`
  display: flex;
  flex-direction: ${({features}) => features ? 'row' : 'column'};
  justify-content: ${({features}) => features ? 'center' : 'flex-start'};
  align-items: center;
  gap: 2rem;

  img {
    margin-top: -2rem;
    width: ${({features}) => features ? '30%' : '100%'};
  }

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;

    img {
      margin-top: 0;
      width: ${({features}) => features ? '70%' : '100%'};
    }
  }
`;

export const StyledLandingText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    line-height: 1.5;
  }

  p {
    font-size: 1.7rem;
    line-height: 1.2;
  }
`;

export const StyledLandingFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (max-width: 600px) {
    order: 1;
  }
`;

export const StyledLandingFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
`;

export const StyledLandingFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  
  p {
    font-size: 1.7rem;
    line-height: 1.2;
  }

  @media (max-width: 600px) {
    p {
      width: 80%;
    }
  }
`;
