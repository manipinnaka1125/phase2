// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <FooterContent>© 2024 CryptoMeme. All rights reserved.</FooterContent>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #282c34;
  color: #fff;
`;

const FooterContent = styled.p`
  margin: 0;
`;

export default Footer;
