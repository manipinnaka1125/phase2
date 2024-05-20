// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => (
  <Nav>
    <Logo>CryptoMeme</Logo>
    <NavMenu>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/tokenomics">Tokenomics</NavItem>
      <NavItem to="/roadmap">Roadmap</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </NavMenu>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const Logo = styled.h1`
  color: #61dafb;
  font-size: 28px;
  font-weight: bold;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: #21a1f1;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 10px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #61dafb;
    color: #282c34;
    transform: translateY(-3px);
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

export default Header;
