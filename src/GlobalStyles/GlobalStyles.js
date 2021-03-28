import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat Alternates', sans-serif;
    scrollbar-color: transparent transparent !important;
    scrollbar-width: none;
    transition: scrollbar-color .3s;
    transition: all 0.3s;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  *:not(:hover) {
    scrollbar-color: transparent transparent !important;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
