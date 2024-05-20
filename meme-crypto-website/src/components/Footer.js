import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterContainer>
    <FooterContent>© 2024 CryptoMeme. All rights reserved.</FooterContent>
    <FooterLinks>
      <FooterLink href="/Home">Home</FooterLink>
      <FooterLink href="/about">What is Crypto Meme?</FooterLink>
      <FooterLink href="/Wallets">Wallets</FooterLink>
      <FooterLink href="/Community">Community</FooterLink>
      <FooterLink href="https://coindcx.com/blog/cryptocurrency/top-memes-tokens/">Crypto Meme Blog</FooterLink>
      <FooterLink href="https://www.coindesk.com/learn/what-is-a-crypto-foundation/">Foundation</FooterLink>
      <FooterLink href="/about">About</FooterLink>
      <FooterLink href="https://www.coindesk.com/newsletters/crypto-for-advisors/">Advisors</FooterLink>
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
  background-color: #222;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const FooterContent = styled.p`
  margin: 0;
  font-size: 18px;
  margin-bottom: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 22px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffd700;
    transform: translateY(-3px);
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
