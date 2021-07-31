type ClearButtonProps = {
    buttonValue: string;
    buttonType: string;
    setOperator: React.Dispatch<React.SetStateAction<string>>;
    setFirstNum: React.Dispatch<React.SetStateAction<string | undefined>>;
    setSecondNum: React.Dispatch<React.SetStateAction<string>>;
    setClickedValue: React.Dispatch<React.SetStateAction<string>>;
};

const ClearButton = ({
    buttonValue,
    buttonType,
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
        <button className={buttonType} onClick={clearEquation}>
            {buttonValue}
        </button>
    );
};

export default ClearButton;
