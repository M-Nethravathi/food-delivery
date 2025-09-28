import React from "react";

const Navbar = ({ cartCount }) => (
  <nav style={{ display: "flex", justifyContent: "space-between", padding: "1rem 2rem", backgroundColor: "#22c55e", color: "white" }}>
    <h1>Food Delivery</h1>
    <div>Cart: {cartCount}</div>
  </nav>
);

export default Navbar;
