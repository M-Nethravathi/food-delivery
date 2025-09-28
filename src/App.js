import React, { useState } from "react";
import Categories from "./components/Categories";
import FoodCard from "./components/FoodCard";
import foods from "./data/foods";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = ["All", ...new Set(foods.map(f => f.category))];
  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter(f => f.category === selectedCategory);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const deliveryCharges = 50;
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0) + (cart.length ? deliveryCharges : 0);

  const styles = {
    container: {
      fontFamily: "'Playfair Display', serif",
      padding: "20px",
      backgroundColor: "#1c1c1c",
      color: "#fefefe",
      minHeight: "100vh",
    },
    header: {
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "60px",
      letterSpacing: "3px",
      color: "#FFD700", // golden title
      textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
    },
    categoriesContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "25px",
    },
    categoryBtn: (active) => ({
      padding: "12px 25px",
      borderRadius: "30px",
      backgroundColor: active ? "#FFD700" : "transparent",
      color: active ? "#1c1c1c" : "#fefefe",
      fontWeight: "bold",
      fontSize: "16px",
      border: "2px solid #FFD700",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }),
    foodGrid: { display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" },
    foodCard: {
      border: "1px solid #444",
      borderRadius: "15px",
      padding: "10px",
      textAlign: "center",
      width: "220px",
      backgroundColor: "#2a2a2a",
      transition: "transform 0.3s, box-shadow 0.3s",
      color: "#fefefe",
    },
    foodImage: { width: "100%", height: "150px", objectFit: "cover", borderRadius: "15px", marginBottom: "10px" },
    addButton: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "#FFD700",
      color: "#1c1c1c",
      borderRadius: "25px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.3s ease",
    },
    addButtonHover: {
      transform: "scale(1.05)",
      boxShadow: "0 6px 12px rgba(255,215,0,0.6)",
    },
    cartBox: {
      position: "fixed",
      right: "20px",
      top: "80px",
      width: "320px",
      maxHeight: "80vh",
      overflowY: "auto",
      backgroundColor: "#2a2a2a",
      border: "2px solid #FFD700",
      borderRadius: "20px",
      padding: "20px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
      color: "#fefefe",
    },
    cartItem: { display: "flex", justifyContent: "space-between", marginBottom: "10px" },
    removeBtn: { background: "#FF4C4C", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", padding: "2px 6px" },
    total: { fontWeight: "bold", marginTop: "15px", fontSize: "18px" },
    delivery: { fontStyle: "italic", marginTop: "5px", color: "#ccc" },
    cartMessage: { marginTop: "10px", color: "#FFD700", fontWeight: "bold", textAlign: "center", fontSize: "16px" },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>FOODIE HAVEN</h1>

      {/* Categories */}
      <div style={styles.categoriesContainer}>
        {categories.map((category, idx) => (
          <button
            key={idx}
            style={styles.categoryBtn(selectedCategory === category)}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Foods Grid */}
      <div style={styles.foodGrid}>
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            style={styles.foodCard}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <img src={food.image} alt={food.name} style={styles.foodImage} />
            <h3>{food.name}</h3>
            <p>₹{food.price}</p>
            <button
              style={styles.addButton}
              onClick={() => addToCart(food)}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Box */}
      <div style={styles.cartBox}>
        <h2>🛒 Your Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, idx) => (
              <div key={idx} style={styles.cartItem}>
                <span>{item.name} - ₹{item.price}</span>
                <button style={styles.removeBtn} onClick={() => removeFromCart(idx)}>X</button>
              </div>
            ))}
            <div style={styles.delivery}>Delivery Charges: ₹{deliveryCharges}</div>
            <div style={styles.total}>Total Amount: ₹{totalAmount}</div>
            <div style={styles.cartMessage}>✨ Complete your order now and enjoy! ✨</div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
