import React from "react";
import ItemCards from "../features/shop/CardsContainer";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="sidebar">Sidebar</div>
        <div className="main-section">
          <div className="title">
            <h1>A Supermarket page</h1>
          </div>
          <div className="buttons">Buttons section</div>
          <div className="item-cards">
            <ItemCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
