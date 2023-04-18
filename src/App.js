import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <h1>To Do List</h1>
        <div className="todo__container">
          <div className="item">
            <div className="item__info">
              <p>Buy groceries </p>
              <span>High</span>
            </div>
            <div className="item__actions">
              <button>
                <img src="./assets/edit.svg" alt="edit__btn" />
              </button>
              <button>
                <img src="./assets/delete.svg" alt="delete__btn" />
              </button>
            </div>
          </div>
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
        <div className="popup__wrapper">
          <div className="popup__container">
            <div className="popup__top">
              <h2>ToDo</h2>
              <button onClick={() => {
                setActive(false)
              }}>
                <img src="./assets/close.svg" alt="close__btn" />
              </button>
            </div>
            <div className="popup__form">
              <input type="text" placeholder="Title" />
              <select required>
                <option value="" key="1" selected disabled>
                  Category
                </option>
                <option value="high" key="2">
                  High
                </option>
                <option value="medium" key="3">
                  Medium
                </option>
                <option value="low" key="4">
                  Low
                </option>
              </select>
              <button>Create</button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
