import React from 'react';
import styled from 'styled-components';

const WalletCard = ({ wallet }) => (
  <Card>
    <CardContent>
      <h3>{wallet.name}</h3>
      <p>{wallet.features}</p>
      <p>{wallet.type}</p>
    </CardContent>
    <CardFooter>
      <Button href={wallet.downloadLink}>Download</Button>
    </CardFooter>
  </Card>
);

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

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
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default WalletCard;
