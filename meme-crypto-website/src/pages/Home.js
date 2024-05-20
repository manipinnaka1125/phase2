import React from 'react';
import styled from 'styled-components';
import dog from '../assets/dog.jpg';
import image from '../assets/image.png';
import shiba from '../assets/shiba.jpg';
import pepe from '../assets/pepe.jpg';

const Home = () => {
  return (
    <Container>
      <Header>Welcome to Crypto Meme Coin's</Header>
      
      <CardsContainer>
        <Card onClick={() => window.open('https://coinmarketcap.com/currencies/dogecoin/', '_blank')}>
          <CardImage src={dog} alt="Dogecoin Image" />
          <CardTitle>Dogecoin</CardTitle>
          <CardDetails>
            <Detail>"It operates on a decentralized network and employs a proof-of-work system similar to Bitcoin"</Detail>
          </CardDetails>
        </Card>
        
        <Card onClick={() => window.open('https://coinmarketcap.com/currencies/shiba-inu/', '_blank')}>
          <CardImage src={shiba} alt="Shiba Image" />
          <CardTitle>Shiba Inu</CardTitle>
          <CardDetails>
            <Detail>"Shiba Inu is often referred to as the 'Dogecoin Killer'"</Detail>
          </CardDetails>
        </Card>
        
        <Card onClick={() => window.open('https://coinmarketcap.com/currencies/pepe/', '_blank')}>
          <CardImage src={pepe} alt="Pepe Image" />
          <CardTitle>Pepe</CardTitle>
          <CardDetails>
            <Detail>"Pepe Coin started as a meme-inspired asset, gaining quick attraction due to its active community and new approach to monetizing content."</Detail>
          </CardDetails>
        </Card>
        
        <Card onClick={() => window.open('https://coinmarketcap.com/currencies/dogecoin/', '_blank')}>
          <CardImage src={image} alt="Dogecoin Image" />
          <CardTitle>Dogecoin</CardTitle>
          <CardDetails>
            <Detail>"This is Dogecoin, which is an international meme token."</Detail>
          </CardDetails>
        </Card>
      </CardsContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: #2f2f2f; /* Grey background color */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  color: white;
`;

const Header = styled.h1`
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  color: #ffd700; /* Gold color */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  letter-spacing: 2px;
  animation: fadeIn 2s ease-in-out, pulse 2s infinite;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffb700;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 130px;
  justify-content: center;
  margin-top: 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: #1a1a1a;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  max-height: 300px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  text-align: center;
  margin: 20px 0;
  color: white;
  font-size: 1.5em;
`;

const CardDetails = styled.div`
  padding: 0 20px;
  text-align: center;
  color: black;
`;

const Detail = styled.p`
  margin-bottom: 10px;
  color: yellow;
  font-size: 1em;
`;

export default Home;
