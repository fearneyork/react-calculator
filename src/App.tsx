import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button/Button";
import ClearButton from "./ClearButton/ClearButton";

const buttonsToCreate: string[] = [
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "x",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "=",
    "+",
];

function App() {
    const [clickedValue, setClickedValue] = useState("");
    const [firstNum, setFirstNum] = useState<string | undefined>("0");
    const [secondNum, setSecondNum] = useState("");
    const [operator, setOperator] = useState("");

    const solveEquation = () => {
        setSecondNum(clickedValue);
    };

    useEffect(() => {
        if (secondNum && operator) {
            if (operator === "+" && firstNum) {
                setClickedValue((+firstNum + +secondNum).toString());
                // following funcs can be reduced to a clear function that is also used on click for clear button
                setFirstNum("");
                setSecondNum("");
                setOperator("");
            }
            if (operator === "-" && firstNum) {
                setClickedValue((+firstNum - +secondNum).toString());
                setFirstNum("");
                setSecondNum("");
                setOperator("");
            }
            if (operator === "÷" && firstNum) {
                setClickedValue((+firstNum / +secondNum).toString());
                setFirstNum("");
                setSecondNum("");
                setOperator("");
            }
            if (operator === "x" && firstNum) {
                setClickedValue((+firstNum * +secondNum).toString());
                setFirstNum("");
                setSecondNum("");
                setOperator("");
            }
        }
    }, [firstNum, operator, secondNum]);

    return (
        <main className="calculator">
            <h1 className="calculator__title">React Calculator App</h1>
            <p className="calculator__viewport">
                {firstNum !== "0" ? firstNum : ""} {operator}
                {clickedValue}
            </p>
            <ClearButton
                key="clear"
                buttonValue="clear"
                buttonType="clear"
                setOperator={setOperator}
                setFirstNum={setFirstNum}
                setSecondNum={setSecondNum}
                setClickedValue={setClickedValue}
            />
            <section className="calculator__keypad">
                {buttonsToCreate.map((value) => {
                    if (value === "=") {
                        return (
                            <Button
                                key={value}
                                buttonValue={value}
                                buttonType={
                                    value.match(/[0-9]/) ? "number" : "operator"
                                }
                                solveEquation={solveEquation}
                            />
                        );
                    } else {
                        return (
                            <Button
                                key={value}
                                buttonValue={value}
                                buttonType={
                                    value.match(/[0-9]/) ? "number" : "operator"
                                }
                                setOperator={setOperator}
                                setClickedValue={setClickedValue}
                                setFirstNum={setFirstNum}
                                clickedValue={clickedValue}
                            />
                        );
                    }
                })}
            </section>
        </main>
    );
}

export default App;
