// Styles
import "./Button.css";

type ButtonProps = {
    buttonValue: string;
    buttonType: "number" | "operator";
    operator: string;
    clickedValue: string;
    firstNum: string;
    // type for state updating functions
    setOperator: React.Dispatch<React.SetStateAction<string>>;
    setClickedValue: React.Dispatch<React.SetStateAction<string>>;
    setFirstNum: React.Dispatch<React.SetStateAction<string>>;
    setChainedOperator: React.Dispatch<React.SetStateAction<string>>;
    solveEquation: () => void;
};

const Button = ({
    buttonValue,
    buttonType,
    operator,
    clickedValue,
    firstNum,
    setOperator,
    setClickedValue,
    setFirstNum,
    setChainedOperator,
    solveEquation,
}: ButtonProps): JSX.Element => {
    // based on whether number button or operator, determine next logical step
    const setUpEquation = () => {
        const operators: string[] = ["+", "-", "x", "÷"];
        if (operators.includes(buttonValue)) {
            determineOperationOrderByValue();
        } else if (buttonValue === ".") {
            // prevent adding multiple decimal points
            if (clickedValue.indexOf(".") === -1) {
                setClickedValue((value) => value + buttonValue);
            }
        } else {
            determineOverwriteOnOperation();
        }
    };

    // used to determine if total gets overwritten after equals on number click or values are concatenated to clickedValue
    const determineOverwriteOnOperation = (): void => {
        // if nothing is set, concat to clickedValue
        // catch for brand new equations with no value, no chaining or no equals total override
        if (!firstNum && !operator && !clickedValue) {
            setClickedValue((value) => value + buttonValue);
        }
        // firstNum && operator - condition for chained operation
        // !firstNum && !operator && clickedValue - condition for concatting to clickedValue
        else if (
            (firstNum && operator) ||
            (!firstNum && !operator && clickedValue)
        ) {
            setClickedValue((value) => value + buttonValue);
        }
        // if firstNumber is set but there is not operator, this means the user has just done an equals operation, so any newly chosen numbers should overwrite what is currently in the viewport
        else if (firstNum && !operator) {
            setFirstNum("");
            setClickedValue(buttonValue);
        }
    };

    const determineOperationOrderByValue = (): void => {
        // prevents first equation item being an operator
        if (!firstNum && !clickedValue) {
            return;
        }
        // if both values are set start chained equation
        else if (firstNum && clickedValue) {
            solveEquation();
            setChainedOperator(buttonValue);
        }
        // default path, sets first num to clickedValue (if not null) and sets operator
        // firstNum not needed to be set after equals because result is stored in firstNum
        else {
            if (clickedValue) {
                setFirstNum(clickedValue);
                setClickedValue("");
            }
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
