import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

const QuantityBtn = () => {
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    console.log("- button clicked");
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    console.log(quantity);
    return 0;
  };

  const increment = () => {
    console.log("+ button clicked");
    setQuantity(quantity + 1);
    console.log(quantity);
  };

  return (
    <div>
      <Button onClick={decrement}>-</Button>
      <div className="quantity-input">{quantity}</div>
      <Button onClick={increment}>+</Button>
    </div>
  );
};

export default QuantityBtn;
