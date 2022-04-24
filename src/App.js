import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemCards from "./components/ItemCards/ItemCards";

//! Add in cards for items (with picture, quantity, add to cart button, price)

function App() {
  return (
    <div className="App">
      <NavBar />
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
    </div>
  );
}

export default App;
