import React from 'react';
import SummaryForm from './SummaryForm';

const OrderSummary = () => {
	return (
		<main>
			<h1>Order Summary</h1>
			<section>
				<h3>Scoops: </h3>
            </section>
            <section>
                <h3>Toppings: </h3>
            </section>
            <h3>Total</h3>
            <SummaryForm />
		</main>
	);
};

export default OrderSummary;
