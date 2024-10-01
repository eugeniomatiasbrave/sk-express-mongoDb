import { error } from '@sveltejs/kit';
const API_URL = process.env.VITE_API_URL;

export async function load({ params }) {
    const { _id } = params;

    try {
        const response = await fetch(`${API_URL}/products/${_id}`);
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