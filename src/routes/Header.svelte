<script>
	// import { page } from "$app/stores";
	// import logo from "$lib/images/svelte-logo.svg";
	// import github from "$lib/images/github.svg";
	import cn from "classnames";
	import Globe from "$lib/icons/globe.svelte";
	let scrollY = 0;
	const underlineAfter =
		"after:origin-center relative  after:absolute after:h-[2px] after:inset-0 after:top-auto after:-bottom-1 after:transition-all after:scale-0 after:hover:scale-100";
</script>

<svelte:window bind:scrollY />
<header class="top-0 left-0 right-0 fixed max-w-6xl mx-auto z-50">
	<nav
		class="border-[0.5px] shadow-lg transition-all duration-700 items-center border-gray-500 shadow-black/40   bg-dark rounded-lg text-white mt-4 py-4 px-4 flex justify-between"
		class:border-dark={scrollY === 0}
		class:shadow-none={scrollY === 0}
	>
		<a href="/" class="text-2xl">Pastel</a>
		<div class="group grid grid-flow-col gap-4 text-xl font-light">
			<a href="/why" class={underlineAfter + " after:bg-indigo-500 "}
				>Why Pastel</a
			>
			<a
				href="/solutions"
				class={underlineAfter + " after:bg-orange-500 "}>Solutions</a
			>
			<a href="/resources" class={underlineAfter + " after:bg-green-500 "}
				>Resources</a
			>
			<a href="/pricing" class={underlineAfter + " after:bg-yellow-500 "}
				>Pricing</a
			>
		</div>
		<div class="flex items-center gap-4 text-sm">
			<Globe />
			<div class="border-l  border-yellow-500 rounded-md h-8" />
			<a href="/sales" class={underlineAfter + " after:bg-white"}
				>Contact Sales</a
			>
			<a href="/login" class={underlineAfter + " after:bg-white"}
				>Log in</a
			>
			<a
				href="/signup"
				class="text-base px-6 py-3 bg-indigo-500 rounded-md">Sign Up</a
			>
		</div>
	</nav>
</header>
