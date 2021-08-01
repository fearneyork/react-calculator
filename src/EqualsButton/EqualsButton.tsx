import React from "react";

type EqualsButtonProps = {
    setChainEquation: React.Dispatch<React.SetStateAction<boolean>>;
    solveEquation: () => void;
};

const EqualsButton = ({
    setChainEquation,
    solveEquation,
}: EqualsButtonProps): JSX.Element => {
    const handleSolve = (): void => {
        setChainEquation(false);
        solveEquation();
    };

    return (
        <button className="button button--operator" onClick={handleSolve}>
            =
        </button>
    );
};

export default EqualsButton;
