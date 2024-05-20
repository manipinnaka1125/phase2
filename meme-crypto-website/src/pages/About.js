// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => (
  <Section>
    <Container>
      <h2>About CryptoMeme</h2>
      <p>CryptoMeme is a meme-based cryptocurrency aiming to revolutionize the crypto world with humor and innovation.</p>
    </Container>
  </Section>
);

const Section = styled.section`
  padding: 60px 0;
  background-color: #fff;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export default About;
