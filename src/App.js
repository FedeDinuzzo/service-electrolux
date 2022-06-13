import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import NotFoundPage from "./Components/NotFoundPage";

export default function App() {
  return ( 
    <>
        <BrowserRouter>
          <NavBar />

          <Routes>   
            <Route path="/" element={<Hero />}/>   
            <Route path="*" element={<NotFoundPage />}/>    
          </Routes>

          {/*<Footer />*/}
        </BrowserRouter>
    </>
  );
}