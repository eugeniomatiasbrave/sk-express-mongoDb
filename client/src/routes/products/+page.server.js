
export const load = async () => {
    console.log('Server Load Ran')

    const getProducts = async () => {
        const response = await fetch('http://localhost:8080/api/products');
        const data = await response.json();
        return data;
    };

    return {
        products: await getProducts(),
    };
}

