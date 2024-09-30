import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { _id } = params;

    try {
        const response = await fetch(`http://localhost:8080/api/products/${_id}`);
        if (!response.ok) {
            throw new Error('Product not found');
        }
        const productById = await response.json();
        return { productById };
    } catch (err) {
        console.error('Error loading product:', err);
        throw error(500, 'Internal Error');
    }
}