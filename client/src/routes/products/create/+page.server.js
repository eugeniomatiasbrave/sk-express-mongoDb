import { redirect } from '@sveltejs/kit';

const API_URL = process.env.VITE_API_URL;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const code = formData.get('code');
		const name = formData.get('name');
		const presentation = formData.get('presentation');
		const price = formData.get('price');

		if (isNaN(price)) {
			return { success: false, error: 'Error, is not an number' };
		}

		if (!name || !presentation || !price || !code) {
			return { success: false, error: 'Error Data ' };
		}

		const newProduct = {
			code,
			name,
			presentation,
			price
		};

		const result = await fetch(`${API_URL}/products`, {
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