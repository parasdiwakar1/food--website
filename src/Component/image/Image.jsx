import React from "react";
import food from "../Images/food.jpg";
import "./Image.css"
function Image() {
    return (
        <>
            <div className="Main">
                <div className="background">
                    <img src={food} />
                </div>
                <div className="Text">
                    <h4 className="Welcome-Text">Welcome to Our Restaurant</h4>
                    <h4>Taste the Magic</h4>
                    <p>
                        Experience the perfect blend of taste, tradition, and innovation at our restaurant.
                        Every dish is crafted with fresh, high-quality ingredients, ensuring every bite
                        is a journey of flavors. Whether you're here to enjoy a family meal, a romantic dinner,
                        or a quick bite, we promise an unforgettable dining experience. Welcome to a place
                        where food isn't just served—it's celebrated.
                    </p>
                </div>
            </div>
        </>
    )
}
export default Image