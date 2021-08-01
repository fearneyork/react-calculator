import React from "react";
import "./Button.css";

type ButtonProps = {
    buttonValue: string;
    buttonType: "number" | "operator";
    setOperator: React.Dispatch<React.SetStateAction<string>>;
    setClickedValue: React.Dispatch<React.SetStateAction<string>>;
    setFirstNum: React.Dispatch<React.SetStateAction<string>>;
    firstNum: string;
    clickedValue: string;
    solveEquation: () => void;
    operator: string;
    setChainedOperator: React.Dispatch<React.SetStateAction<string>>;
};

const Button = ({
    buttonValue,
    buttonType,
    setOperator,
    setClickedValue,
    setFirstNum,
    clickedValue,
    solveEquation,
    firstNum,
    operator,
    setChainedOperator,
}: ButtonProps): JSX.Element => {
    const setUpEquation = () => {
        const operators: string[] = ["+", "-", "x", "÷"];
        if (operators.includes(buttonValue)) {
            checkForMultipleOperator();
        } else if (buttonValue === ".") {
            if (clickedValue.indexOf(".") === -1) {
                setClickedValue((value) => value + buttonValue);
            }
        } else {
            determineOverwriteOnOperation();
        }
    };

    const determineOverwriteOnOperation = (): void => {
        if (!firstNum && !operator && !clickedValue) {
            setClickedValue((value) => value + buttonValue);
        } else if (firstNum && operator) {
            setClickedValue((value) => value + buttonValue);
        } else if (!firstNum && !operator) {
            setClickedValue((value) => value + buttonValue);
        } else if (firstNum && !operator) {
            setFirstNum("");
            setClickedValue(buttonValue);
        }
    };

    const checkForMultipleOperator = (): void => {
        if (!clickedValue) {
            return;
        } else if (firstNum && clickedValue) {
            solveEquation();
            setChainedOperator(buttonValue);
        } else if (firstNum && !clickedValue) {
            setOperator(buttonValue);
        } else {
            setFirstNum(clickedValue);
            setClickedValue("");
            setOperator(buttonValue);
        }
    };

    return (
        <button
            className={`button ${
                buttonType === "number" ? "button--number" : "button--operator"
            }`}
            onClick={setUpEquation}
        >
            {buttonValue}
        </button>
    );
};

export default Button;
