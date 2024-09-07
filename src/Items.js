import React from "react";

export const Items = ({ item, updateIsChecked, handleDelete }) => {
  const { itemName, id, isChecked } = item;

  return (
    <div className="listItem" style={{ display: "flex", gap: "2rem" }}>
      <input type={"checkbox"} onChange={() => updateIsChecked(id)} />
      <h4 style={{ textDecorationLine: isChecked && "line-through" }}>
        {itemName}
      </h4>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
};
