import styled, { css } from 'styled-components';

export const StyledLabel = styled.label`
  font-size: 1.7rem;
  line-height: 1.2;
  flex-grow: 1;
  ${({isSwitch, color, theme}) => isSwitch ?
    css`background-color: ${theme.backgroundColor};
      color: ${color};
      min-height: 3.4rem;
      border: 0.2rem solid ${color};
      border-radius: 0.3rem;
      padding: 0.5rem;
      text-align: center;
      cursor: pointer;
    ` :
    css`position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 33%;
    svg {
      position: absolute;
      top: 2.3rem;
      right: 1rem;
      cursor: pointer;
    }
    svg + input {
      padding-right: 5rem;
    }
    @media (max-width: 600px) {
      width: 100%;
    }
  `}
`;

export const StyledInput = styled.input`
  min-height: 3.4rem;
  width: 100%;
  font-size: 1.7rem;
  line-height: 1.2;
  padding: 0.5rem;
  background-color: ${({theme}) => theme.backgroundAccentColor}; 
  color: ${({theme}) => theme.textColor};
  border: ${({error}) => error ? `2px solid crimson` : 'none'};
  border-radius: 0.3rem;
  box-shadow: ${({theme}) => theme.name === 'light' ? '0 0 2px 1px #cccccc' : 'none'};

  &[type='radio'] {
    position: absolute;
    left: 1rem;
    z-index: -1;
    width: 0;
    height: 0;
    &:focus {
      border: none;
    }
  }
  &[type="radio"]:focus-visible + label {
    outline: 2px solid ${({theme}) => theme.textColor};
  }
  &[type='radio']:checked + label {
    background-color: ${({color}) => color};
    color: ${({theme}) => theme.backgroundAccentColor};
  }
`;
