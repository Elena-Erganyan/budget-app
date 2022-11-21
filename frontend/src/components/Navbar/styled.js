import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from '../Button/styled';

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 90%;
  
  & > svg {
    display: none;
  }

  @media (max-width: 900px) {
    width: auto;
    gap: 0;
    & > svg {
      display: block;
      cursor: pointer;
    }
  }
`;

export const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  svg {
    display: none;
    position: absolute;
    top: 2rem;
    right: 1rem;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    position: relative;
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
    }
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
  img {
    width: 3.5rem;
  }

  span {
    font-family: 'Rosa Sans Bold', sans-serif;
    color: ${({theme}) => theme.name === 'light' ? theme.incomeColor : theme.expenseColor};
  }
`;

export const StyledLink = styled(Link)`
  padding: 1rem;
  font-size: 2rem;
  line-height: 1.2;
  text-decoration: none;
  text-align: center;
  color: ${({status, theme}) => status === 'active' ? theme.expenseColor : theme.expenseAccentColor};
  cursor: ${({status}) => status === 'active' ? 'auto' : 'pointer'};
`;

export const StyledNavButton = styled(StyledButton)`
  @media (max-width: 900px) {
    padding: 1rem;
    font-size: 2rem;
    line-height: 1.2;
    text-decoration: none;
    text-align: center;
    color: ${({status, theme}) => status === 'active' ? theme.expenseColor : theme.expenseAccentColor};
    cursor: ${({status}) => status === 'active' ? 'auto' : 'pointer'};
    border: none;
    background-color: transparent;
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
