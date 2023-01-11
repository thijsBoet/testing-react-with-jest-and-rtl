import { render, screen } from '@testing-library/react';
import { describe, it, test } from '@jest/globals';
import SummaryForm from '../SummaryForm';

describe('Checkbox', () => {
	test('button should be disabled by default', () => {
		render(<SummaryForm />);
		const button = screen.getByRole('button', { name: /confirm order/i });
		expect(button).toBeDisabled();
	});
	it('should be unchecked by default', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
		expect(checkbox).not.toBeChecked();
	});

	it('should enable button by checking checkbox', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox');
		const button = screen.getByRole('button', {name: /confirm order/i});
		expect(button).toBeDisabled();
		checkbox.click();
		expect(button).toBeEnabled();
	});

	it('should disable button by unchecking checkbox', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox');
		const button = screen.getByRole('button', {name: /confirm order/i});
		checkbox.click();
		expect(button).toBeEnabled();
		checkbox.click();
		expect(button).toBeDisabled();
	});
});