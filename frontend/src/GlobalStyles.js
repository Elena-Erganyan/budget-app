import { createGlobalStyle } from 'styled-components';
import RosaSansRegularWoff2 from './fonts/rosa-sans-regular.woff2';
import RosaSansRegularWoff from './fonts/rosa-sans-regular.woff';
import RosaSansRegularTtf from './fonts/rosa-sans-regular.ttf';
import RosaSansBoldWoff2 from './fonts/rosa-sans-bold.woff2';
import RosaSansBoldWoff from './fonts/rosa-sans-bold.woff';
import RosaSansBoldTtf from './fonts/rosa-sans-regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Rosa Sans Regular';
    src: url(${RosaSansRegularWoff2}) format('woff2'),
        url(${RosaSansRegularWoff}) format('woff'),
        url(${RosaSansRegularTtf}) format('truetype');
    font-weight: normal; 
    font-style: normal; 
  }

  @font-face {
    font-family: 'Rosa Sans Bold';
    src: url(${RosaSansBoldWoff2}) format('woff2'),
        url(${RosaSansBoldWoff}) format('woff'),
        url(${RosaSansBoldTtf}) format('truetype');
    font-weight: normal; 
    font-style: normal; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rosa Sans Regular', sans-serif;
    color: ${({theme}) => theme.textColor};
    scrollbar-width: thin;
    scrollbar-color: #cccccc ${({theme}) => theme.backgroundAccentColor};
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: ${({theme}) => theme.backgroundAccentColor};
    border-radius: 1rem;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border: 1px solid ${({theme}) => theme.backgroundColor};
    border-radius: 1rem;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    background-color: ${({theme}) => theme.backgroundColor};
    transition: background 0.5s;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GlobalStyles;
