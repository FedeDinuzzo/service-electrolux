import React from 'react';
import styled from "styled-components";
import theme from '../../theme';
import NavItem from './NavItem'
import { Link } from 'react-router-dom';
import wppLogo from '../../Assets/Img/wppLogo.svg';

const NavMobile = styled.nav`
  display: block;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  @media (min-width: 900px) {
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
  height: 60px;
  background: ${theme.colors.darkColorAlt};
  border-radius: 0 40px 0 0;
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
  height: 60px;
  background: ${theme.colors.darkColorAlt};
  border-radius: 40px 0 0 0;
`

const WppLogo = styled.img`
  height: 70px;
  border-radius: 30px 30px 0 0;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
`

const NavDesktop = styled.div`
  width: 100%;
  height: 60px;
  background: #333;
  @media (max-width: 900px) {
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
          <Link to="top" smooth={true}><NavItem content="HOME" to="/" /></Link>
          <Link to="top" smooth={true}><NavItem content="HOME" to="/" /></Link>
        </NavLeft>
          <WppLogo src={wppLogo} alt="" height="64px" width="64px"></WppLogo>
        <NavRight>  
          <Link to="top" smooth={true}><NavItem content="HOME" to="/" /></Link>
          <Link to="top" smooth={true}><NavItem content="HOME" to="/" /></Link>
        </NavRight>
      </NavMobileUl>
    </NavMobile>


    <NavDesktop>
      <NavContainer>
        <NavLogo>Ahmed</NavLogo>
          <NavDesktopUl>
            <NavDesktopLi><a href="#">Home</a></NavDesktopLi>
            <NavDesktopLi><a href="#">About</a></NavDesktopLi>
            <NavDesktopLi><a href="#">Projects</a></NavDesktopLi>
            <NavDesktopLi><a href="#">Contact</a></NavDesktopLi>
          </NavDesktopUl>
      </NavContainer>
    </NavDesktop>
    </>
  )
}

export default NavBar