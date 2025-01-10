import React from "react";
import FoodImage6 from "../Images/FoodImage6.jpg";
import food7 from "../Images/food7.jpg";
import food8 from "../Images/food8.jpg";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-images">
          <img src={FoodImage6} alt="Delicious Dish 1" />
          <img src={food7} alt="Delicious Dish 2" />
          <img src={food8} alt="Delicious Dish 3" />
        </div>
        <p className="about-description">
          Our restaurant is a proud vegetarian establishment, offering a variety of clean, fresh, and delicious dishes. 
          We prioritize using the finest ingredients sourced daily to maintain exceptional taste and quality. 
          Hygiene and cleanliness are at the heart of our kitchen practices, ensuring every meal is prepared in a safe and healthy environment. 
          Our menu is crafted to cater to diverse tastes, providing nutritious options for every customer. 
          We believe in delivering not just food but an experience filled with warmth, hospitality, and satisfaction. 
          Visit us to enjoy wholesome, flavorful meals made with love and dedication to your well-being.
        </p>
      </div>
    </>
  );
}

export default About;
