import { createGlobalStyle } from "styled-components";
import GlobalTheme from './GlobalTheme';

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
    color: ${(props) => props.theme.colors.whiteColor};
    background-color: ${(props) => props.theme.colors.darkColor};
    padding-bottom: 60px;
  }

  @font-face {
  font-family: 'GraphikRegular';
  src: local('Graphik'), url(../Assets/fonts/GraphikRegular.otf) format('opentype');
  }

  @font-face {
  font-family: 'GraphikSemibold';
  src: local('Graphik'), url(../Assets/fonts/GraphikSemibold.otf) format('opentype');
  }

  h1, h2 {
    color: ${(props) => props.theme.colors.whiteColor};
    font-family: 'Graphik Semibold';
  }

  h3, p, a {
    color:${(props) => props.theme.colors.whiteColor};
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

  @media (min-width: ${GlobalTheme.breakpoints.small}) {
    h1 {
      font-size: ${GlobalTheme.fontSizesSmall.h1FontSize};
    };
    h2 {
      font-size: ${GlobalTheme.fontSizesSmall.bigFontSize};
    };
    h3 {
      font-size: ${GlobalTheme.fontSizesSmall.normalFontSize};
    };
    p {
      font-size: ${GlobalTheme.fontSizesSmall.smallFontSize};
    };
  }

  @media (min-width: ${GlobalTheme.breakpoints.medium}) {
    h1 {
      font-size: ${GlobalTheme.fontSizesMedium.h1FontSize};
    };
    h2 {
      font-size: ${GlobalTheme.fontSizesMedium.bigFontSize};
    };
    h3 {
      font-size: ${GlobalTheme.fontSizesMedium.normalFontSize};
    };
    p {
      font-size: ${GlobalTheme.fontSizesMedium.smallFontSize};
    };
  }

  @media (min-width: ${GlobalTheme.breakpoints.large}) {
    h1 {
      font-size: ${GlobalTheme.fontSizesLarge.h1FontSize};
    };
    h2 {
      font-size: ${GlobalTheme.fontSizesLarge.bigFontSize};
    };
    h3 {
      font-size: ${GlobalTheme.fontSizesLarge.normalFontSize};
    };
    p {
      font-size: ${GlobalTheme.fontSizesLarge.smallFontSize};
    };
  }

  button {

  }
`

export default GlobalStyles;