import React from "react";
import QuantityBtn from "../../common/QuantityBtn";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "./shopSlice";
import { useState } from "react";

const ItemQuantity = (props) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const item = props.item;

  return (
    <div>
      <QuantityBtn setQuantity={setQuantity} />
      <Button
        variant="success"
        onClick={() => dispatch(addToCart({ item, quantity: quantity }))}
      >
        Confirm
      </Button>
      <br />
      <Button variant="danger" onClick={() => props.setIsQtyShown()}>
        Cancel
      </Button>
    </div>
  );
};

export default ItemQuantity;
