import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]);

  function inputChange(e) {
    const value = e.target.value;
    setInput(value);
  }
  function btnClicked() {
    setItems((prevVal) => {
      return [...prevVal, inputText];
    });
    setInput("");
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Add a task here"
        value={inputText}
        onChange={inputChange}
      />
      <button onClick={btnClicked}>+</button>
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
