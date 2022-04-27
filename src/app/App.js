import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../common/NavBar";
import ItemCards from "../features/items/CardsContainer";

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
