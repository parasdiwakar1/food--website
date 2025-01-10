import React from "react";
import FoodImage from "../Images/FoodImage.jpg";
import FoodImage1 from "../Images/FoodImage1.webp";
import FoodImage2 from "../Images/FoodImage2.jpeg";
import "./Food.css"
function Food(){
    return(
        <>
        <h1 className="FoodAbout">Adout Our Food</h1>
        <div className="food_Text">
            <div>
                <h1>Our restaurant serves safe and tasty food</h1>
                <p>
                We are committed to providing you with delicious meals that are not only flavorful but also prepared with the highest standards of safety and hygiene. Every dish is crafted using fresh, high-quality ingredients to ensure you have an exceptional dining experience. From the first bite to the last, we aim to exceed your expectations and leave you satisfied with every meal. Our chefs take great pride in presenting food that is both safe to consume and bursting with taste
                </p>
            </div>
            <div>
                <img src={FoodImage}/>
            </div>
        </div>
        <div className="food_Text">
            <div>
                <img src={FoodImage1}/>
            </div>
            <div>
                <h1>We prioritize hygiene and quality to ensure every meal is a delightful experience.</h1>
                <p>Our chefs and staff follow strict safety protocols to ensure your food is safe to eat. We believe that great food comes from great care, which is why we go the extra mile to maintain cleanliness and ensure the highest standards of food preparation. Whether you're dining in or ordering out, our kitchen is always kept to the highest hygiene standards, so you can enjoy your meal with peace of mind. Every ingredient we use is sourced from trusted suppliers, ensuring only the best reaches your table.</p>
            </div>
        </div>
        <div className="food_Text">
            
            <div>
                <h1>Come and enjoy a memorable dining experience.</h1>
                <p>Whether you're here for a casual meal with friends or a special occasion, our warm and welcoming atmosphere guarantees a memorable time. Indulge in a variety of mouthwatering dishes that reflect our commitment to quality, taste, and safety. From comfort food to gourmet delights, we offer a diverse menu that caters to all tastes and preferences. Our attentive staff is always ready to make your visit extra special, ensuring you feel right at home. Come and experience the best of dining with us, where every meal is a celebration of flavor and safety.</p>
            </div>
            <div>
                <img src={FoodImage2}/>
            </div>
        </div>
        </>
    );

}
export default Food;