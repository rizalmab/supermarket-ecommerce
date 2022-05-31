import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { createServer } from "miragejs";
import axios from "axios";
import itemsData from "../../config/ItemsData";
import { useDispatch } from "react-redux";
import { fetchItems } from "./shopSlice";

let server = createServer();
server.get("/api/food", itemsData);

// On page load, dispatch a function that will call for API data

const CardsContainer = () => {
  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedData = await axios.get("/api/food");
  //     setItems(fetchedData.data);
  //     console.log({
  //       message: "successfully fetched data",
  //       data: fetchedData.data,
  //     });
  //     console.log("fetchedData", fetchedData);
  //   };

  //   fetchData();
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems);
  }, []);

  return (
    <>
      {items?.map((item, i) => {
        return <SingleCard props={item} key={i} />;
      })}
    </>
  );
};

export default CardsContainer;
