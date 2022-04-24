import React from "react";
import items from "./ItemsData";
import SingleCard from "./SingleCard";

const ItemCards = () => {
  return (
    <>
      {items.map((item, i) => {
        return <SingleCard props={item} key={i} />;
      })}
    </>
  );
};

export default ItemCards;
