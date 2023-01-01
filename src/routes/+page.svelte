<script lang="ts">
  import ImagePlaceholder from "$lib/components/ImagePlaceholder.svelte";
  import Observer from "$lib/components/Observer.svelte";
  import Bulb from "$lib/icons/bulb.svelte";
  import ArrowRight from "$lib/icons/right-arrow.svelte";
  import cn from "classnames";

  let intersecting1 = false;
  let intersecting2 = false;
  let intersecting3 = false;
  $: console.log({ intersecting1, intersecting2, intersecting3 });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section id="hero" class="mt-[190px] flex flex-col gap-8 text-center">
  <h1 class="text-8xl font-semibold tracking-wide">Build Better Products</h1>
  <h2 class="mx-16 text-2xl">
    Powerful, self-serve product analytics to help you convert, engage, and
    retain more users.
  </h2>
  <div class="flex justify-center gap-6 ">
    <button
      class="rounded-md bg-indigo-500 px-8 py-2 transition-all hover:bg-indigo-300"
      >Take a Tour</button
    >
    <button
      class="rounded-md border-2 border-white px-8 py-2 transition-all hover:bg-white hover:text-dark"
      >Sign Up</button
    >
  </div>
</section>
<section class="mx-auto mt-24 max-w-7xl">
  <ImagePlaceholder class="h-[520px] bg-gray-400" />
</section>

<section
  class="mx-auto mt-[100px] flex  max-w-7xl flex-col items-center gap-10"
>
  <div class="text-2xl">Trusted by 7,000+ paying customers</div>
  <ul class="grid w-full grid-cols-4 gap-y-8 text-center text-3xl">
    <li>DocuSign</li>
    <li>Uber</li>
    <li>Rakuten</li>
    <li>Yelp</li>
    <li>GoDaddy</li>
    <li>BuzzFeed</li>
    <li>Expedia</li>
    <li>ZipRecruiter</li>
  </ul>
  <div class="flex items-center gap-2">Meet Our Customers -></div>
</section>
<section class="mx-auto mt-[100px] flex max-w-7xl gap-10">
  <div class="flex flex-col gap-6">
    <h4 class="font-bold">UNDERSTAND</h4>
    <h2 class="text-6xl font-semibold tracking-wide">
      <span class="text-orange-500">Powerful</span> reports to answer any question
    </h2>
    <p>
      Great products are built by teams who know their users. Go beneath the
      surface to learn which features are popular, who you power users are, and
      the behaviors tied to long-term retention.
    </p>
    <a href="#" class="flex items-center gap-2"
      >Learn More About Interactive Reports <ArrowRight /></a
    >
  </div>
  <div class="h-[300px] w-[300px] flex-shrink-0">
    <div class="h-full rounded-3xl border-4 border-orange-500 p-8">
      <div class="h-full rounded-3xl border-4 border-orange-500 p-8">
        <div class="h-full rounded-3xl border-4 border-orange-500 p-8">
          <div class="h-full rounded-3xl border-4 border-orange-500 p-8" />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="mx-auto mt-[100px] flex max-w-7xl gap-10">
  <div class="flex h-[1500px] flex-col justify-around">
    <Observer
      class="flex flex-col gap-4"
      bind:isIntersecting={intersecting1}
      options={{ threshold: 0.5 }}
    >
      <h4 class="flex items-center gap-4 font-bold ">
        <Bulb className="bg-orange-500 p-2 h-10 w-10 rounded-md" />
        <span>INSIGHTS REPORT</span>
      </h4>
      <h2 class="text-5xl font-semibold tracking-wide">
        How is my product used?
      </h2>
      <p>See which features are popular and how many power users you have.</p>
    </Observer>
    <Observer
      class="flex flex-col gap-4"
      bind:isIntersecting={intersecting2}
      options={{ threshold: 0.5 }}
    >
      <h4 class="flex items-center gap-4 font-bold ">
        <Bulb className="bg-orange-500 p-2 h-10 w-10 rounded-md" />
        <span>FUNNELS REPORT</span>
      </h4>
      <h2 class="text-5xl font-semibold tracking-wide">
        Where and why do users drop off?
      </h2>
      <p>Build retroactive funnels and analyze conversion rates on the fly.</p>
    </Observer>
    <Observer
      class="flex flex-col gap-4"
      bind:isIntersecting={intersecting3}
      options={{ threshold: 0.5 }}
    >
      <h4 class="flex items-center gap-4 font-bold ">
        <Bulb className="bg-orange-500 p-2 h-10 w-10 rounded-md" />
        <span>RETENTION REPORT</span>
      </h4>
      <h2 class="text-5xl font-semibold tracking-wide">
        Which users retain best?
      </h2>
      <p>See which types of users stick around, and for how long.</p>
    </Observer>
  </div>

  <div class="relative ">
    <ImagePlaceholder
      class={cn(
        "sticky top-[20vh] h-[500px] w-[850px] bg-yellow-100 transition-opacity duration-700 ",
        (intersecting2 || intersecting3) && "opacity-0"
      )}>INSIGHTS REPORT</ImagePlaceholder
    >
    <ImagePlaceholder
      class={cn(
        "sticky top-[20vh] h-[500px]  w-[850px] bg-indigo-100 transition-opacity duration-700",
        intersecting2 || "opacity-0  ",
        (intersecting1 || intersecting2 || intersecting3) && "fixed"
      )}>FUNNELS REPORT</ImagePlaceholder
    >
    <ImagePlaceholder
      class={cn(
        "sticky top-[20vh] h-[500px]  w-[850px] bg-green-100 transition-opacity duration-700",
        intersecting3 || "opacity-0"
      )}>RETENTION REPORT</ImagePlaceholder
    >
  </div>
