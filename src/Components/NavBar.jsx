import React from 'react';
import styled from "styled-components";

const NavMobile = styled.div`
  display: block;
  height: 60px;
  background: #53f463;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0 30px;
  @media (min-width: 900px) {
    display: none;
  };
`

const NavMobileUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`

const NavMobileLi = styled.li`
  font-size: 0.7rem;
`
const NavMobileA = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: inherit;
  text-decoration: none;
`

const NavMobileSpan = styled.span`
  color: #fff;
  font-size: inherit;
  margin-top: 4px;
  display: block;
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
        <NavMobileLi><NavMobileA href="#"><i class="fas fa-home"></i><NavMobileSpan>Home</NavMobileSpan></NavMobileA></NavMobileLi>
        <NavMobileLi><NavMobileA href="#"><i class="fas fa-address-card"></i> <NavMobileSpan>About</NavMobileSpan></NavMobileA></NavMobileLi>
        <NavMobileLi><NavMobileA href="#"><i class="fas fa-award"></i> <NavMobileSpan>Projects</NavMobileSpan></NavMobileA></NavMobileLi>
        <NavMobileLi><NavMobileA href="#"><i class="fas fa-phone-alt"></i><NavMobileSpan>Contact</NavMobileSpan></NavMobileA> </NavMobileLi>
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