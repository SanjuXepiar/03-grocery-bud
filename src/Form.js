import React, { useState, useEffect } from "react";

import { List } from "./List";
import { toast } from "react-toastify";
export const Form = () => {
  const [inputItem, setInputItem] = useState("");
  const [listItem, setListItem] = useState([]);

  const setLocal = (item) => {
    const data = JSON.stringify(item);
    localStorage.setItem("list", data);
  };
  const getLocal = () => {
    const data = localStorage.getItem("list");
    if (data) {
      setListItem(JSON.parse(data));
    } else {
      setListItem([]);
    }
  };
  useEffect(() => {
    getLocal();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputItem.length === 0) {
      return toast.error("input cannot be empty");
    } else {
      const newItem = {
        itemName: inputItem,
        isChecked: false,
        id: Math.random(),
      };
      const data = [newItem, ...listItem];
      setListItem(data);
      toast.success("item added");
      setLocal(data);
      setInputItem("");
    }
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
    toast.success("item removed");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          style={{ borderRadius: "3px", padding: "3px" }}
          type="text"
          value={inputItem}
          autoFocus
          onChange={(e) => setInputItem(e.target.value)}
        />
        <button className="button" type="submit">
          Add Item
        </button>
      </form>
      <>
        <List
          items={listItem}
          updateIsChecked={updateIsChecked}
          handleDelete={handleDelete}
        />
      </>
    </div>
  );
};
