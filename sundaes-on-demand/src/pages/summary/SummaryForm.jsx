import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const SummaryForm = () => {
	const [isDisabled, setIsDisabled] = useState(true);

	const popover = (
		<Popover id='popover-basic'>
			<Popover.Body>
				No ice cream will actually be delivered
			</Popover.Body>
		</Popover>
	);

	const checkboxLabel = (
		<span>
			I agree to
			<OverlayTrigger placement='right' overlay={popover}>
				<a href=''> Terms and Conditions</a>
			</OverlayTrigger>
		</span>
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
					label={checkboxLabel}
				/>
			</Form.Group>
			<Button name='submit' type='submit' disabled={isDisabled}>
				Confirm order
			</Button>
		</Form>
	);
};

export default SummaryForm;
