import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Tag>POWERFUL</Tag>
        <Title>Group Practice With Trainer</Title>
        <Description>
          Stay healthy and strong with the best training sessions.
        </Description>
        <Buttons>
          <MainButton>Sign Up</MainButton>
          <OutlineButton>Details</OutlineButton>
        </Buttons>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

// Styled Components
const HeroSection = styled.section`
  background: url("/images/hero-man.jpg") no-repeat center center/cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 80px; /* Navbar sabit olduğu için */
`;

const HeroContent = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 10px;
`;

const Tag = styled.span`
  background: #0033cc;
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-top: 10px;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 18px;
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const MainButton = styled.button`
  background: #ffcc00;
  padding: 10px 20px;
  font-size: 18px;
`;

const OutlineButton = styled(MainButton)`
  background: transparent;
  border: 2px solid white;
`;
