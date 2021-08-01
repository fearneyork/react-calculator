import { useState, useEffect } from "react";
// Components
import Button from "./Button/Button";
import ClearButton from "./ClearButton/ClearButton";
import EqualsButton from "./EqualsButton/EqualsButton";
// Styles
import "./App.css";

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

const App = () => {
    // holding state for numbers value string
    const [clickedValue, setClickedValue] = useState("");
    // set to the value of clickedValue when operator is chosen
    const [firstNum, setFirstNum] = useState("");
    // set to the value of clickedVale when solveEquation is called
    const [secondNum, setSecondNum] = useState("");
    // set to the value of the chosen operator
    const [operator, setOperator] = useState("");
    // set to carry the operator value for chained equations
    const [chainedOperator, setChainedOperator] = useState("");
    // flag for chained operation checks
    const [chainEquation, setChainEquation] = useState(true);

    const solveEquation = (): void => {
        // prevents solve on incomplete equation
        if (firstNum) {
            setSecondNum(clickedValue);
        }
    };

    useEffect(() => {
        // only solve equation if values exist
        if (secondNum && operator) {
            // checks for operator values
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

            // clears values on solve
            setClickedValue("");
            setSecondNum("");

            // use chainEquation boolean to determine whether to clear or set operator
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
                                operator={operator}
                                clickedValue={clickedValue}
                                firstNum={firstNum}
                                setOperator={setOperator}
                                setClickedValue={setClickedValue}
                                setFirstNum={setFirstNum}
                                setChainedOperator={setChainedOperator}
                                solveEquation={solveEquation}
                            />
                        );
                    }
                })}
            </section>
        </main>
    );
};

export default App;
