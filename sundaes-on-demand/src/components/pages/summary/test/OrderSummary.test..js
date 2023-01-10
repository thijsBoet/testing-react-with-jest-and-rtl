import { render, screen } from '@testing-library/react';
import { describe, test } from '@jest/globals';
import SummaryForm from '../SummaryForm';


describe('Checkbox', () => {
	it('should be unchecked by default', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox');
		expect(checkbox).not.toBeChecked();
	});

	it('should enable button by checking checkbox', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox');
		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
		checkbox.click();
		expect(button).toBeEnabled();
	});

	it('should disable button by unchecking checkbox', () => {
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox');
		const button = screen.getByRole('button');
		checkbox.click();
		expect(button).toBeEnabled();
		checkbox.click();
		expect(button).toBeDisabled();
	});
});