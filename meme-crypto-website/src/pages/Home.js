// Import necessary libraries
import React from 'react';
import styled from 'styled-components';
import dog from '../assets/dog.jpg';
import shiba from '../assets/shiba.jpg';
import pepe from '../assets/pepe.jpg';

// Define the Home component
const Home = () => {
  return (
    <div>
    <Container>
      <Header>Welcome to Crypto Meme Coin's</Header>
      
      <CardsContainer>
        {/* Existing cards */}
        {/* Dogecoin */}
        <Card onClick={() => window.open('https://coinmarketcap.com/currencies/dogecoin/', '_blank')}>
          <CardImage src={dog} alt="Dogecoin Image" />
          <CardTitle>Dogecoin</CardTitle>
          <CardDetails>
            <Detail>"It operates on a decentralized network and employs a proof-of-work system similar to Bitcoin"</Detail>
          </CardDetails>
        </Card>
        {/* Shiba Inu */}
        <Card onClick={() => window.open('https://coinmarketcap.com/currencies/shiba-inu/', '_blank')}>
          <CardImage src={shiba} alt="Shiba Image" />
          <CardTitle>Shiba Inu</CardTitle>
          <CardDetails>
            <Detail>"Shiba Inu is often referred to as the 'Dogecoin Killer'"</Detail>
          </CardDetails>
        </Card>
        {/* Pepe */}
        <Card onClick={() => window.open('https://coinmarketcap.com/currencies/pepe/', '_blank')}>
          <CardImage src={pepe} alt="Pepe Image" />
          <CardTitle>Pepe</CardTitle>
          <CardDetails>
            <Detail>"Pepe Coin started as a meme-inspired asset, gaining quick attraction due to its active community and new approach to monetizing content."</Detail>
          </CardDetails>
        </Card>
      </CardsContainer>

      {/* Additional card for crypto meme coin information */}
     
      <AdditionalCard>
  <CardContent>
    <h2>What are Crypto Meme Coins?</h2>
    <p>Crypto meme coins, also known as memecoins, are a unique category of cryptocurrencies inspired by internet memes or cultural trends. Unlike traditional cryptocurrencies, which are often based on serious technological innovations, meme coins derive their value and popularity from their association with popular memes, jokes, or cultural phenomena.</p>
    <p>While some view meme coins as purely speculative assets driven by hype and speculation, others argue that they serve as a form of entertainment and a way to engage with digital culture. Despite their humorous or satirical origins, meme coins have gained significant attention and adoption within the cryptocurrency community.</p>
    <p>It's important to note that investing in meme coins can be highly speculative and volatile, and investors should conduct thorough research and exercise caution before participating in meme coin markets.</p>
  </CardContent>
</AdditionalCard>

<br></br>

      {/* Steps for getting started */}
      <StepsContainer>
        {/* Step 1 */}
        <Step>
          <StepNumber>01</StepNumber>
          <StepContent>
            <StepTitle>Choose Your Wallet</StepTitle>
            <StepDescription>A wallet is necessary for people wanting to use, trade and buy crypto. You can pick a wallet.</StepDescription>
          </StepContent>
        </Step>
        {/* Step 2 */}
        <Step>
          <StepNumber>02</StepNumber>
          <StepContent>
            <StepTitle>Configure Your Wallet</StepTitle>
            <StepDescription>After downloading, you can configure your wallet according to our guidelines.</StepDescription>
          </StepContent>
        </Step>
        {/* Step 3 */}
        <Step>
          <StepNumber>03</StepNumber>
          <StepContent>
            <StepTitle>Get Some Crypto Meme Tokens</StepTitle>
            <StepDescription>You can participate in token sales, exchanges in community.</StepDescription>
          </StepContent>
        </Step>
      </StepsContainer>
      
    </Container>
    <div>
    <YouTubeContainer>
  <YouTubeVideo src="https://www.youtube.com/embed/EIYYXcT4gFs?si=LJ2hd3f7JnAFrO5m" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></YouTubeVideo>
</YouTubeContainer>
    </div>
    
    </div>
    
  );
};

// Styled components
const Container = styled.div`
  position: relative;
  background-color: #2f2f2f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  color: white;
`;
const YouTubeContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2f2f2f;
  align-items: center;
  height: 500px; /* Adjust height as needed */
  margin-top: 0px; /* Adjust margin as needed */
`;

const YouTubeVideo = styled.iframe`
  width: 80%; /* Adjust width as needed */
  height: 80%; /* Adjust height as needed */
`;

const Header = styled.h1`
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  letter-spacing: 2px;
  animation: fadeIn 2s ease-in-out, pulse 2s infinite;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #333; /* Initial background color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    color: #ffcc00; /* Change text color on hover */
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* Change text shadow on hover */
    transform: scale(1.05); /* Enlarge text on hover */
    background-color: #444; /* Change background color on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Add shadow on hover */
  }
`;


const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
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

const AdditionalCard = styled.div`
  width: 100%;
  background-color: #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 20px;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  transition: transform 
  0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StepNumber = styled.div`
  font-size: 2em;
  color: #ffd700;
  margin-right: 20px;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StepTitle = styled.h3`
  font-size: 1.5em;
  color: #fff;
  margin-bottom: 5px;
`;

const StepDescription = styled.p`
  color: #ccc;
`;

// Export the Home component
export default Home;
