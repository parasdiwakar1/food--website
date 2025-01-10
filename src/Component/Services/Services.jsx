import React from "react";
import food1 from "../Images/food1.jpeg";
import food2 from "../Images/food2.webp";
import food3 from "../Images/food3.png";
function Food() {
    return (
        <>
            <div className="Service">
                <h1>Our Services</h1>
                <div className="food_Text">
                    <div>
                        <h1>Commitment to Hygiene and Quality</h1>
                        <p>We ensure that every meal we prepare is delivered in a clean and proper manner, with hygiene as our top priority. From selecting fresh, high-quality ingredients to the careful preparation and packaging of each dish, we take every precaution to maintain the highest standards. Our commitment to cleanliness and safety ensures that the food you receive is free from contamination and prepared with utmost care.</p>
                    </div>
                    <div>
                        <img src={food1} />
                    </div>
                </div>
                <div className="food_Text">
                    <div>
                        <img src={food2} />
                    </div>
                    <div>
                        <h1>Strict Hygiene Protocols</h1>
                        <p>Our team adheres to strict hygiene protocols, including regular sanitization of our kitchens and workspaces to create a safe environment for food preparation. Each ingredient is sourced from trusted suppliers and thoroughly inspected for freshness and quality. To preserve the integrity of the food, we use food-grade packaging designed to maintain its flavor, texture, and temperature, ensuring your meal arrives in perfect condition.</p>
                    </div>
                </div>
                <div className="food_Text">

                    <div>
                        <h1>Dedicated to Customer Satisfaction</h1>
                        <p>Beyond hygiene and quality, we are passionate about delivering a delightful experience to every customer. Our chefs are trained not only to create delicious dishes but also to cater to diverse tastes and dietary preferences. By continuously seeking feedback and striving for excellence, we ensure that every meal brings satisfaction and joy to your table. Your trust and happiness drive our commitment to go above and beyond in every aspect of our service.
                        </p>
                    </div>
                    <div>
                        <img src={food3} />
                    </div>
                </div>
            </div>
        </>
    );

}
export default Food;