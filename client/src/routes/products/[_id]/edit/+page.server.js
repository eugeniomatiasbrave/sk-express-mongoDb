import { redirect } from '@sveltejs/kit';
const API_URL = process.env.VITE_API_URL;

export async function load({ params }) {
    const { _id } = params;
    
    try {
        const response = await fetch(`${API_URL}/products/${_id}`);
        if (!response.ok) {
            throw new Error('Product not found');
        }
        const product = await response.json();
        return { product };
    } catch (error) {
        console.error('Error loading product:', error);
        return { status: 500, error: 'Internal Error' };
    }
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const pid = formData.get('id');
        const code = formData.get('code');
        const name = formData.get('name');
        const presentation = formData.get('presentation');
        const price = formData.get('price');

        if (isNaN(price)) {
            return { success: false, error: 'Error, is not a number' };
        }
        if (!name || !presentation || !price || !code) {
            return { success: false, error: 'Error Data' };
        }

        const updatedProduct = {
            code,
            name,
            presentation,
            price
        };

        const result = await fetch(`${API_URL}/products/${pid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });

        if (!result.ok) {
            return { success: false, error: 'Error updating product' };
        }
        throw redirect(303, '/products');
    }
}