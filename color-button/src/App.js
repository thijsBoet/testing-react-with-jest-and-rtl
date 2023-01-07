import { useState } from 'react';
import './App.css';

export const replaceCamelWithSpaces = colorName =>
	colorName.replace(/\B([A-Z])\B/g, ' $1');

const App = () => {
	const [buttonColor, setButtonColor] = useState('MediumVioletRed');
	const [isDisabled, setIsDisabled] = useState(false);
	const newButtonColor =
		buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

	return (
		<div className='App'>
			<button
				onClick={() => setButtonColor(newButtonColor)}
				style={{ backgroundColor: isDisabled ? 'gray' : buttonColor }}
				disabled={isDisabled}
				className='btn'
			>
				Change to {replaceCamelWithSpaces(newButtonColor)}
			</button>
			<input
				type='checkbox'
				defaultChecked={false}
				value={isDisabled}
				onClick={() => setIsDisabled(!isDisabled)}
				id='checkbox'
			/>
			<label htmlFor='checkbox'>Disable button</label>
		</div>
	);
};

export default App;
