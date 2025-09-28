import React from "react";
import "./Categories.css"; // MUST be exact path

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => (
  <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
    <button onClick={() => setSelectedCategory("All")} style={{ margin: "0 0.5rem", padding: "0.5rem 1rem", backgroundColor: selectedCategory === "All" ? "#22c55e" : "#eee", color: selectedCategory === "All" ? "white" : "black", border: "none", borderRadius: "5px" }}>All</button>
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setSelectedCategory(cat)}
        style={{ margin: "0 0.5rem", padding: "0.5rem 1rem", backgroundColor: selectedCategory === cat ? "#22c55e" : "#eee", color: selectedCategory === cat ? "white" : "black", border: "none", borderRadius: "5px" }}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default Categories;
