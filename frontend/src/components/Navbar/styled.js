import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from '../Button/styled';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  gap: 0;

  & > svg {
    display: block;
    cursor: pointer;
  }

  @media (min-width: 901px) {
    gap: 1rem;
    width: 90%;
  
    & > svg {
      display: none;
    }
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  gap: 1rem;

  z-index: 2;
  position: fixed;
  left: -100%;
  top: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  padding: 1.5rem;
  background-color: ${({theme}) => theme.backgroundAccentColor};
  transition: 0.5s all ease;

  svg {
    display: block;
    position: absolute;
    top: 2rem;
    right: 1rem;
    cursor: pointer;
  }

  @media (min-width: 901px) {
    position: static;
    z-index: 0;
    left: auto;
    top: auto;
    bottom: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
    transition: none;

    svg {
      display: none;
    }
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const StyledLogoImg = styled.img`
  width: 3.5rem;
`;

export const StyledLogoText = styled.span`
  font-family: 'Rosa Sans Bold', sans-serif;
  color: ${({theme}) => theme.name === 'light' ? theme.incomeColor : theme.expenseColor};
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: ${({inner}) => inner ? '0 1rem' : '1rem'};
  font-size: 2rem;
  line-height: 1.2;
  text-decoration: none;
  text-align: center;
  color: ${({status, theme}) => status === 'active' ? theme.expenseColor : theme.expenseAccentColor};
  cursor: ${({status}) => status === 'active' ? 'auto' : 'pointer'};

  @media (min-width: 901px) {
    display: ${({inner}) => inner ? 'none' : 'block'};
  }
`;

export const StyledNavButton = styled(StyledButton)`
  padding: 1rem;
  font-size: 2rem;
  line-height: 1.2;
  text-decoration: none;
  text-align: center;
  color: ${({status, theme}) => status === 'active' ? theme.expenseColor : theme.expenseAccentColor};
  cursor: ${({status}) => status === 'active' ? 'auto' : 'pointer'};
  border: none;
  background-color: transparent;

  @media (min-width: 901px) {
    border: 2px solid ${({color}) => color};
    background-color: ${({primary, color}) => primary ? color : 'transparent'};
    color: ${({primary, color, theme})  => primary ? theme.backgroundAccentColor : color};
  }
`;

export const StyledText = styled.span`
  padding: 1rem;
  font-size: 2rem;
  line-height: 1.2;
  color: ${({color}) => color};
  cursor: ${({status}) => status === 'active' ? 'pointer' : 'auto'};
`;

export const StyledOverlay = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
