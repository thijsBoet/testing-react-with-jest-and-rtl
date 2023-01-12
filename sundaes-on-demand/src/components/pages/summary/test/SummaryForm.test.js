import { render, screen } from '@testing-library/react';
import { describe, it, test } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

describe('Summary Form Component', () => {
	test('button should be disabled by default', () => {
		render(<SummaryForm />);

		const button = screen.getByRole('button', { name: /confirm order/i });

		expect(button).toBeDisabled();
	});
	it('should be unchecked by default', () => {
		render(<SummaryForm />);

		const checkbox = screen.getByRole('checkbox', {
			name: /terms and conditions/i,
		});

		expect(checkbox).not.toBeChecked();
	});

	it('should enable button by checking checkbox', async () => {
		const user = userEvent.setup();
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox');
		const button = screen.getByRole('button', { name: /confirm order/i });

		expect(button).toBeDisabled();

		await user.click(checkbox);
		expect(button).toBeEnabled();
	});

	it('should disable button by unchecking checkbox', async () => {
		const user = userEvent.setup();
		render(<SummaryForm />);
		const checkbox = screen.getByRole('checkbox');
		const button = screen.getByRole('button', { name: /confirm order/i });

		await user.click(checkbox);
		expect(button).toBeEnabled();

		await user.click(checkbox);
		expect(button).toBeDisabled();
	});

	test('popover text should not be in document without hover', async () => {
		render(<SummaryForm />);
		const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);

		expect(nullPopover).not.toBeInTheDocument();
	});

	test('popover text should be in document on hover', async () => {
		const user = userEvent.setup();
		render(<SummaryForm />);
		const termsAndConditions = screen.getByText(/terms and conditions/i);

		await user.hover(termsAndConditions);
		const popover = screen.getByText(/no ice cream will actually be delivered/i);

		expect(popover).toBeInTheDocument();

		await user.unhover(termsAndConditions);
		expect(popover).not.toBeInTheDocument();
	});

});
