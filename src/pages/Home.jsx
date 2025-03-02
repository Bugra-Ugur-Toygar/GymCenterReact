import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Classes from "../components/Classes";
import BMI from "../components/BMI";
import Trainers from "../components/Trainers";
import Products from "../components/Products";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <Classes />
      <BMI />
      <Trainers />
      <Products />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Home;
