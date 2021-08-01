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
    const [chainedOperator, setChainedOperator] = useState("");
    const [chainEquation, setChainEquation] = useState(true);

    const solveEquation = () => {
        if (firstNum) {
            setSecondNum(clickedValue);
        }
    };

    useEffect(() => {
        if (secondNum && operator) {
            if (operator === "+") {
                setFirstNum((+firstNum + +secondNum).toString());
            }
            if (operator === "-") {
                setFirstNum((+firstNum - +secondNum).toString());
            }
            if (operator === "÷") {
                setFirstNum((+firstNum / +secondNum).toString());
            }
            if (operator === "x") {
                setFirstNum((+firstNum * +secondNum).toString());
            }
            setClickedValue("");
            setSecondNum("");
            if (!chainEquation) {
                setOperator("");
                setChainEquation(true);
            } else {
                setOperator(chainedOperator);
            }
        }
    }, [chainEquation, chainedOperator, firstNum, operator, secondNum]);

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
                    setChainedOperator={setChainedOperator}
                />
            </section>
            <section className="calculator__keypad">
                {buttonsToCreate.map((value) => {
                    if (value === "=") {
                        return (
                            <EqualsButton
                                key={value}
                                setChainEquation={setChainEquation}
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
                                operator={operator}
                                setChainedOperator={setChainedOperator}
                            />
                        );
                    }
                })}
            </section>
        </main>
    );
}

export default App;
