// src/components/CartPage.js
import React, { useState } from 'react';
import './CartPage.css'; // Import CSS for styling

// Hardcoded iPhone 9 product details
const iphone9 = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  quantity: 1,
  image: "https://indianexpress.com/wp-content/uploads/2020/01/iPhone-9-main-759.jpg", // Updated image link
 
};

const CartPage = () => {
  const [quantity, setQuantity] = useState(iphone9.quantity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const subtotal = iphone9.price * quantity;
  const shippingFee = 0; // Free shipping
  const total = subtotal + shippingFee;

  return (
    <div className="cart-page">
      <div className="product-image">
        <img src={iphone9.image} alt={iphone9.title} />
      </div>
      <div className="product-info">
        <h1>{iphone9.title}</h1>
        <p>{iphone9.description}</p>
        <p><strong>Price:</strong> ${iphone9.price}</p>
        <div className="quantity-controls">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <div className="pricing-details">
          <p><strong>Subtotal:</strong> ${subtotal}</p>
          <p><strong>Shipping:</strong> Free</p>
          <p><strong>Total:</strong> ${total}</p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
