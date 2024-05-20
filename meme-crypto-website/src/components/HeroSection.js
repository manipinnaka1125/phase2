// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';

const HeroSection = () => (
  <Hero>
    <HeroContent>
      <h1>Welcome to CryptoMeme</h1>
      <p>The future of meme-based cryptocurrency.</p>
    </HeroContent>
  </Hero>
);

const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-image: url('/assets/hero-background.jpg');
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: #fff;
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  p {
    font-size: 24px;
  }
`;

export default HeroSection;
