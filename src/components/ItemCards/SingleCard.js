import React from "react";
import { Button, Card } from "react-bootstrap";

const SingleCard = (props) => {
  const item = props.props;

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleCard;
