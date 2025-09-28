import React from "react";

const Cart = ({ cartItems, removeFromCart }) => (
  <div style={{ margin: "2rem" }}>
    <h2>Your Cart</h2>
    {cartItems.length === 0 && <p>Cart is empty</p>}
    {cartItems.map((item, index) => (
      <div key={index} style={{ display: "flex", justifyContent: "space-between", margin: "0.5rem 0" }}>
        <span>{item.name} - ₹{item.price}</span>
        <button onClick={() => removeFromCart(index)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "0.2rem 0.5rem", cursor: "pointer", borderRadius: "4px" }}>Remove</button>
      </div>
    ))}
  </div>
);

export default Cart;
