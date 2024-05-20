import React from 'react';
import styled from 'styled-components';

const WalletList = () => {
  const wallets = [
    { 
      name: 'Trust Wallet', 
      features: 'Self Custodial, 2FA, Opensource', 
      type: 'Android, IOS', 
      downloadLink: 'https://trustwallet.com/' 
    },
    { 
      name: 'Guarda Wallet', 
      features: 'Self Custodial, 2FA, Import Wallet, Browser Wallet, Linux, Windows, MacOS, Android, IOS', 
      type: 'Linux, Windows, MacOS, Android, IOS', 
      downloadLink: 'https://guarda.com/' 
    },
    { 
      name: 'Coinomi Crypto Wallet', 
      features: 'Self Custodial, Multi-Asset Support, Easy to Use', 
      type: 'Android, IOS', 
      downloadLink: 'https://coinomi.com/' 
    },
    { 
      name: 'Mycelium Crypto Wallet', 
      features: 'Self Custodial, Secure, Advanced Configuration Options', 
      type: 'Android, IOS', 
      downloadLink: 'https://wallet.mycelium.com/' 
    },
    { 
      name: 'BlueWallet Crypto Wallet', 
      features: 'Self Custodial, Lightning Network Support, Multiple Wallet Management', 
      type: 'Android, IOS', 
      downloadLink: 'https://bluewallet.io/' 
    },
    { 
      name: 'Electrum Crypto Wallet', 
      features: 'Open-source, Desktop Experience, Bitcoin Only', 
      type: 'Windows, MacOS, Linux', 
      downloadLink: 'https://electrum.org/' 
    },
    { 
      name: 'Ledger Crypto Wallet', 
      features: 'Hardware Wallet, Cold Storage, High Security', 
      type: 'Hardware', 
      downloadLink: 'https://www.ledger.com/' 
    },
    { 
      name: 'Coinbase Crypto Wallet', 
      features: 'Beginner Friendly, Educational Resources, Large Asset Selection', 
      type: 'Android, IOS', 
      downloadLink: 'https://www.coinbase.com/' 
    },
  ];

  return (
    <Section>
      <Container>
        <h2>Popular Wallets</h2>
        <CardsContainer>
          {wallets.map((wallet, index) => (
            <WalletCard key={index}>
              <CardContent>
                <h3>{wallet.name}</h3>
                <p>{wallet.features}</p>
                <p>{wallet.type}</p>
              </CardContent>
              <CardFooter>
                <Button href={wallet.downloadLink} download>Download</Button>
              </CardFooter>
            </WalletCard>
          ))}
        </CardsContainer>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 60px 0;
  background-color: #333;
`;

const Container = styled.div`
  width: 90%; /* Adjusted width for responsiveness */
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 40px;
    font-size: 36px;
    color: white;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjusted grid for responsiveness */
  gap: 30px;
`;

const WalletCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 20px;
  width: 100%; /* Adjusted width for responsiveness */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardFooter = styled.div`
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

export default WalletList;
