import { createGlobalStyle } from "styled-components";
import theme from "./theme"

const GlobalStyles = createGlobalStyle`
  ::before,::after{
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    margin: var(header-height 0 0 0);
    font-family: var(body-font);
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
    color: #fff;
    font-family: 'Graphik Semibold';
  }

  h3, p {
    color: #fff;
    font-family: 'Graphik Regular';
  }

  @media (min-width: ${theme.breakpoints.small}) {
    h1 {
      font-size: ${theme.fontSizesSmall.h1FontSize};
    };
  }

  @media (min-width: ${theme.breakpoints.medium}) {
    h1 {
      font-size: ${theme.fontSizesMedium.h1FontSize};
    };
  }

  @media (min-width: ${theme.breakpoints.large}) {
    h1 {
      font-size: ${theme.fontSizesLarge.h1FontSize};
    };
  }

  button {

  }
`

export default GlobalStyles;

/*===== GENERAL PROPIERTIES =====
h1,h2,p{
    margin: 0;
}

ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
  
a{
  text-decoration: none;
  color: var(first-color);
}

img{
  max-width: 100%;
  height: auto;
  transition: .5s;
}
*/

/*===== CLASS CSS ===== 
.button{
  background: linear-gradient(232.42deg, #BBA65C 0.73%, #876C10 99.02%);
  color: var(white-color);
  padding: 1rem;
  font-size: var(small-font-size);
  font-weight: var(font-semi);
  border: none;
  transition: .5s;
}

.bnr {
  border-radius: 40px 16px 8px 8px;
}*/

/*===== LAYOUT ===== 
.header{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: var(dark-color-light);
}
  
.grid{
  max-width: 1200px;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  width: calc(100%);
}

h1{
  font-size: var(h1-font-size);
  text-align: center;
}

h2{
  font-size: var(h2-font-size);
  color: var(white-color);
  font-weight: var(font-bold);
  text-align: center;
}

h3{
  font-size: var(normal-font-size);
  font-weight: var(font-bold);
}

h4{
  font-size: var(normal-font-size);
  font-weight: var(font-semi);
}

p{
  font-size: var(small-font-size);
  font-weight: var(font-semi);
}
*/