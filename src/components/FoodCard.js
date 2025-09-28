import React from "react";
import "./FoodCard.css"; // MUST be exact path


const FoodCard = ({ food, addToCart }) => (
  <div style={{ border: "1px solid #ddd", padding: "1rem", textAlign: "center", borderRadius: "8px", margin: "0.5rem" }}>
    <img src={food.image} alt={food.name} style={{ width: "100%", borderRadius: "8px" }} />
    <h3>{food.name}</h3>
    <p>₹{food.price}</p>
    <button onClick={() => addToCart(food)} style={{ marginTop: "0.5rem", padding: "0.5rem 1rem", backgroundColor: "#22c55e", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
      Add to Cart
    </button>
  </div>
);

export default FoodCard;
