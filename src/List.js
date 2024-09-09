import React from "react";
import { Items } from "./Items";

export const List = ({ items, updateIsChecked, handleDelete }) => {
  return (
    <>
      {items.map((item) => (
        <Items
          key={item.id}
          item={item}
          updateIsChecked={updateIsChecked}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
};
