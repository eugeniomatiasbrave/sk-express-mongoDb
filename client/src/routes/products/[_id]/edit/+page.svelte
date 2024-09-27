<script >
    
    export let data;

    const { product } = data;

    
 console.log(product.data._id);
 console.log(product.data.name);
 console.log(product.data.description);
 console.log(product.data.price);

    
</script>


<div class="min-h-screen hero">
    <div class="flex-col hero-content lg:flex-row-reverse">
        <div class="flex-shrink-0 w-full max-w-sm shadow-lg card rounded-xl bg-base-100">
            <div class="card-body">
                <h2 class="text-xl font-bold">Edit Product</h2>
                <form method="POST">
                    <input type="hidden" name="id" value={product.data._id} />
                    <div class="form-control">
                        <label class="label" for="name">
                            <span class="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={product.data.name}
                            placeholder="Product Name"
                            class="input input-bordered"
                            required
                        />
                    </div>
                    <div class="form-control">
                        <label class="label" for="description">
                            <span class="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            name="description"
                            value={product.data.description}
                            placeholder="Description"
                            class="input input-bordered"
                            required
                        />
                    </div>
                    <div class="form-control">
                        <label class="label" for="price">
                            <span class="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={product.data.price}
                            placeholder="Price of Product"
                            class="input input-bordered"
                            required
                        />
                    </div>
                    <div class="mt-6 form-control">
                        <button class="btn btn-info" type="submit">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>