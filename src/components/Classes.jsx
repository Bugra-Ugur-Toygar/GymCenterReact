import React, { useState } from "react";
import styled from "styled-components";

const classData = {
  yoga: {
    title: "Why Yoga?",
    description:
      "Yoga helps your body stay healthy and flexible, while also keeping your mind fresh.",
    schedule: ["Sat-Sun: 8:00am - 10:00am", "Mon-Tue: 10:00am - 12:00pm"],
    image: "/images/yoga.jpg",
  },
  group: {
    title: "Why Group Training?",
    description: "Group training is fun, motivating, and effective.",
    schedule: ["Mon: 7:00am - 9:00am", "Wed: 5:00pm - 7:00pm"],
    image: "/images/group.webp",
  },
  solo: {
    title: "Why Solo Training?",
    description: "Personalized training for your specific goals.",
    schedule: ["Tue: 10:00am - 12:00pm", "Thu: 4:00pm - 6:00pm"],
    image: "/images/solo.jpg",
  },
  stretching: {
    title: "Why Stretching?",
    description: "Stretching improves flexibility and prevents injuries.",
    schedule: ["Everyday: 6:00am - 7:00am"],
    image: "/images/stret.webp",
  },
};

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState(classData.yoga);

  return (
    <ClassesSection>
      <h2>OUR CLASSES</h2>
      <ButtonGroup>
        {Object.keys(classData).map((key) => (
          <ClassButton
            key={key}
            onClick={() => setSelectedClass(classData[key])}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </ClassButton>
        ))}
      </ButtonGroup>
      <ClassContent>
        <TextContainer>
          <h3>{selectedClass.title}</h3>
          <p>{selectedClass.description}</p>
          <ul>
            {selectedClass.schedule.map((time, i) => (
              <li key={i}>{time}</li>
            ))}
          </ul>
        </TextContainer>
        <ImageContainer>
          <img src={selectedClass.image} alt={selectedClass.title} />
        </ImageContainer>
      </ClassContent>
    </ClassesSection>
  );
};

export default Classes;

// Styled Components
const ClassesSection = styled.section`
  padding: 50px 20px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ClassButton = styled.button`
  background: #0033cc;
  color: white;
  padding: 10px 20px;
`;

const ClassContent = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  max-width: 400px;
  text-align: left;
`;

const ImageContainer = styled.div`
  img {
    width: 300px;
    border-radius: 10px;
  }
`;
