import React from 'react';
import styled from "styled-components";
import theme from '../theme';
import { Link } from 'react-router-dom';
import wppLogo from '../Assets/Img/wppLogo.svg';
import lavarropas from '../Assets/Img/lavarropas.svg';
import heladera from '../Assets/Img/heladera.svg';
import inicio from '../Assets/Img/snow.svg';
import contacto from '../Assets/Img/contacto.svg';

const NavMobile = styled.nav`
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 80;
  @media (min-width: ${theme.breakpoints.medium}) {
    display: none;
  };
`

const NavMobileUl = styled.ul`
  display: flex;
  width: 100%;
  height: 30px;
  background: ${theme.colors.darkColorAlt};
`

const NavLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: calc(50% - 18px);
  height: ${theme.header.headerHeight};
  background: ${theme.colors.darkColorAlt};
  border-radius: 0 46px 0 0;
  padding-top: 4px;
`

const NavRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  width: calc(50% - 18px);
  height: ${theme.header.headerHeight};
  background: ${theme.colors.darkColorAlt};
  border-radius: 46px 0 0 0;
  padding-top: 4px;
`

const WppLogo = styled.img`
  height: 72px;
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 100;
`

const NavText = styled.div`
  font-size: ${theme.fontSizesSmall.smallFontSize};
  padding: 4px 4px 8px 4px;
`

const ImgNavInicio = styled.div`
  text-align: center;
  background-image: url(${inicio});
  background-position: center;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  height: 30px;
  width: 100%;
`

const ImgNavHeladeras = styled.div`
  text-align: center;
  background-image: url(${heladera});
  background-position: center;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  height: 30px;
  width: 100%;
`

const ImgNavLavarropas = styled.div`
  text-align: center;
  background-image: url(${lavarropas});
  background-position: center;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  height: 30px;
  width: 100%;
`

const ImgNavContacto = styled.div`
  text-align: center;
  background-image: url(${contacto});
  background-position: center;
  border: none;
  background-repeat: no-repeat;
  background-size: contain;
  height: 30px;
  width: 100%;
`

const NavDesktop = styled.div`
  width: 100%;
  height: 60px;
  background: #333;
  @media (max-width: ${theme.breakpoints.medium}) {
    display: none;
  };
`

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #333;
`

const NavLogo = styled.div`
  height: 60px;
`

const NavDesktopUl = styled.div`
  height: 60px;
`

const NavDesktopLi = styled.div`
  height: 60px;
`

function NavBar() {
  return (
    <>
    <NavMobile>
      <NavMobileUl>
        <NavLeft>
        <Link to="/"><ImgNavInicio /><NavText>Inicio</NavText></Link>
          <Link to="/heladeras"><ImgNavHeladeras /><NavText>Heladeras</NavText></Link>
        </NavLeft>
          <WppLogo src={wppLogo} alt="" height="68px" width="68px"></WppLogo>
        <NavRight>  
          <Link to="/lavarropas"><ImgNavLavarropas /><NavText>Lavarropas</NavText></Link>
          <Link to="/contacto"><ImgNavContacto /><NavText>Contacto</NavText></Link>
        </NavRight>
      </NavMobileUl>
    </NavMobile>


    <NavDesktop>
      <NavContainer>
        <NavLogo>Ahmed</NavLogo>
          <NavDesktopUl>
            <NavDesktopLi>hola</NavDesktopLi>
            <NavDesktopLi>hola</NavDesktopLi>
            <NavDesktopLi>hola</NavDesktopLi>
            <NavDesktopLi>hola</NavDesktopLi>
          </NavDesktopUl>
      </NavContainer>
    </NavDesktop>
    </>
  )
}

export default NavBar