<script>
    import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';
    export let data;

	const products = data.products.payload;

    const searchProducts = products.map((product) => ({
		...product,
		searchTerms: `${product.code} ${product.name} ${product.presentation} ${product.price}`
	}));

	const searchStore = createSearchStore(searchProducts);
	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
   
</script>

<h1 class="my-10 text-4xl font-bold text-center text-white"> SvelteKit + Express Js + MongoDB</h1>

<div class="flex justify-center space-x-4 mt-4">
    <img class="h-32" src="https://miro.medium.com/v2/resize:fit:4800/format:webp/0*T6pKJjgoPIBy_u-_.png" alt="SvelteKit Logo">
    <img class="h-28" src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="Express Logo">
    <img class="h-36" src="https://ricardogeek.com/wp-content/uploads/2023/02/mongo.png" alt="MongoDB Logo">
</div>


<!--Search products-->
<div class="flex justify-center mt-10">
    <div class="bg-base-100 shadow-xl rounded-md w-full">
        <div class="form-control p-2">
            <input type="text" placeholder="Search..." bind:value={$searchStore.search} class="input input-bordered w-full" />  
        </div>
    </div>
</div>

<!--view products-->
<div class="flex flex-wrap justify-center items-center py-10 gap-4 ">
    {#each $searchStore.filtered as product}
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Product Image" class="w-full h-48 object-cover">
        </figure>
        <div class="card-body">
            <div class="space-y-2">
                <h2 class="card-title"><strong>{product.name}</strong> </h2>
                <p><strong>Code:</strong> {product.code}</p>
                <p><strong>Presentation:</strong> {product.presentation}</p>
                <p><strong>Price:</strong> ${product.price}</p>
            </div>
        </div>
    </div>
    {/each}
</div>
