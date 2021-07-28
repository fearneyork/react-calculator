import { render, screen } from '@testing-library/react';
import App from './App';

describe('Smoke test', () => {
  test('should render app without errors', () => {
    render(<App />)
    const header = screen.getByText(/React Calculator App/i);
    expect(header).toBeInTheDocument();
  });
});
