import { render, screen } from '@testing-library/react';
import Button from "./Button";

describe('Button tests', () => {
  test('should check that button renders with a value when passed', () => {
    render(<Button buttonValue="0" buttonType="number" setEquation={() => { }} />);
    const buttonText = screen.getByText("0");
    expect(buttonText).toBeInTheDocument();
  });
});
