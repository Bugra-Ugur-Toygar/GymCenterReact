import React from "react";
import styled from "styled-components";

const Stats = () => {
  return (
    <StatsSection>
      <StatCard>
        <StatNumber>325</StatNumber>
        <StatText>Course</StatText>
      </StatCard>
      <StatCard>
        <StatNumber>405</StatNumber>
        <StatText>Work Out</StatText>
      </StatCard>
      <StatCard>
        <StatNumber>305</StatNumber>
        <StatText>Working Hour</StatText>
      </StatCard>
      <StatCard>
        <StatNumber>705</StatNumber>
        <StatText>Happy Clients</StatText>
      </StatCard>
    </StatsSection>
  );
};

export default Stats;

// Styled Components
const StatsSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
  background: #f0f0f0;
  text-align: center;
`;

const StatCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 180px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #0033cc;
`;

const StatText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
