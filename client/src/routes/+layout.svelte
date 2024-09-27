<script>
	import "../app.css";
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
	  <a href="/" class="btn btn-ghost text-xl">Vademecum</a>
	</div>
	<div class="flex-none">
	  <ul class="menu menu-horizontal px-1">
		<li><a href="/" class="btn btn-ghost">Home</a></li>
		<li><a href="/products" class="btn btn-ghost">Products</a></li>
	  </ul>
	</div>
  </div>

<div class="container mx-auto">
	<slot />
</div>