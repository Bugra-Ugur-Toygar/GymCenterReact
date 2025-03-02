import React from "react";
import styled from "styled-components";

const trainersData = [
  {
    id: 1,
    name: "Jane Doe",
    specialty: "Cardio Trainer",
    image: "/images/trainer1.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    specialty: "Weightlifting Trainer",
    image: "/images/trainer2.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    specialty: "Yoga Trainer",
    image: "/images/trainer3.jpg",
  },
];

const Trainers = () => {
  return (
    <TrainersSection>
      <h2>OUR BEST TRAINERS</h2>
      <p>
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical at Hampden-Sydney College.
      </p>
      <TrainersGrid>
        {trainersData.map((trainer) => (
          <TrainerCard key={trainer.id}>
            <TrainerImage src={trainer.image} alt={trainer.name} />
            <TrainerInfo>
              <h3>{trainer.name}</h3>
              <p>{trainer.specialty}</p>
            </TrainerInfo>
          </TrainerCard>
        ))}
      </TrainersGrid>
    </TrainersSection>
  );
};

export default Trainers;

// Styled Components
const TrainersSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #e6f0ff;
  h2 {
    margin-bottom: 10px;
    color: #0033cc;
  }
  p {
    margin-bottom: 30px;
    color: #555;
  }
`;

const TrainersGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const TrainerCard = styled.div`
  position: relative;
  overflow: hidden;
  width: 250px;
  border-radius: 10px;
  &:hover img {
    transform: scale(1.1);
  }
`;

const TrainerImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 10px;
`;

const TrainerInfo = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  color: white;
  padding: 10px;
  text-align: center;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;
