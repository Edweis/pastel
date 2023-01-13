<script lang="ts">
  import Panel from "./Panel.svelte";
  import Lifebuoy from "$lib/icons/lifebuoy.svelte";
  import type { SubMenu } from "./menu";
  let className = "";
  export { className as class };
  export let categories: Array<{ name?: string; items: SubMenu[] }>;
</script>

<Panel class={className}>
  {#each categories as { items, name }}
    <div>
      {#if name}
        <div class="text-muted mb-8">{name}</div>
      {/if}
      <ol class="grid gap-8" class:grid-flow-col={!name}>
        {#each items as { title, description, href, icon }}
          <li class="flex">
            {#if icon}
              {icon}
            {:else}
              <Lifebuoy className="h-8 mr-4 text-indigo-500" />
            {/if}
            <div class="grid gap-2">
              <div class="font-bold text-white">{title}</div>
              <div>{description}</div>
            </div>
          </li>
        {/each}
      </ol>
    </div>
  {/each}
</Panel>
