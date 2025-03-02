import React from "react";
import styled from "styled-components";

const Reviews = () => {
  return (
    <ReviewsSection>
      <h2>REVIEW CLIENT</h2>
      <p>
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical at Hampden-Sydney College.
      </p>
      <ReviewsGrid>
        <ReviewCard>
          <Quote>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
          </Quote>
          <User>
            <img src="/images/client1.jpg" alt="Client 1" />
            <div>
              <h3>Diet Expert</h3>
              <span>Nutrition Specialist</span>
            </div>
          </User>
        </ReviewCard>
        <ReviewCard>
          <Quote>
            "Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s."
          </Quote>
          <User>
            <img src="/images/client2.jpg" alt="Client 2" />
            <div>
              <h3>Cardio Trainer</h3>
              <span>Fitness Expert</span>
            </div>
          </User>
        </ReviewCard>
      </ReviewsGrid>
    </ReviewsSection>
  );
};

export default Reviews;

// Styled Components
const ReviewsSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #cce0ff;
  h2 {
    color: #0033cc;
  }
  p {
    margin-bottom: 30px;
    color: #555;
  }
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background: #003366;
  color: white;
  border-radius: 10px;
  padding: 20px;
  position: relative;
`;

const Quote = styled.p`
  font-style: italic;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  div {
    margin-left: 10px;
    h3 {
      margin: 0;
      font-size: 16px;
    }
    span {
      font-size: 14px;
    }
  }
`;
