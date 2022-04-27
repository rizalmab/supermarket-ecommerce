import React from "react";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import QuantityBtn from "../../common/QuantityBtn";

const SingleCard = (props) => {
  const [isQtyShown, setIsQtyShown] = useState(false);

  const item = props.props;
  const price = item.price / 100;

  const chooseQty = () => {
    setIsQtyShown(true);
    console.log("choose qty displayed", isQtyShown);
  };

  return (
    <>
      <Card style={{ width: "18rem", margin: "5px" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>{item.description}</Card.Text>
          {isQtyShown ? (
            <>
              <QuantityBtn />
              <Button variant="success">Confirm</Button>
              <br />
              <Button variant="danger">Cancel</Button>
            </>
          ) : (
            <Button variant="primary" onClick={chooseQty}>
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleCard;
