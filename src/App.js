import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import NotFoundPage from "./Components/NotFoundPage";
import GlobalStyles from "./GlobalStyles";
import theme from "./theme"

export default function App() {
  return ( 
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
          <NavBar />

          <Routes>   
            <Route path="/" element={<Hero />}/>   
            <Route path="*" element={<NotFoundPage />}/>    
          </Routes>

          {/*<Footer />*/}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}