import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { createServer } from "miragejs";
// import axios from "axios";
import itemsData from "../../config/ItemsData";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, selectCartItems } from "./shopSlice";

let server = createServer();
server.get("/api/food", itemsData);

const CardsContainer = () => {
  const [items, setItems] = useState([]);

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(fetchItems);
  }, []);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  return (
    <>
      {items?.map((item, i) => {
        return <SingleCard props={item} key={i} />;
      })}
    </>
  );
};

export default CardsContainer;
