import React, { MouseEvent } from "react";
import "./Button.css";

type ButtonProps = {
    buttonValue: string;
    buttonType: "number" | "operator";
    setOperator?: React.Dispatch<React.SetStateAction<string>>;
    setClickedValue?: React.Dispatch<React.SetStateAction<string>>;
    setFirstNum?: React.Dispatch<React.SetStateAction<string | undefined>>;
    clickedValue?: string;
    solveEquation?: () => void;
};

const Button = ({
    buttonValue,
    buttonType,
    setOperator,
    setClickedValue,
    setFirstNum,
    clickedValue,
    solveEquation,
}: ButtonProps): JSX.Element => {
    const handleClick = (e: MouseEvent<Element>): void => {
        if (buttonValue === "=") {
            solveEquation?.();
        } else {
            setUpEquation();
        }
    };
    const setUpEquation = () => {
        const operators: string[] = ["+", "-", "x", "÷"];
        if (operators.includes(buttonValue)) {
            setFirstNum?.(clickedValue);
            setClickedValue?.("");
            setOperator?.(buttonValue);
        } else if (buttonValue === ".") {
            if (clickedValue?.indexOf(".") === -1) {
                setClickedValue?.((value) => value + buttonValue);
            }
        } else {
            setClickedValue?.((value) => value + buttonValue);
        }
    };

    return (
        <button
            className={`button ${
                buttonType === "number" ? "button--number" : "button--operator"
            }`}
            onClick={handleClick}
        >
            {buttonValue}
        </button>
    );
};

export default Button;
