import React from "react";

type EqualsButtonProps = {
    solveEquation: () => void;
};

const EqualsButton = ({ solveEquation }: EqualsButtonProps): JSX.Element => {
    const handleSolve = (): void => {
        solveEquation();
    };

    return (
        <button className="button button--operator" onClick={handleSolve}>
            =
        </button>
    );
};

export default EqualsButton;
