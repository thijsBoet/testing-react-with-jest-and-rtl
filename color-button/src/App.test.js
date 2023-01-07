import { render, screen, fireEvent, logRoles } from '@testing-library/react';

import App, { replaceCamelWithSpaces } from './App';

test('button has the correct initial color', () => {
	render(<App />);

	// find an element with a role of button and text of 'Change to blue'
	const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

	// expect the background color to be red
	expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});
test('button has correct initial text', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
	expect(colorButton.textContent).toBe('Change to Midnight Blue');
});
test('button turns MidnightBlue when clicked', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
	fireEvent.click(colorButton);
	expect(colorButton).toHaveTextContent('Change to Medium Violet Red');
}); 

test('initial conditions', () => {
	render(<App />);
	const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
	expect(colorButton).toBeEnabled();

	const checkbox = screen.getByRole('checkbox');
	expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

	fireEvent.click(checkbox);
	expect(colorButton).toBeDisabled();

	fireEvent.click(checkbox);
	expect(colorButton).toBeEnabled();
});

test('disabled button has gray background and reverts to MediumVioletRed', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

	checkbox.click();
	expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

	checkbox.click();
	expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('disabled button has gray background and reverts to MidnightBlue', () => {
	render(<App />);
	const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
	const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

	// change button to MidnightBlue
	fireEvent.click(colorButton);

	// disable button
	checkbox.click();
	expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

	// re-enable button
	checkbox.click();
	expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

describe('spaces before camelCase capital letters', () => {
	it('works for no inner capital letters', () => {
		expect(replaceCamelWithSpaces('Red')).toBe('Red');
	});
	it('works for one inner capital letter', () => {
		expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
	});
	it('works for multiple inner capital letters', () => {
		expect(replaceCamelWithSpaces('MidnightVioletRed')).toBe('Midnight Violet Red');
	});
});