</section>

<section class="mx-auto mt-[100px] flex max-w-7xl gap-10">
  <div class="flex flex-col gap-6">
    <h4 class="font-bold">EXPLORE</h4>
    <h2 class="text-6xl font-semibold tracking-wide">
      <span class="text-green-500">Simple</span> workflows to get answers fast
    </h2>
    <p>
      Build funnels, see top user flows, create cohorts, and more with just a
      few clicks. No need to invest hours writing SQL or waiting on someone to
      do it for you.
    </p>
    <a href="#" class="flex items-center gap-2"
      >Try it with sample data <ArrowRight /></a
    >
  </div>
  <div class="h-[300px] w-[300px] flex-shrink-0">
    <div class="h-full rounded-full border-4 border-green-500 p-8">
      <div class="h-full rounded-full border-4 border-green-500 p-8">
        <div class="h-full rounded-full border-4 border-green-500 p-8">
          <div class="h-full rounded-full border-4 border-green-500 p-8" />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="mx-auto mt-[100px] flex max-w-7xl gap-10">
  <div class="flex flex-col gap-6">
    <h4 class="font-bold">Integrate</h4>
    <h2 class="text-6xl font-semibold tracking-wide">
      <span class="text-yellow-500">Connect</span> to your data lake
    </h2>
    <p>
      Build funnels, see top user flows, create cohorts, and more with just a
      few clicks. No need to invest hours writing SQL or waiting on someone to
      do it for you.
    </p>
    <a href="#" class="flex items-center gap-2"
      >Try it with sample data <ArrowRight /></a
    >
  </div>
  <div class="h-[300px] w-[300px] flex-shrink-0">
    <div class="h-full rounded-3xl border-4 border-yellow-500 p-8">
      <div class="h-full rounded-3xl border-4 border-yellow-500 p-8">
        <div class="h-full rounded-3xl border-4 border-yellow-500 p-8">
          <div class="h-full rounded-3xl border-4 border-yellow-500 p-8" />
        </div>
      </div>
    </div>
  </div>
</section>
