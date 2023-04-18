import { useState } from "react";

function PopUp({ setActive, setItems, items }) {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  async function addItem() {
    if (category === "" || title === "") {
      alert("Please, fill out the entire form ");
    } else {
      setActive(false);
      const item = {
        itemId: items.length + 1,
        title: title,
        category: category,
        completed: false,
      };
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(item),
      });
      const data = await res.json();
      setItems((prev) => [...prev, data]);
    }
  }

  return (
    <div className="popup__wrapper">
      <div className="popup__container">
        <div className="popup__top">
          <h2>ToDo</h2>
          <button
            onClick={() => {
              setActive(false);
            }}
          >
            <img src="./assets/close.svg" alt="close__btn" />
          </button>
        </div>
        <div className="popup__form">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <select
            required
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value={""} key="1" disabled>
              Category
            </option>
            <option value="High" key="2">
              High
            </option>
            <option value="Medium" key="3">
              Medium
            </option>
            <option value="Low" key="4">
              Low
            </option>
          </select>
          <button onClick={addItem}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
