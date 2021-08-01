type ClearButtonProps = {
    setOperator: React.Dispatch<React.SetStateAction<string>>;
    setFirstNum: React.Dispatch<React.SetStateAction<string | undefined>>;
    setSecondNum: React.Dispatch<React.SetStateAction<string>>;
    setClickedValue: React.Dispatch<React.SetStateAction<string>>;
};

const ClearButton = ({
    setOperator,
    setFirstNum,
    setSecondNum,
    setClickedValue,
}: ClearButtonProps): JSX.Element => {
    const clearEquation = () => {
        setFirstNum("");
        setSecondNum("");
        setOperator("");
        setClickedValue("");
    };

    return (
        <button className="button button--clear" onClick={clearEquation}>
            C
        </button>
    );
};

export default ClearButton;
