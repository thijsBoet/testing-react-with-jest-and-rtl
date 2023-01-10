import React from 'react';

const SummaryForm = () => {
	return (
		<form>
			<input type='checkbox' name='terms' id='terms' />
			<label htmlFor='terms'>
				I agree to <a href=''>Terms and Conditions</a>
			</label>
			<br />
			<button name='submit' type='submit'>
				Confirm order
			</button>
		</form>
	);
};

export default SummaryForm;
