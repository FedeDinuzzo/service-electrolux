import React from 'react';
import './main.css';
import { Button } from '../button';

function Hero() {
  return (
    <>
      <section className="heroContainer">
        <div className="heroContent">
          <h1 className="">Service <span class="h1color">Electrolux</span></h1>
          <div className="heroImgMobile"></div>
          <h2 className="">Servicio Técnico de Heladeras <span class="h1color">en el día</span></h2>
          <p className="">Reparación de heladeras Electrolux a domicilio, VISITAS SIN CARGO</p>\
          <Button />
          <button href="">Solicitar Tecnico</button>
        </div>
        <div className="heroBox">
          <div className="heroImg"></div>
        </div>
      </section>
    </>
  )
}

export default Hero