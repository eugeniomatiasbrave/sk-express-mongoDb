import { error } from '@sveltejs/kit';
const API_URL = process.env.VITE_API_URL;

export async function load({ params }) {
    const { _id } = params;

    try {
        const getProductById = async () => {
            const response = await fetch(`${API_URL}/products/${_id}`);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error('Product not found');
            }

            return data;
        }
        
        return {
            productById: await getProductById(),

        };

    } catch (err) {
        return error(404, err.message );
    }
}