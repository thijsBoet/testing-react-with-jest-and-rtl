import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';



const SummaryForm = () => {
	const [isDisabled, setIsDisabled] = useState(true);

	const checkboxLabel = (
		<label htmlFor='terms'>
			I agree to <a href=''>Terms and Conditions</a>
		</label>
	);

	return (
		<Form>
			<Form.Group controlId='terms-and-conditions'>
			<Form.Check
				type='checkbox'
				name='terms'
				id='terms'
				defaultChecked={false}
				value={isDisabled}
				onClick={() => setIsDisabled(!isDisabled)}
				/>
			</Form.Group>
			{checkboxLabel}
			<br />
			<Button name='submit' type='submit' disabled={isDisabled}>
				Confirm order
			</Button>
		</Form>
	);
};

export default SummaryForm;
