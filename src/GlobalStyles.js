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
  }

  html {
    --income-color: #4C8D26;
    --accent-color-1: #D5FB00;
    --expense-color: #882380;
    --accent-color-2: #DE60CA;
    --dark-color: #000000;
    --background-color: seashell;

    font-size: 62.5%;
    scroll-behavior: smooth;
    background-color: var(--background-color);    
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
`;

export default GlobalStyles;
