import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <FooterContent>© 2024 CryptoMeme. All rights reserved.</FooterContent>
    <FooterLinks>
      <FooterLink href="#">Home</FooterLink>
      <FooterLink href="#">What is Crypto Meme?</FooterLink>
      <FooterLink href="#">Wallets</FooterLink>
      <FooterLink href="#">Community</FooterLink>
      <FooterLink href="#">Crypto Meme Blog</FooterLink>
      <FooterLink href="#">Foundation</FooterLink>
      <FooterLink href="#">About</FooterLink>
      <FooterLink href="#">Advisors</FooterLink>
    </FooterLinks>
    <SocialMediaLinks>
      <SocialMediaLink href="#">
        <i className="fab fa-facebook-f"></i>
      </SocialMediaLink>
      <SocialMediaLink href="#">
        <i className="fab fa-twitter"></i>
      </SocialMediaLink>
      <SocialMediaLink href="#">
        <i className="fab fa-instagram"></i>
      </SocialMediaLink>
      <SocialMediaLink href="#">
        <i className="fab fa-github"></i>
      </SocialMediaLink>
    </SocialMediaLinks>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px; /* Reduced padding for smaller screens */
  text-align: center;
`;

const FooterContent = styled.p`
  margin: 0;
  font-size: 18px; /* Reduced font size for smaller screens */
  margin-bottom: 20px; /* Reduced margin for smaller screens */
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow links to wrap to next line on smaller screens */
  justify-content: center;
  margin-bottom: 20px; /* Reduced margin for smaller screens */
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 15px; /* Reduced margin for smaller screens */
  font-size: 14px; /* Reduced font size for smaller screens */
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffd700;
  }
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialMediaLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 24px;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    color: #ffd700;
  }
`;

export default Footer;
