import "./App.css";
import { useEffect, useState } from "react";
import Item from "./components/Item";
import PopUp from "./components/PopUp";

function App() {
  const [active, setActive] = useState(false);
  const [items, setItems] = useState([
    {
      itemId: 1,
      title: "Buy groceries",
      category: "High",
      completed: true,
      id: 201,
    },
    {
      itemId: 2,
      title: "Cardio at 6pm",
      category: "Medium",
      completed: false,
      id: 201,
    },
    {
      itemId: 3,
      title: "Dinner with bae",
      category: "Low",
      completed: false,
      id: 201,
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <h1>To Do List</h1>
        <div className="todo__container">
          {items.map((item, index) => {
            return <Item item={item} key={index} setItems={setItems} />;
          })}
        </div>
        <button
          className="add__btn"
          onClick={() => {
            setActive(true);
          }}
        >
          <img src="./assets/add.svg" alt="add__btn" />
        </button>
      </div>
      {active ? (
        <PopUp setActive={setActive} items={items} setItems={setItems} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
