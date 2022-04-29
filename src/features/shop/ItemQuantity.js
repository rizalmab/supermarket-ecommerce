import React from "react";
import QuantityBtn from "../../common/QuantityBtn";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "./shopSlice";
import { useState } from "react";

const ItemQuantity = (props) => {
  const item = props.item;
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <QuantityBtn setQuantity={setQuantity} />
      <Button
        variant="success"
        onClick={() => {
          dispatch(addToCart({ item, cartQuantity: quantity }));
          alert("Item added to cart");
        }}
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
