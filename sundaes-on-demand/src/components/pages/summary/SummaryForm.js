import React, { useState } from 'react';

const SummaryForm = () => {
	const [isDisabled, setIsDisabled] = useState(true)
	return (
		<form>
			<input
				type='checkbox'
				name='terms'
				id='terms'
				defaultChecked={false}
				value={isDisabled}
				onClick={() => setIsDisabled(!isDisabled)}
			/>
			<label htmlFor='terms'>
				I agree to <a href=''>Terms and Conditions</a>
			</label>
			<br />
			<button name='submit' type='submit' disabled={isDisabled}>
				Confirm order
			</button>
		</form>
	);
};

export default SummaryForm;
