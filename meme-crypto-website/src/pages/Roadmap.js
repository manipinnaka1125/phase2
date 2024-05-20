// src/components/Roadmap.js
import React from 'react';
import styled from 'styled-components';

const Roadmap = () => (
  <Section>
    <Container>
      <h2>Roadmap</h2>
      <Timeline>
        <Event>
          <h3>Q1 2024</h3>
          <p>Launch of CryptoMeme website and initial token distribution.</p>
        </Event>
        <Event>
          <h3>Q2 2024</h3>
          <p>Marketing campaign and community building.</p>
        </Event>
        <Event>
          <h3>Q3 2024</h3>
          <p>Listing on major exchanges and expanding partnerships.</p>
        </Event>
        <Event>
          <h3>Q4 2024</h3>
          <p>Introduction of new features and continuous growth.</p>
        </Event>
      </Timeline>
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
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Event = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 10px;
  text-align: left;
  h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }
  p {
    font-size: 18px;
  }
`;

export default Roadmap;
