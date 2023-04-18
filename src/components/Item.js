import { useState } from "react";

function Item({ item: { category, completed, title, itemId }, setItems }) {
  const [edit, setEdit] = useState(false);

  async function removeItem() {
    setItems((prev) =>
      prev.filter((item) => {
        if (item.itemId !== itemId) {
          fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`, {
            method: "DELETE",
          });
          return item;
        }
      })
    );
  }

  async function updateItem(status) {
    setItems((prev) => {
      prev.map((item) => {
        if (item.itemId === itemId) {
          item.completed = status;
          fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(item),
          });
        }
        return item;
      });
      return prev;
    });
    setEdit(false);
  }

  return (
    <div className="item">
      <div className="item__info">
        <h2 className={completed ? "completed" : ""}>{title}</h2>
        <span
          className={
            category === "High"
              ? "high"
              : category === "Medium"
              ? "medium"
              : "low"
          }
        >
          {category}
        </span>
      </div>
      <div className="item__actions">
        {completed ? <p>Completed</p> : <></>}
        {edit ? (
          <div className="edit">
            <button
              onClick={() => {
                updateItem(true);
              }}
            >
              &#10004;
            </button>
            <button
              onClick={() => {
                updateItem(false);
              }}
            >
              &#10006;
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setEdit(true);
            }}
          >
            <img src="./assets/edit.svg" alt="edit__btn" />
          </button>
        )}
        <button onClick={removeItem}>
          <img src="./assets/delete.svg" alt="delete__btn" />
        </button>
      </div>
    </div>
  );
}

export default Item;
