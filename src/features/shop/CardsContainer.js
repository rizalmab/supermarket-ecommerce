import React from "react";
import items from "./ItemsData";
import SingleCard from "./SingleCard";

const CardsContainer = () => {
  return (
    <>
      {items.map((item, i) => {
        return <SingleCard props={item} key={i} />;
      })}
    </>
  );
};

export default CardsContainer;
