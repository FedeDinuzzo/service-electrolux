import createGlobalStyle from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ;
  }

  h1, h2, h3, p {
    color: #fff;
  }

  button {

  }
`

export default GlobalStyles;

/*===== VARIABLES CSS =====
--font-semi: 400;
--font-bold: 700;
--header-height: 3.75rem;
*/
/*===== COLORES =====
--first-color: #E2C86B;
--first-color-alt: #987700;
--white-color: #FAFAFF;
--dark-color: #141417;
--dark-color-light: #24242E;
--gray-color: #5A5C6D;
*/
/*===== FUENTE Y TIPOGRAFIA =====
--body-font: 'Syncopate', sans-serif;
--big-font-size: 3rem;
--h1-font-size: 2rem;
--h2-font-size: 1.75rem;
--normal-font-size: 1rem;
--small-font-size: 0.9rem;

@media screen and (min-widht: 768px){
  --body-font: 'Syncopate', sans-serif;
  --big-font-size: 5rem;
  --h1-font-size: 3rem;
  --h2-font-size: 2.5rem;
  --normal-font-size: 1.25rem;
  --small-font-size: 1rem;
}
*/
/*===== MARGENES =====
--mb-1: .5rem;
--mb-2: 1rem;
--mb-3: 1.5rem;
--mb-4: 2rem;
--mb-5: 2.75rem;
--mb-6: 4rem;
*/
/*===== GENERAL PROPIERTIES =====
::before,::after{
  box-sizing: border-box;
}

html{
    scroll-behavior: smooth;
}

body{
    margin: var(header-height 0 0 0);
    font-family: var(body-font);
    color: var(white-color);
    background-color: var(dark-color);
    line-height: 1.6;
}

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