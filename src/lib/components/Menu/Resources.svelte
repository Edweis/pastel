<script>
  import Lifebuoy from "$lib/icons/lifebuoy.svelte";
  import Panel from "./Panel.svelte";
  let className = "";
  export { className as class };
</script>

<Panel class={className}>
  <div>
    <div class="mb-8  font-mono font-bold tracking-wider">USING MIXPANEL</div>
    <ol class="grid gap-8">
      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">Developer Docs</div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">Help Center</div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">Product Updates</div>
      </li>
      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">User Community</div>
      </li>
    </ol>
  </div>
  <div>
    <div class="mb-8  font-mono font-bold tracking-wider">BEST PRACTICES</div>
    <ol class="grid gap-8">
      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">FAQs</div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">Blog</div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">Engineering Blog</div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">Events</div>
      </li>
    </ol>
  </div>
  <div>
    <div class="mb-8  font-mono font-bold tracking-wider">MORE</div>
    <ol class="grid gap-8">
      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">Customer Stories</div>
      </li>
      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">Talk to a Partner</div>
      </li>
      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">Testimonials</div>
      </li>
      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-green-500" />
        <div class="font-bold text-white">Startup Program</div>
      </li>
    </ol>
  </div>
</Panel>
