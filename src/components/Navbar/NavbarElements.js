import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
  background-color: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  transition: background-color .2s linear;
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  margin: 0 auto;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
`

export const MobileIcon = styled.div`
 display: none;
  
  @media (max-width: 767px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  
  @media (max-width: 767px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 767px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background-color .2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    background: #fff;
  }
`