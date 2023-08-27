import React, { useState } from 'react';

function DishBox({ image, name, price }) {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="dish-box">
      <img src={image} alt={name} />
      <div className="dish-info">
        <p className="dish-name">{name}</p>
        <p className="dish-price">${price}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default DishBox;
