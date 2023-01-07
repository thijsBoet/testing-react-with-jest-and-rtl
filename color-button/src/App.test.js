import { render, screen, fireEvent, logRoles } from '@testing-library/react';

import App from './App';

test('button has the correct initial color', () => {
	render(<App />);

	// find an element with a role of button and text of 'Change to blue'
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });

	// expect the background color to be red
	expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});
test('button has correct initial text', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });
	expect(colorButton.textContent).toBe('Change to blue');
});
test('button turns blue when clicked', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });
	fireEvent.click(colorButton);
	expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });
	expect(colorButton).toBeEnabled();

	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});