import React from 'react';
import styled from 'styled-components';

const CryptoCoinPenimedia = () => (
  <Section>
    <Container>
      <Title>Crypto Coin Penimedia</Title>
      <Description>
        Welcome to the Crypto Coin Penimedia page. Here, you'll find all the information you need about our cryptocurrency, including its features, technology, team, roadmap, and latest news.
      </Description>
      <FeatureSection>
        <FeatureTitle>Key Features</FeatureTitle>
        <FeatureList>
          <FeatureItem>Decentralized</FeatureItem>
          <FeatureItem>Secure</FeatureItem>
          <FeatureItem>Scalable</FeatureItem>
          {/* Add more feature items as needed */}
        </FeatureList>
      </FeatureSection>
      <TeamSection>
        <TeamTitle>Meet Our Team</TeamTitle>
        <TeamMembers>
          <TeamMember>
            <TeamMemberName>P.ManiSwaroop</TeamMemberName>
            <TeamMemberRole>CEO</TeamMemberRole>
          </TeamMember>
          {/* Add more team members as needed */}
        </TeamMembers>
      </TeamSection>
      <RoadmapSection>
        <RoadmapTitle>Roadmap</RoadmapTitle>
        <RoadmapList>
          <RoadmapItem>Q1 2024: Launch of Crypto Coin Penimedia</RoadmapItem>
          <RoadmapItem>Q2 2024: Integration with major exchanges</RoadmapItem>
          {/* Add more roadmap items as needed */}
        </RoadmapList>
      </RoadmapSection>
      <NewsSection>
        <NewsTitle>Latest News</NewsTitle>
        <NewsList>
          <NewsItem>July 15, 2024: Crypto Coin Penimedia partners with leading blockchain technology firm.</NewsItem>
          <NewsItem>June 28, 2024: Successful completion of token swap event.</NewsItem>
          {/* Add more news items as needed */}
        </NewsList>
      </NewsSection>
    </Container>
  </Section>
);

const Section = styled.section`
  padding: 60px 0;
  background-color: black;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
`;

const FeatureSection = styled.div`
  margin-bottom: 40px;
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  color: #444;
  transition: color 0.3s ease;

  &:hover {
    color: #ff7f50;
  }
`;

const TeamSection = styled.div`
  margin-bottom: 40px;
`;

const TeamTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const TeamMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamMember = styled.div`
  margin-right: 20px;
  margin-bottom: 20px;
`;

const TeamMemberName = styled.p`
  font-size: 18px;
  color: #333;
`;

const TeamMemberRole = styled.p`
  font-size: 16px;
  color: #666;
`;

const RoadmapSection = styled.div`
  margin-bottom: 40px;
`;

const RoadmapTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const RoadmapList = styled.ul`
  list-style: none;
  padding: 0;
`;

const RoadmapItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  color: #444;
  transition: color 0.3s ease;

  &:hover {
    color: #4682b4;
  }
`;

const NewsSection = styled.div`
  margin-bottom: 40px;
`;

const NewsTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const NewsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NewsItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
  color: #444;
  transition: color 0.3s ease;

  &:hover {
    color: #32cd32;
  }
`;

export default CryptoCoinPenimedia;
