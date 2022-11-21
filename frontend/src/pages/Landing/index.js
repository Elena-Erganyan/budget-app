import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import {
  PlusCircle,
  Scales,
  ChartPieSlice,
  DesktopTower,
  ChartLineUp,
} from 'phosphor-react';
import Button from "../../components/Button";
import {
  StyledLanding,
  StyledLandingSection,
  StyledLandingText,
  StyledLandingFeaturesWrapper,
  StyledLandingFeatures,
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
        <img
          alt='Devices with Budget App'
          src={theme.name === 'light' ? devicesLight : devicesDark}
        />
        <StyledLandingText>
          <h1>Manage your finance easily with Budget App</h1>
          <p>Start tracking your income and expenses</p>
          <Button
            color={theme.incomeColors[2]}
            as={Link}
            primary="true"
            to='/register'
          >
            Let's get started
          </Button>
        </StyledLandingText>
      </StyledLandingSection>
      <StyledLandingSection features>
        <StyledLandingFeaturesWrapper>
          <h1>How it works</h1>
          <StyledLandingFeatures>
            <StyledLandingFeature>
              <PlusCircle color={theme.incomeColors[2]} size={28} weight="duotone" />
              <p>Add your income and expenses day after day</p>
            </StyledLandingFeature>
            <StyledLandingFeature>
              <Scales color={theme.incomeColors[2]} size={28} weight="duotone" />
              <p>Control your balance</p>
            </StyledLandingFeature>
            <StyledLandingFeature>
              <ChartLineUp color={theme.incomeColors[2]} size={28} weight="duotone" />
              <p>Use charts for any period of time</p>
            </StyledLandingFeature>
            <StyledLandingFeature>
              <ChartPieSlice color={theme.incomeColors[2]} size={28} weight="duotone" />
              <p>See the structure of your income and expenses</p>
            </StyledLandingFeature>
            <StyledLandingFeature>
              <DesktopTower color={theme.incomeColors[2]} size={28} weight="duotone" />
              <p>Use the app from any device</p>
            </StyledLandingFeature>
          </StyledLandingFeatures>
        </StyledLandingFeaturesWrapper>
        <img
          alt='Phone with a graph'
          src={theme.name === 'light' ? phoneLight : phoneDark}
        />
      </StyledLandingSection>
      
    </StyledLanding>
  );
};

export default Landing;
