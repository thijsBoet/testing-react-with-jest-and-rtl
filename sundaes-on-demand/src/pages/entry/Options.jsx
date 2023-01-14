import React, { useEffect, useState } from 'react';

import { Row } from 'react-bootstrap/Row';

import ScoopsOptions from './ScoopsOptions';
import ToppingsOptions from './ToppingsOptions';

const Options = ({ optionsType }) => {
	const [items, setItems] = useState([]);

	// optionType is either 'scoops' or 'toppings'
	useEffect(async () => {
		try {
			let response = await fetch(`http://localhost:3030/${optionsType}`);
			setItems(response.json());
		} catch (error) {
			console.log(error);
		}
	}, [optionsType]);

	const ItemComponent =
		optionsType === 'scoops' ? ScoopsOptions : ToppingsOptions;

	const optionItems = items.map(item => (
		<ItemComponent
			key={item.name}
			name={item.name}
			imagePath={item.imagePath}
		/>
	));

	return <Row>{optionItems}</Row>;
};

export default Options;
