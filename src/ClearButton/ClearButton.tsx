import "./ClearButton.css";

type ClearButtonProps = {
    setOperator: React.Dispatch<React.SetStateAction<string>>;
    setFirstNum: React.Dispatch<React.SetStateAction<string>>;
    setSecondNum: React.Dispatch<React.SetStateAction<string>>;
    setClickedValue: React.Dispatch<React.SetStateAction<string>>;
    setChainedOperator: React.Dispatch<React.SetStateAction<string>>;
};

const ClearButton = ({
    setOperator,
    setFirstNum,
    setSecondNum,
    setClickedValue,
    setChainedOperator,
}: ClearButtonProps): JSX.Element => {
    const clearEquation = () => {
        setFirstNum("");
        setSecondNum("");
        setOperator("");
        setClickedValue("");
        setChainedOperator("");
    };

    return (
        <button className="button button--clear" onClick={clearEquation}>
            C
        </button>
    );
};

export default ClearButton;
