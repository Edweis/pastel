<script>
  import Header from "./Header.svelte";
  import "./styles.scss";
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>
  <footer>
    <p class="bg-blue-400">
      visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
  </footer>
</div>

<style>
</style>
