<script>
    export let data;
	const Products = data.products.payload;
  
</script>

    <h2 class="my-4 text-4xl font-bold text-center text-white">List of Products</h2>
    <div class="my-2">
		<a href="/products/create" class="btn btn-warning">Create Product</a>  
    </div>
    <!-- Contenedor de lista de favoritos -->
    <div class="w-full rounded-md shadow-xl card bg-base-100">
        <div class="card-body">
            <div class="container-table">
                <div class="overflow-x-auto">
                    <table class="table">
                        <!-- head -->
                        <thead class="text-center">
                            <tr>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Presentation</th>
                                <th>Price</th>
                                <th>Detail</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            {#each Products as p (p._id)}
                                <tr class="hover">
                                    <td>{p.code}</td>
                                    <td>{p.name}</td>
                                    <td>{p.presentation}</td>
                                    <td>{p.price}</td>
                                    <td>
                                        <a href={`/products/${p._id}`} class="btn btn-primary">Detail</a>
                                    </td>
                                    <td>
                                        <a href={`/products/${p._id}/edit`} class="btn btn-primary">Edit</a>
                                    </td>
                                    <td>
                                        <form method="POST" action={`/products/${p._id}/delete`}>
                                            <input type="hidden" name="pid" value={p._id} />
                                            <button type="submit" class="btn btn-warning">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
