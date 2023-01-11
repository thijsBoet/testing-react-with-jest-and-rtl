import { render, screen } from '@testing-library/react';
import OrderSummary from '../OrderSummary';
import SummaryForm from '../SummaryForm';

it('should render the SummaryForm component', () => {
	render(<OrderSummary />);
	const checkbox = screen.getByText(/I agree to Terms and Conditions/i);
	expect(checkbox).toBeInTheDocument();
});
