type EqualsButtonProps = {
    setChainEquation: React.Dispatch<React.SetStateAction<boolean>>;
    solveEquation: () => void;
};

const EqualsButton = ({
    setChainEquation,
    solveEquation,
}: EqualsButtonProps): JSX.Element => {
    const handleSolve = (): void => {
        // on equals chained equations are terminated
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
