import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+"
  ];

  return (
    <div className="app">
      <div className="calculator">
        <h2>React Calculator</h2>

        <input
          type="text"
          value={input}
          readOnly
          className="display"
        />

        <button className="clear" onClick={clearInput}>
          Clear
        </button>

        <div className="buttons">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() =>
                btn === "="
                  ? calculate()
                  : handleClick(btn)
              }
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;