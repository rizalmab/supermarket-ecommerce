import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { createServer } from "miragejs";
import axios from "axios";
import itemsData from "../../config/ItemsData";

let server = createServer();
server.get("/api/food", itemsData);

const CardsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await axios.get("/api/food");
      setItems(fetchedData.data);
      console.log({
        message: "successfully fetched data",
        data: fetchedData.data,
      });
      console.log("fetchedData", fetchedData);
    };

    fetchData();
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
