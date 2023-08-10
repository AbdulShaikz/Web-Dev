import React, { useState, useRef } from "react";
import "./App.css";

function CalculatorButton({ onClick, label, ariaLabel }) {
  return <button onClick={onClick} aria-label={ariaLabel}>{label}</button>;
}

function App() {
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  function performOperation(e, operator) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((prevResult) => {
      switch (operator) {
        case "+":
          return prevResult + inputValue;
        case "-":
          return prevResult - inputValue;
        case "*":
          return prevResult * inputValue;
        case "/":
          return prevResult / inputValue;
        default:
          return prevResult;
      }
    });
    setInputValue(""); // Clear input field after operation
  }

  function resetInput(e) {
    e.preventDefault();
    setInputValue("");
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <CalculatorButton onClick={(e) => performOperation(e, "+")} label="add" ariaLabel="Add" />
        <CalculatorButton onClick={(e) => performOperation(e, "-")} label="subtract" ariaLabel="Subtract" />
        <CalculatorButton onClick={(e) => performOperation(e, "*")} label="multiply" ariaLabel="Multiply" />
        <CalculatorButton onClick={(e) => performOperation(e, "/")} label="divide" ariaLabel="Divide" />
        <CalculatorButton onClick={resetInput} label="reset input" ariaLabel="Reset Input" />
        <CalculatorButton onClick={resetResult} label="reset result" ariaLabel="Reset Result" />
      </form>
    </div>
  );
}

export default App;
