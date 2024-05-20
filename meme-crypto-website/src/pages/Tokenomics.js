// src/components/Tokenomics.js
import React from 'react';
import styled from 'styled-components';

const Tokenomics = () => (
  <Section>
    <Container>
      <h2>Tokenomics</h2>
      <p>Learn about the distribution, supply, and allocation of CryptoMeme tokens.</p>
      <ul>
        <li>Total Supply: 1,000,000,000 CMEME</li>
        <li>Circulating Supply: 600,000,000 CMEME</li>
        <li>Reserve: 400,000,000 CMEME</li>
      </ul>
    </Container>
  </Section>
);

const Section = styled.section`
  padding: 60px 0;
  background-color: #f9f9f9;
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
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
`;

export default Tokenomics;
