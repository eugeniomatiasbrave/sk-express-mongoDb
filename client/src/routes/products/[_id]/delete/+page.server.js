import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const pid = formData.get('pid');

        if (!pid) {
            return { success: false, error: 'Product ID is required' };
        }

        const result = await fetch(`http://localhost:8080/api/products/${pid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!result.ok) {
            return { success: false, error: 'Error deleting product' };
        }

        throw redirect(303, '/products');
    }
}