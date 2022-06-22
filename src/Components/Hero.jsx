import React from 'react';
import styled from 'styled-components';
import { Button } from './button';
import heroImg from '../Assets/Img/heroImg.webp';
import heroImgMobile from '../Assets/Img/heroImgMobile.webp';

const LinearColor = styled.span`
  background: linear-gradient(to right, #30CEDF 0%, #1940B5 100%);;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HeroContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #090B12;
  display: grid; 
  @media (min-width: 900px) {
    grid-template-columns: 2;
  }
`

const HeroContent = styled.div`
`

const H1 = styled.h1`
  text-align: center;
`

const HeroImg = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: block;
    width: 50%;
    height: 80%;
    background-image: url(${heroImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }
`

const HeroImgMobile = styled.div`
  display: block;
  width: 100%;
  height: 480px;
  background-repeat: no-repeat;
  background-size: fill;
  background-image: url(${heroImgMobile});
  background-position: 60%;
  @media (min-width: 900px) {
    display: none;
  }
`

const HeroButton = styled.button`
  width: 140px;
  height: 50px;
  color: #fff;
  background: linear-gradient(90.18deg, #30CEDF 0.15%, #1940B5 99.86%);
  border-radius: 8px;
  border-style: none;
`



function Hero() {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <H1 className="">Service <LinearColor>Electrolux</LinearColor></H1>
          <HeroImgMobile/>
          <h2>Servicio Técnico de Heladeras <LinearColor>en el día</LinearColor></h2>
          <h3>Reparación de heladeras Electrolux a domicilio, VISITAS SIN CARGO</h3>
          <Button />
          <HeroButton href="">Solicitar Tecnico</HeroButton>
        </HeroContent>
        <HeroImg/>
      </HeroContainer>
    </>
  )
}

export default Hero