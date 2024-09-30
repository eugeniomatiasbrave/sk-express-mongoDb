<script >   
 export let data;
 const { productById } = data;

 console.log(productById.data.code);

</script>

<h1 class="my-10 text-4xl font-bold text-center text-white">Product Detail</h1>
<div class="flex justify-center items-center mt-16 ">
    <div class="card w-96 bg-base-100 shadow-xl">
		<figure>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Product Image" class="w-full h-48 object-cover">
		</figure>
        <div class="card-body">
            <div class="space-y-2">
                <p><strong>Code:</strong> {productById.data.code}</p>
                <p><strong>Name:</strong> {productById.data.name}</p>
                <p><strong>Presentation:</strong> {productById.data.presentation}</p>
                <p><strong>Price:</strong> ${productById.data.price}</p>
            </div>
            <div class="card-actions justify-end mt-4">
                <a href="/products" class="btn btn-primary">Back to Products</a>
            </div>
        </div>
    </div>
</div>
