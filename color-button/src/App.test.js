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
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });

	fireEvent.click(checkbox);
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkbox);
	expect(colorButton).toBeEnabled();
});

test('disabled button has gray background and reverts to red', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });

	checkbox.click();
	expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

	checkbox.click();
	expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('disabled button has gray background and reverts to blue', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const colorButton = screen.getByRole('button', { name: 'Change to blue' });

	// change button to blue
	fireEvent.click(colorButton);

	// disable button
	checkbox.click();
	expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

	// re-enable button
	checkbox.click();
	expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
});
