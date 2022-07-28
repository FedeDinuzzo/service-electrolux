import React from 'react';
import styled from 'styled-components';
import { Button, ButtonInside, LinearColor } from './button';
import heroImg from '../Assets/Img/heroImg.webp';
import heroImgMobile from '../Assets/Img/heroImgMobile.webp';
import GlobalTheme from '../GlobalTheme';

const HeroContainer = styled.div`
  height: 100vh - ${GlobalTheme.header.headerHeight};
  width: 100vw;
  background: ${(props) => props.theme.colors.black};
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

const H2 = styled.h2`
  text-align: center;
  width: 80%;
  display: block;
  margin: 10px auto;
`
const H3 = styled.h2`
  text-align: center;
`

const HeroImg = styled.div`
  display: none;
  @media (min-width: ${GlobalTheme.breakpoints.medium}) {
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
  height: 460px;
  background-repeat: no-repeat;
  margin: -32px 0 -42px 0;
  background-size: fill;
  background-image: url(${heroImgMobile});
  background-position: 60%;
  @media (min-width: ${GlobalTheme.breakpoints.medium}) {
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
          <H2>Servicio Técnico de Heladeras <LinearColor>en el día</LinearColor></H2>
          <H3>Reparación de heladeras Electrolux a domicilio, VISITAS SIN CARGO</H3>
          <Button ><ButtonInside>
          messi
          </ButtonInside></Button>
          <HeroButton href="">Solicitar Tecnico</HeroButton>
        </HeroContent>
        <HeroImg/>
      </HeroContainer>
    </>
  )
}

export default Hero