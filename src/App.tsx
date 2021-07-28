import React, { useState } from 'react';
import './App.css';
import Button from './Button/Button';

const buttonsToCreate: string[] = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"]

function App() {
  const [equation, setEquation] = useState("")

  return (
    <>
      <h1>React Calculator App</h1>
      <p>{equation}</p>
      {buttonsToCreate.map((value) => {
        return (
          <Button
            key={value}
            buttonValue={value}
            buttonType={value.match(/[0-9]/) ? "number" : "operator"}
            setEquation={setEquation}
          />
        );
      })}
    </>
  );
};

export default App;
