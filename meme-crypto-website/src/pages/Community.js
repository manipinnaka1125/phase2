import React from 'react';
import styled from 'styled-components';

const Community = () => {
  // Sample community data (you can replace it with actual data)
  const communityData = [
    {
      name: 'Official Forum',
      platform: 'Forum',
      link: 'https://exampleforum.com',
      description: 'Join our official forum to engage with the community, ask questions, and share your experiences.',
    },
    {
      name: 'Discord Channel',
      platform: 'Discord',
      link: 'https://examplediscord.com',
      description: 'Connect with other community members on our Discord channel. Chat, participate in events, and get updates.',
    },
    {
      name: 'Reddit Community',
      platform: 'Reddit',
      link: 'https://examplereddit.com',
      description: 'Join our Reddit community to discuss Crypto Meme coin, share memes, and stay updated on the latest news.',
    },
    // Add more community data as needed
  ];

  return (
    <Section>
      <Container>
        <Title>Community</Title>
        <Description>Join our vibrant community to connect with other users, ask questions, and stay updated:</Description>
        <CommunityCards>
          {communityData.map((community, index) => (
            <CommunityCard key={index}>
              <CardContent>
                <h3>{community.name}</h3>
                <p>{community.description}</p>
                <p>Platform: {community.platform}</p>
              </CardContent>
              <CardFooter>
                <Button href={community.link} target="_blank" rel="noopener noreferrer">Visit</Button>
              </CardFooter>
            </CommunityCard>
          ))}
        </CommunityCards>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 0;
  background-color: #333;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: grey;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

const CommunityCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CommunityCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 20px;
  width: 300px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const CardFooter = styled.div`
  padding: 10px;
  background-color: #e6e6e6;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #ff6f61;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff493d;
  }
`;

export default Community;
