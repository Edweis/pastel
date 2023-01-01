<script>
  // import { page } from "$app/stores";
  // import logo from "$lib/images/svelte-logo.svg";
  // import github from "$lib/images/github.svg";
  import cn from "classnames";
  import Globe from "$lib/icons/globe.svelte";
  import MenuWhy from "$lib/components/Menu/Why.svelte";
  let scrollY = 0;
  const underlineAfter =
    "after:origin-center relative  after:absolute after:h-[2px] after:inset-0 after:top-auto after:-bottom-1 after:transition-all after:scale-0 after:hover:scale-100";
</script>

<svelte:window bind:scrollY />

<header class="fixed top-0 left-0 right-0 z-50 mx-auto max-w-6xl">
  <nav
    class="relative mt-4 flex items-center justify-between rounded-lg border-[0.5px] border-gray-500   bg-dark p-4 text-white shadow-lg shadow-black/40 transition-all duration-700"
    class:border-dark={scrollY === 0}
    class:shadow-none={scrollY === 0}
  >
    <a href="/" class="text-2xl">Pastel</a>
    <ul class="grid grid-flow-col gap-4 text-xl font-light">
      <li class="group">
        <a href="/why" class={underlineAfter + " after:bg-indigo-500 "}
          >Why Pastel</a
        >
        <MenuWhy class="visible hover:visible group-hover:visible" />
      </li>
      <li>
        <a href="/solutions" class={underlineAfter + " after:bg-orange-500 "}
          >Solutions</a
        >
        <!-- <MenuSolution /> -->
      </li>
      <li>
        <a href="/resources" class={underlineAfter + " after:bg-green-500 "}
          >Resources</a
        >
        <!-- <MenuResources /> -->
      </li>
      <li>
        <a href="/pricing" class={underlineAfter + " after:bg-yellow-500 "}
          >Pricing</a
        >
        <!-- <MenuPricing /> -->
      </li>
    </ul>
    <div class="flex items-center gap-4 text-sm">
      <Globe />
      <div class="h-8  rounded-md border-l border-yellow-500" />
      <a href="/sales" class={underlineAfter + " after:bg-white"}
        >Contact Sales</a
      >
      <a href="/login" class={underlineAfter + " after:bg-white"}>Log in</a>
      <a href="/signup" class="rounded-md bg-indigo-500 px-6 py-3 text-base"
        >Sign Up</a
      >
    </div>
  </nav>
</header>
