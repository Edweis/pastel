<script>
  import cn from "classnames";
  import Globe from "$lib/icons/globe.svelte";
  import MenuWhy from "$lib/components/Menu/Why.svelte";
  import MenuSolutions from "$lib/components/Menu/Solutions.svelte";
  import MenuResources from "$lib/components/Menu/Resources.svelte";
  import { menu } from "./menu";
  import SubHeaderDesktop from "./SubHeaderDesktop.svelte";
  let scrollY = 0;
  const underlineAfter =
    "transition-colors ease-out group-hover:text-white after:origin-center relative  after:absolute after:h-[2px] after:inset-0 after:top-auto after:-bottom-1 after:transition-transform after:scale-0 after:hover:scale-100 after:group-hover:scale-100";
</script>

<svelte:window bind:scrollY />

<header class="fixed top-0 left-0 right-0 z-50 mx-auto max-w-6xl">
  <nav
    class="relative mt-4 flex items-center justify-between rounded-lg border-[0.5px] border-gray-500   bg-dark p-4 text-white shadow-lg shadow-black/40   "
    class:border-dark={scrollY === 0}
    class:shadow-none={scrollY === 0}
  >
    <a href="/" class="text-2xl">Pastel</a>
    <ul class="grid grid-flow-col gap-4 text-xl font-light hover:text-gray-500">
      {#each menu as { href, style, title, categories }}
        <li class="group">
          <a {href} class={cn(underlineAfter, style)}>{title}</a>
          {#if categories}
            <SubHeaderDesktop
              class="hover:visible group-hover:visible"
              {categories}
            />
          {/if}
        </li>
      {/each}
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
