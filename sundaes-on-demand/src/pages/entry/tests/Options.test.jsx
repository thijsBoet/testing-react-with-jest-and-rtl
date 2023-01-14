import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('displays image for each scoop option from server', async () => {
	render(<Options optionType='scoops' />);

	// find images
	const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
	expect(scoopImages).toHaveLength(2);

	// confirm alt text of images
	// @ts-ignore
	const altText = scoopImages.map(element => element.alt);
	expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('displays image for each scoop option from server', async () => {
	render(<Options optionType='toppings' />);

	// find images
	const images = await screen.findAllByRole('img', { name: /toppings$/i });
	expect(images).toHaveLength(3);

	// confirm alt text of images
	// @ts-ignore
	const altText = images.map(img => img.alt);
	expect(altText).toEqual([
		'Cherries scoop',
		'M&Ms scoop',
		'Hot fudge scoop'
	]);
});