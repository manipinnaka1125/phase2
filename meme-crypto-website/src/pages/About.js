// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import crypto from '../assets/crypto.jpg';
const About = () => (
  <Section>
    <Container>
      <Content>
        <Title>About CryptoMeme</Title>
        <Description>
          CryptoMeme is not just another cryptocurrency; it's a movement, a cultural phenomenon, and a source of endless amusement. Born out of the internet's love for memes, CryptoMeme combines cutting-edge blockchain technology with the irreverent humor of internet culture.
        </Description>
        <Description>
          Our mission is simple: to bring joy, laughter, and financial freedom to the world through meme-based cryptocurrency. We believe that humor is a universal language, and by harnessing its power, we can create a more inclusive and enjoyable financial ecosystem.
        </Description>
        <Description>
          Join us on our journey as we redefine what it means to invest, transact, and interact in the digital age. With CryptoMeme, the future is funnier, brighter, and more profitable than ever before.
        </Description>
      </Content>
    </Container>
    <GrowthSection>
      <Container>
        <Title>Growth of Cryptocurrency</Title>
        <GraphContainer>
          {/* Add your graphs here */}
          <GraphImage src={crypto} alt="Cryptocurrency Growth Graph" />
        </GraphContainer>
        <Description>
          Cryptocurrency has experienced exponential growth over the past decade, with Bitcoin leading the way as the pioneer digital currency. As more people recognize the potential of decentralized finance, the cryptocurrency market continues to expand, offering exciting opportunities for investors and enthusiasts alike.
        </Description>
      </Container>
    </GrowthSection>
  </Section>
);

const Section = styled.section`
  padding: 60px 0;
  background-color: #333;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Content = styled.div`
  background-color: black;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 36px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: white;
  margin-bottom: 20px;
`;

const GrowthSection = styled.div`
  padding: 60px 0;
  background-color: #white;
`;

const GraphContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const GraphImage = styled.img`
  max-width: 100%;
`;

export default About;
