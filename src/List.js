import React from "react";
import { Items } from "./Items";

export const List = ({ items, updateIsChecked, handleDelete }) => {
  return (
    <div style={{ margin: "0 auto", width: "30rem" }}>
      {items.map((item) => (
        <Items
          key={item.id}
          item={item}
          updateIsChecked={updateIsChecked}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
