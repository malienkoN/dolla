import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  padding: 60px 0;
  overflow-y: scroll;
  background-color: #0d0d0d;
  display: grid;
  align-items: center;
  transition: all .3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  display: flex;
  position: absolute;
  top: 25px;
  right: 25px;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  padding: 0;
  margin: 0 0 60px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  
  @media (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: .2s ease-in-out;
  color: #fff;
  cursor: pointer;
  
  &:hover {
    color: #01bf71;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background-color: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    background-color: #fff;
  }
`

