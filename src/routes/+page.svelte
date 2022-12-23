<script>
	import Counter from "./Counter.svelte";
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="hero" class="text-center mt-[190px] flex flex-col gap-8 px">
	<h1 class="text-6xl font-semibold tracking-wide">Build Better Products</h1>
	<h2 class="text-2xl mx-16">
		Powerful, self-serve product analytics to help you convert, engage, and
		retain more users.
	</h2>
	<div class="flex justify-center gap-6 ">
		<button
			class="px-8 py-2 rounded-md hover:bg-indigo-300 transition-all bg-indigo-500"
			>Take a Tour</button
		>
		<button
			class="px-8 py-2 hover:bg-white rounded-md border-2 border-white hover:text-dark transition-all"
			>Sign Up</button
		>
	</div>
</section>
<section class="mt-24">
	<div
		class="w-full border border-white rounded-md h-[520px] flex items-center justify-center bg-gray-400"
	>
		My awesome image
	</div>
</section>

<section class="mt-[100px]  flex items-center flex-col gap-10">
	<div class="text-2xl">Trusted by 7,000+ paying customers</div>
	<ul class="grid grid-cols-4 w-full text-center text-3xl gap-y-8">
		<li>DocuSign</li>
		<li>Uber</li>
		<li>Rakuten</li>
		<li>Yelp</li>
		<li>GoDaddy</li>
		<li>BuzzFeed</li>
		<li>Expedia</li>
		<li>ZipRecruiter</li>
	</ul>
	<div class="flex items-center gap-2">
		Meet Our Customers
		<svg
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-4 h-4"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
			/>
		</svg>
	</div>
</section>
<section>
	<div>
		<h4>UNDERSTAND</h4>
		<h2>
			<span class="text-orange-700">Powerful</span> reports to answer any question
		</h2>
		<p>
			Great products are built by teams who know their users. Go beneath
			the surface to learn which features are popular, who you power users
			are, and the behaviors tied to long-term retention.
		</p>
		<a>Learn More About Interactive Reports -></a>
	</div>
	<div class="h-[300px] w-[300px] black">
		<div class="border-4 rounded-3xl border-orange-500 p-8 h-full">
			<div class="border-4 rounded-3xl border-orange-500 p-8 h-full">
				<div class="border-4 rounded-3xl border-orange-500 p-8 h-full">
					<div
						class="border-4 rounded-3xl border-orange-500 p-8 h-full"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
