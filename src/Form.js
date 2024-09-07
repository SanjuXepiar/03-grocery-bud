import React, { useState, useEffect } from "react";
import { List } from "./List";
export const Form = () => {
  const [inputItem, setInputItem] = useState("");
  const [listItem, setListItem] = useState([]);
  const setLocal = (item) => {
    const data = JSON.stringify(item);
    localStorage.setItem("list", data);
  };
  const getLocal = (listItem) => {
    const data = localStorage.getItem("list");
    if (data) {
      setListItem(JSON.parse(data));
    }
  };
  useEffect(() => {
    getLocal();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      itemName: inputItem,
      isChecked: false,
      id: Math.random(),
    };
    const data = [newItem, ...listItem];
    setListItem(data);
    setLocal(data);
    setInputItem("");
  };
  const updateIsChecked = (id) => {
    const updatedList = listItem.map((item) => {
      if (item.id === id) return { ...item, isChecked: !item.isChecked };
      return item;
    });
    setListItem(updatedList);
    setLocal(updatedList);
  };
  const handleDelete = (id) => {
    const updatedList = listItem.filter((item) => {
      return item.id !== id;
    });
    setListItem(updatedList);
    setLocal(updatedList);
  };

  return (
    <>
      <form style={{ background: "blue" }} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <section>
        <List
          items={listItem}
          updateIsChecked={updateIsChecked}
          handleDelete={handleDelete}
        />
      </section>
    </>
  );
};
