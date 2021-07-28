import React, { Dispatch, SetStateAction } from 'react'

type ButtonProps = {
  buttonValue: string;
  buttonType: "number" | "operator";
  setEquation: Dispatch<SetStateAction<string>>;
}

const Button = ({ buttonValue, buttonType, setEquation }: ButtonProps): JSX.Element => {
  const updateEquation = () => {
    setEquation((prevEquation: string) => prevEquation.concat(buttonValue))
  }

  return (
    <button
      className={`button ${buttonType === "number" ? "button--number" : "button--operator"}`}
      onClick={() => updateEquation()}
    >
      {buttonValue}
    </button>
  );
};

export default Button
