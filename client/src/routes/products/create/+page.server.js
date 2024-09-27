import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const description = formData.get('description');
		const price = formData.get('price');

		if (isNaN(price)) {
			return { success: false, error: 'Error, is not an number' };
		}

		if (!name || !description || !price) {
			return { success: false, error: 'Error Data ' };
		}

		const newProduct = {
			name,
			description,
			price
		};

		const result = await fetch('http://localhost:8080/api/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newProduct),
		});

		if (!result.ok) {
			return { success: false, error: 'Error' };
		}

		throw redirect(303, '/products');
	}
}