import { useState } from 'react';

import './App.css';

const App = () => {
	const [buttonColor, setButtonColor] = useState('red');
  const [isDisabled, setIsDisabled] = useState(false)
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

	return (
		<div className='App'>
			<button
				onClick={() => setButtonColor(newButtonColor)}
				style={{ backgroundColor: buttonColor }}
        disabled={isDisabled}
				className='btn'
			>
				Change to {newButtonColor}
			</button>
			<input
				type='checkbox'
				defaultChecked={false}
				value={isDisabled}
        onClick={() => setIsDisabled(!isDisabled)}
				name='Disable button'
				className='checkbox'
			/>
			<label htmlFor='checkbox'>Disable button</label>
		</div>
	);
}

export default App;
