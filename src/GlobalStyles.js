import { createGlobalStyle } from "styled-components";
import theme from "./theme"

const GlobalStyles = createGlobalStyle`
  ::before,::after{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {  
    margin: 0;
    padding: 0;
    color: var(white-color);
    background-color: var(dark-color);
    line-height: 1.6;
  }

  @font-face {
  font-family: 'GraphikRegular';
  src: local('Lato'), url(../Assets/fonts/GraphikRegular.otf) format('opentype');
  }

  @font-face {
  font-family: 'GraphikSemibold';
  src: local('Lato'), url(../Assets/fonts/GraphikSemibold.otf) format('opentype');
  }

  h1, h2 {
    color: ${theme.colors.whiteColor};
    font-family: 'Graphik Semibold';
  }

  h3, p, a {
    color:${theme.colors.whiteColor};
    font-family: 'Graphik Regular';
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }

  @media (min-width: ${theme.breakpoints.small}) {
    h1 {
      font-size: ${theme.fontSizesSmall.h1FontSize};
    };
    h2 {
      font-size: ${theme.fontSizesSmall.bigFontSize};
    };
    h3 {
      font-size: ${theme.fontSizesSmall.normalFontSize};
    };
    p {
      font-size: ${theme.fontSizesSmall.smallFontSize};
    };
  }

  @media (min-width: ${theme.breakpoints.medium}) {
    h1 {
      font-size: ${theme.fontSizesMedium.h1FontSize};
    };
    h2 {
      font-size: ${theme.fontSizesMedium.bigFontSize};
    };
    h3 {
      font-size: ${theme.fontSizesMedium.normalFontSize};
    };
    p {
      font-size: ${theme.fontSizesMedium.smallFontSize};
    };
  }

  @media (min-width: ${theme.breakpoints.large}) {
    h1 {
      font-size: ${theme.fontSizesLarge.h1FontSize};
    };
    h2 {
      font-size: ${theme.fontSizesLarge.bigFontSize};
    };
    h3 {
      font-size: ${theme.fontSizesLarge.normalFontSize};
    };
    p {
      font-size: ${theme.fontSizesLarge.smallFontSize};
    };
  }

  button {

  }
`

export default GlobalStyles;