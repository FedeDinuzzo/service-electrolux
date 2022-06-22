import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavBar from "./Components/NavBar";
import NotFoundPage from "./Components/NotFoundPage";
import GlobalStyles from "./GlobalStyles";
import theme from "./theme";
import Heladeras from "./Components/Pages/Heladeras/Heladeras";
import Lavarropas from "./Components/Pages/Lavarropas/Lavarropas";
import Contacto from "./Components/Pages/Contacto/Contacto";
import Inicio from "./Components/Pages/Inicio/Inicio"

export default function App() {
  return ( 
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyles />
          <NavBar />

          <Routes>   
            <Route path="/" element={<Inicio />}/>
            <Route path="/heladeras" element={<Heladeras />}/>
            <Route path="/lavarropas" element={<Lavarropas />}/>
            <Route path="/contacto" element={<Contacto />}/>   
            <Route path="*" element={<NotFoundPage />}/>    
          </Routes>

          {/*<Footer />*/}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}