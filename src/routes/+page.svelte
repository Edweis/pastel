<script lang="ts">
  import ImagePlaceholder from "$lib/components/ImagePlaceholder.svelte";
  import Observer from "$lib/components/Observer.svelte";
  import Book from "$lib/icons/book.svelte";
  import Bulb from "$lib/icons/bulb.svelte";
  import CheckCircle from "$lib/icons/check-circle.svelte";
  import classNames from "classnames";
  import cn from "classnames";

  let intersecting1 = false;
  let intersecting2 = false;
  let intersecting3 = false;
  let useCaseSectionHeight = 0;
  $: console.log({ useCaseSectionHeight });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="relative z-20 bg-dark">
  <section id="hero" class="flex flex-col gap-8 pt-[190px] text-center">
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
    <div class="text-link">Meet Our Customers</div>
  </section>
  <section class="mx-auto mt-[100px] flex max-w-7xl gap-10">
    <div class="flex flex-col gap-6">
      <p class="text-muted">UNDERSTAND</p>
      <h2 class="text-6xl font-semibold tracking-wide">
        <span class="text-orange-500">Powerful</span> reports to answer any question
      </h2>
      <p>
        Great products are built by teams who know their users. Go beneath the
        surface to learn which features are popular, who you power users are,
        and the behaviors tied to long-term retention.
      </p>
      <a href="#" class="text-link">Learn More About Interactive Reports</a>
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
          <span class="text-muted">INSIGHTS REPORT</span>
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
          <span class="text-muted">FUNNELS REPORT</span>
        </h4>
        <h2 class="text-5xl font-semibold tracking-wide">
          Where and why do users drop off?
        </h2>
        <p>
          Build retroactive funnels and analyze conversion rates on the fly.
        </p>
      </Observer>
      <Observer
        class="flex flex-col gap-4"
        bind:isIntersecting={intersecting3}
        options={{ threshold: 0.5 }}
      >
        <h4 class="flex items-center gap-4 font-bold ">
          <Bulb className="bg-orange-500 p-2 h-10 w-10 rounded-md" />
          <span class="text-muted">RETENTION REPORT</span>
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
      <p class="text-muted">EXPLORE</p>
      <h2 class="text-6xl font-semibold tracking-wide">
        <span class="text-green-500">Simple</span> workflows to get answers fast
      </h2>
      <p>
        Build funnels, see top user flows, create cohorts, and more with just a
        few clicks. No need to invest hours writing SQL or waiting on someone to
        do it for you.
      </p>
      <a href="#" class="text-link">Try it with sample data</a>
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
      <p class="text-muted">Integrate</p>
      <h2 class="text-6xl font-semibold tracking-wide">
        <span class="text-yellow-500">Connect</span> to your data lake
      </h2>
      <p>
        Build funnels, see top user flows, create cohorts, and more with just a
        few clicks. No need to invest hours writing SQL or waiting on someone to
        do it for you.
      </p>
      <a href="#" class="text-link">Try it with sample data</a>
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

  <section class="mx-auto mt-[100px] max-w-7xl  gap-10 pb-[100px]">
    <h2
      class="mx-auto max-w-md text-center text-6xl font-semibold tracking-wide"
    >
      What will your data teach you?
    </h2>
    <ul class="mt-20 flex justify-center gap-14">
      <li class="flex gap-2"><CheckCircle />Measure what matters</li>
      <li class="flex gap-2"><CheckCircle />Analyze usage trends</li>
      <li class="flex gap-2"><CheckCircle />Answer your questions</li>
    </ul>
    <div class="mt-24 text-center">
      <a
        href="#"
        class="rounded-md bg-indigo-500 px-8 py-4 transition-all hover:bg-indigo-300"
        >Get Started</a
      >
    </div>
  </section>
</div>
<div class="static h-screen" />

<section
  class="fixed inset-0 z-10 flex min-h-screen items-end bg-indigo-500"
  bind:clientHeight={useCaseSectionHeight}
>
  <div class="mx-auto   mt-auto grid max-w-6xl grid-cols-4 gap-8 pb-16">
    <div class="col-span-2 grid">
      <p class="text-muted">Customer Story</p>

      <h2 class="text-6xl font-semibold tracking-wide">
        Lemonade is defining the modern insurance industry
      </h2>
      <ul class="ml-4 grid list-disc ">
        <li>
          Customer-first experience: <b class="font-bold">4.9 star app</b>
        </li>
        <li>
          Data-informed decisions: <b class="font-bold">95% of employees</b> use
          analytics
        </li>
        <li>
          Business results: <b class="font-bold"
            >500% increase in policy holders</b
          >, IPO five years after founding
        </li>
      </ul>
      <a href="#" class="text-link text-white hover:text-gray-500"
        >Meet Our Customers</a
      >
    </div>
    <ImagePlaceholder
      class="h-[546px] w-[264px] flex-shrink-0 rounded-2xl border-0 bg-white ring-8 ring-black"
      >iPhone screenshot</ImagePlaceholder
    >
    <div class="my-auto grid gap-8">
      <span class="text-2xl">Lemonade</span>
      <p class="text-xl font-thin">
        “I've used Mixpanel at many companies before—it's the go-to solution
        when you need user and product analytics.”
      </p>
      <div class="flex gap-4">
        <img
          class="h-20 w-20 rounded-full border-4 border-white"
          alt="profile"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <div class="flex flex-col justify-center">
          <span class="text-xl font-bold">Thomas Sidos</span>
          <span class="font-thin">Head of Product</span>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="relative z-20 bg-white text-dark">
  <section class="mx-auto mt-[100px] grid  max-w-7xl gap-10 py-32">
    <div class="flex justify-between">
      <h2 class="text-5xl font-bold">Resources for growing your product</h2>
      <a href="#" class="text-link text-indigo-500">View ressources</a>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <article class="grid gap-4">
        <ImagePlaceholder class="h-[200px] bg-gray-400" />
        <span class="text-muted flex gap-2">
          <Book /> Book
        </span>
        <p class="text-4xl font-semibold">The guide to product analytics</p>
        <a href="#" class="text-link   text-indigo-500">Check out the book</a>
      </article>
      <article class="grid gap-4">
        <ImagePlaceholder class="h-[200px] bg-gray-400" />
        <span class="text-muted flex gap-2">
          <Book /> Blog
        </span>
        <p class="text-4xl font-semibold">A primer on product metrics</p>
        <a href="#" class="text-link   text-indigo-500">Read article</a>
      </article>
      <article class="grid gap-4">
        <ImagePlaceholder class="h-[200px] bg-gray-400" />
        <span class="text-muted flex gap-2">
          <Book /> Webinar
        </span>
        <p class="text-4xl font-semibold">The state of product analytics</p>
        <a href="#" class="text-link   text-indigo-500">Watch Webinar</a>
      </article>
    </div>
  </section>
</div>
