import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button/Button";
import ClearButton from "./ClearButton/ClearButton";
import EqualsButton from "./EqualsButton/EqualsButton";

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
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [operator, setOperator] = useState("");

    const solveEquation = () => {
        if (firstNum) {
            setSecondNum(clickedValue);
        }
    };

    useEffect(() => {
        if (secondNum && operator) {
            if (operator === "+") {
                setClickedValue((+firstNum + +secondNum).toString());
            }
            if (operator === "-") {
                setClickedValue((+firstNum - +secondNum).toString());
            }
            if (operator === "÷") {
                setClickedValue((+firstNum / +secondNum).toString());
            }
            if (operator === "x") {
                setClickedValue((+firstNum * +secondNum).toString());
            }
            clearOnSolve();
        }
    }, [firstNum, operator, secondNum]);

    const clearOnSolve = (): void => {
        setFirstNum("");
        setSecondNum("");
        setOperator("");
    };

    return (
        <main className="calculator">
            <h1 className="calculator__title">React Calculator App</h1>
            <section className="calculator__upper-container">
                <div className="calculator__viewport">
                    <p className="calculator__viewport-content">
                        {firstNum} {operator} {clickedValue}
                    </p>
                </div>
                <ClearButton
                    setOperator={setOperator}
                    setFirstNum={setFirstNum}
                    setSecondNum={setSecondNum}
                    setClickedValue={setClickedValue}
                />
            </section>
            <section className="calculator__keypad">
                {buttonsToCreate.map((value) => {
                    if (value === "=") {
                        return (
                            <EqualsButton
                                key={value}
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
                                firstNum={firstNum}
                                clickedValue={clickedValue}
                                solveEquation={solveEquation}
                            />
                        );
                    }
                })}
            </section>
        </main>
    );
}

export default App;
