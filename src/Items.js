import React from "react";
import "./App.css";
export const Items = ({ item, updateIsChecked, handleDelete }) => {
  const { itemName, id, isChecked } = item;

  return (
    <>
      <section className="listItem">
        <div className="item">
          <input
            type={"checkbox"}
            checked={isChecked}
            onChange={() => updateIsChecked(id)}
          />
          <h4
            style={{
              textDecorationLine: isChecked && "line-through",
              width: "70%",
              textAlign: "left",
              wordWrap: "break-word",
            }}
          >
            {itemName}
          </h4>
        </div>
        <button
          className="button"
          style={{ margin: "0 2px" }}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </section>
    </>
  );
};
