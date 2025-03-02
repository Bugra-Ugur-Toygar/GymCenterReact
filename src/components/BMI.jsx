import React, { useState } from "react";
import styled from "styled-components";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) return;
    const bmiValue = (weight / (height * height)) * 10000;
    setBmi(bmiValue.toFixed(1));
  };

  return (
    <BMICalculator>
      <h2>BMI Calculator</h2>
      <Form onSubmit={calculateBMI}>
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit">Calculate BMI</button>
      </Form>
      {bmi && <Result>Your BMI: {bmi}</Result>}
      <Chart src="/images/bmi-index.jpg" alt="BMI Chart" />
    </BMICalculator>
  );
};

export default BMI;

// Styled Components
const BMICalculator = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #f8f8f8;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  input {
    padding: 10px;
    border: 1px solid #ccc;
    width: 150px;
  }
  button {
    padding: 10px;
    background: #0033cc;
    color: white;
    border: none;
  }
`;

const Result = styled.p`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const Chart = styled.img`
  margin-top: 20px;
  max-width: 500px;
  width: 100%;
`;
