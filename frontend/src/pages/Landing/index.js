import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import Button from "../../components/Button";
import {
  PlusCircle,
  Scales,
  ChartPieSlice,
  DesktopTower,
  ChartLineUp,
} from 'phosphor-react';
import {
  StyledLanding,
  StyledLandingSection,
  StyledLandingTextWrapper,
  StyledLandingHeader,
  StyledLandingText,
  StyledLandingImage,
  StyledLandingFeaturesWrapper,
  StyledLandingSmallHeader,
  StyledLandingFeatures,
  StyledLandingFeatureContainer,
  StyledLandingFeature,
} from "./styled";
import devicesLight from '../../images/devices-light.png';
import devicesDark from '../../images/devices-dark.png';
import phoneLight from '../../images/phone-light.png';
import phoneDark from '../../images/phone-dark.png';

const Landing = () => {
  const theme = useTheme();

  return (
    <StyledLanding>
      <StyledLandingSection>
        <StyledLandingImage
          alt='Devices with the Budget App'
          src={theme.name === 'light' ? devicesLight : devicesDark}
        />
        <StyledLandingTextWrapper>
          <StyledLandingHeader>Manage your finance easily with Budget App</StyledLandingHeader>
          <StyledLandingText>Start tracking your income and expenses</StyledLandingText>
          <Button
            color={theme.incomeColors[2]}
            as={Link}
            primary="true"
            to='/register'
          >
            Let's get started
          </Button>
        </StyledLandingTextWrapper>
      </StyledLandingSection>
      <StyledLandingSection features>
        <StyledLandingFeaturesWrapper>
          <StyledLandingSmallHeader>How it works</StyledLandingSmallHeader>
          <StyledLandingFeatures>
            <StyledLandingFeatureContainer>
              <PlusCircle color={theme.incomeColors[2]} size={28} weight="duotone" />
              <StyledLandingFeature>Add your income and expenses day after day</StyledLandingFeature>
            </StyledLandingFeatureContainer>
            <StyledLandingFeatureContainer>
              <Scales color={theme.incomeColors[2]} size={28} weight="duotone" />
              <StyledLandingFeature>Control your balance</StyledLandingFeature>
            </StyledLandingFeatureContainer>
            <StyledLandingFeatureContainer>
              <ChartLineUp color={theme.incomeColors[2]} size={28} weight="duotone" />
              <StyledLandingFeature>Use charts for any period of time</StyledLandingFeature>
            </StyledLandingFeatureContainer>
            <StyledLandingFeatureContainer>
              <ChartPieSlice color={theme.incomeColors[2]} size={28} weight="duotone" />
              <StyledLandingFeature>See the structure of your income and expenses</StyledLandingFeature>
            </StyledLandingFeatureContainer>
            <StyledLandingFeatureContainer>
              <DesktopTower color={theme.incomeColors[2]} size={28} weight="duotone" />
              <StyledLandingFeature>Use the app from any device</StyledLandingFeature>
            </StyledLandingFeatureContainer>
          </StyledLandingFeatures>
        </StyledLandingFeaturesWrapper>
        <StyledLandingImage
          alt='Phone with a graph'
          src={theme.name === 'light' ? phoneLight : phoneDark}
          features={true}
        />
      </StyledLandingSection>
    </StyledLanding>
  );
};

export default Landing;
