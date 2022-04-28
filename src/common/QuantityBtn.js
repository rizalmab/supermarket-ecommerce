import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

const QuantityBtn = (props) => {
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      props.setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
    props.setQuantity(quantity + 1);
  };

  return (
    <div>
      <Button onClick={() => decrement()}>-</Button>
      <div className="quantity-input">{quantity}</div>
      <Button onClick={() => increment()}>+</Button>
    </div>
  );
};

export default QuantityBtn;
