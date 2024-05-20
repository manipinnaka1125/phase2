import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>CryptoMemeCoin</Logo>
      <BurgerMenu onClick={toggleMenu}>&#9776;</BurgerMenu>
      <NavMenu className={isMenuOpen ? 'open' : ''}>
        <NavItem to="/" onClick={toggleMenu}>Home</NavItem>
        <NavItem to="/about" onClick={toggleMenu}>What is Crypto Meme Coin?</NavItem>
        <NavItem to="/tokenomics" onClick={toggleMenu}>Wallets</NavItem>
        <NavItem to="/roadmap" onClick={toggleMenu}>Community</NavItem>
        <NavItem to="/contact" onClick={toggleMenu}>Crypto Meme Coinpedia</NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 749px) {
    flex-direction: column;
    align-items: center;
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

  @media screen and (max-width: 749px) {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const BurgerMenu = styled.div`
  display: none; /* Hide the burger menu by default for larger screens */

  @media screen and (max-width: 749px) {
    display: block; /* Display the burger menu for smaller screens */
    cursor: pointer;
    color: white;
    font-size: 24px;
    margin-top: 10px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 749px) {
    display: none; /* Hide the nav menu for smaller screens */
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    
    &.open {
      display: flex; /* Show the nav menu when open */
    }
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

  @media screen and (max-width: 749px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

export default Header;
