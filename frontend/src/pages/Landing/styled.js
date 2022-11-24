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

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const StyledLandingImage = styled.img`
  margin-top: -2rem;
  width: ${({features}) => features ? '30%' : '100%'};

  @media (max-width: 600px) {
    margin-top: 0;
    width: ${({features}) => features ? '70%' : '100%'};
  }
`;

export const StyledLandingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
`;

export const StyledLandingHeader = styled.h1`
  font-size: 4rem;
  line-height: 1.5;
  font-weight: bold;
`;

export const StyledLandingText = styled.p`
  font-size: 2.5rem;
  line-height: 1.5;
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

export const StyledLandingSmallHeader = styled.h2`
  font-size: 2.5rem;
  line-height: 1.5;
  font-weight: bold;
`;

export const StyledLandingFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
`;

export const StyledLandingFeatureContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;  
`;

export const StyledLandingFeature = styled.p`
  font-size: 2.5rem;
  line-height: 1.5;

  @media (max-width: 600px) {
    width: 80%;
  }
`;
