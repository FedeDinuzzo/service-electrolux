import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NavBar from "./Components/NavBar";
import NotFoundPage from "./Components/NotFoundPage";
import GlobalTheme from "./GlobalTheme";
import GlobalStyles from "./GlobalStyles";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import Heladeras from "./Components/Pages/Heladeras/Heladeras";
import Lavarropas from "./Components/Pages/Lavarropas/Lavarropas";
import Contacto from "./Components/Pages/Contacto/Contacto";
import Inicio from "./Components/Pages/Inicio/Inicio"
import Switch from "./Components/Switch/Switch";

export default function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  return ( 
    <>
      <ThemeProvider theme={GlobalTheme && (isDarkTheme ? darkTheme : lightTheme)} >
        <BrowserRouter>
          <GlobalStyles />
          <Switch toggleTheme={toggleTheme} />
          <NavBar />

          <Routes>   
            <Route path="/" element={<Inicio />} />
            <Route path="/heladeras" element={<Heladeras />} />
            <Route path="/lavarropas" element={<Lavarropas />} />
            <Route path="/contacto" element={<Contacto />} />   
            {/*<Route path="*" element={<NotFoundPage />} />*/} 
          </Routes>

          {/*<Footer />*/}
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}