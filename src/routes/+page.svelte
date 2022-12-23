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
<section class="">
	<div id="Inner">
		<div id="Languages">
			<a href="http://hy.lipsum.com/">Հայերեն</a>
			<a href="http://sq.lipsum.com/">Shqip</a>
			<span class="ltr" dir="ltr"
				><a href="http://ar.lipsum.com/">‫العربية</a></span
			> <a href="http://bg.lipsum.com/">Български</a>
			<a href="http://ca.lipsum.com/">Català</a>
			<a href="http://cn.lipsum.com/">中文简体</a>
			<a href="http://hr.lipsum.com/">Hrvatski</a>
			<a href="http://cs.lipsum.com/">Česky</a>
			<a href="http://da.lipsum.com/">Dansk</a>
			<a href="http://nl.lipsum.com/">Nederlands</a>
			<a class="zz" href="http://www.lipsum.com/">English</a>
			<a href="http://et.lipsum.com/">Eesti</a>
			<a href="http://ph.lipsum.com/">Filipino</a>
			<a href="http://fi.lipsum.com/">Suomi</a>
			<a href="http://fr.lipsum.com/">Français</a>
			<a href="http://ka.lipsum.com/">ქართული</a>
			<a href="http://de.lipsum.com/">Deutsch</a>
			<a href="http://el.lipsum.com/">Ελληνικά</a>
			<span class="ltr" dir="ltr"
				><a href="http://he.lipsum.com/">‫עברית</a></span
			> <a href="http://hi.lipsum.com/">हिन्दी</a>
			<a href="http://hu.lipsum.com/">Magyar</a>
			<a href="http://id.lipsum.com/">Indonesia</a>
			<a href="http://it.lipsum.com/">Italiano</a>
			<a href="http://lv.lipsum.com/">Latviski</a>
			<a href="http://lt.lipsum.com/">Lietuviškai</a>
			<a href="http://mk.lipsum.com/">македонски</a>
			<a href="http://ms.lipsum.com/">Melayu</a>
			<a href="http://no.lipsum.com/">Norsk</a>
			<a href="http://pl.lipsum.com/">Polski</a>
			<a href="http://pt.lipsum.com/">Português</a>
			<a href="http://ro.lipsum.com/">Româna</a>
			<a href="http://ru.lipsum.com/">Pyccкий</a>
			<a href="http://sr.lipsum.com/">Српски</a>
			<a href="http://sk.lipsum.com/">Slovenčina</a>
			<a href="http://sl.lipsum.com/">Slovenščina</a>
			<a href="http://es.lipsum.com/">Español</a>
			<a href="http://sv.lipsum.com/">Svenska</a>
			<a href="http://th.lipsum.com/">ไทย</a>
			<a href="http://tr.lipsum.com/">Türkçe</a>
			<a href="http://uk.lipsum.com/">Українська</a>
			<a href="http://vi.lipsum.com/">Tiếng Việt</a>
		</div>

		<h1>Lorem Ipsum</h1>
		<h4>
			"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
			consectetur, adipisci velit..."
		</h4>
		<h5>
			"There is no one who loves pain itself, who seeks after it and wants
			to have it, simply because it is pain..."
		</h5>

		<hr />

		<div id="Content">
			<div id="bannerL">
				<div id="div-gpt-ad-1474537762122-2">
					<script type="text/javascript">
						googletag.cmd.push(function () {
							googletag.display("div-gpt-ad-1474537762122-2");
						});
					</script>
				</div>
			</div>
			<div id="bannerR">
				<div id="div-gpt-ad-1474537762122-3">
					<script type="text/javascript">
						googletag.cmd.push(function () {
							googletag.display("div-gpt-ad-1474537762122-3");
						});
					</script>
				</div>
			</div>
			<div class="boxed">
				<!-- 
		
		
		If you want to use Lorem Ipsum within another program please contact us for details
		on our API rather than parse the HTML below, we have XML and JSON available.
		
		
		 -->
				<div id="lipsum">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent eleifend eros ornare ex ornare ornare.
						Vestibulum eu neque vitae ipsum pulvinar laoreet nec et
						enim. Integer at odio est. Mauris non metus eget augue
						vestibulum posuere eget sed lectus. Cras consequat, erat
						sed efficitur porta, est metus interdum arcu, a dapibus
						eros diam sed mi. Aenean vitae laoreet arcu, quis
						placerat quam. Nunc auctor, tellus vel mattis faucibus,
						lorem lorem elementum erat, ut feugiat sapien turpis id
						sem. Proin nisl ligula, ullamcorper id libero eget,
						fringilla tincidunt est. Aliquam venenatis imperdiet
						diam, eu ultrices erat fermentum at. Curabitur pulvinar
						turpis vel euismod auctor.
					</p>
					<p>
						Donec eu dolor at tortor vulputate sollicitudin. Nunc
						dapibus ullamcorper porttitor. Integer sit amet tellus
						nibh. Phasellus non sem non nisl molestie fringilla ut
						sit amet dolor. Duis eleifend ex odio, eget bibendum ex
						rhoncus sit amet. Pellentesque a efficitur nisl. Fusce
						et lacinia ipsum. Nunc dignissim fringilla tellus eu
						lobortis. Aenean at faucibus justo, vel laoreet libero.
						Mauris nibh lacus, tempus vitae laoreet eu, vehicula
						fringilla purus. Aliquam vehicula nulla a ex mattis, et
						maximus erat scelerisque. Ut lacinia tortor porta nunc
						mollis, et dapibus urna ornare. Duis volutpat dolor
						nisl, egestas pretium magna maximus non. Class aptent
						taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos.
					</p>
					<p>
						Vestibulum arcu libero, rhoncus ac nunc in, facilisis
						hendrerit quam. Curabitur fringilla ut tortor sed
						mattis. Sed venenatis est ut massa viverra pellentesque.
						Donec sit amet lacus in magna aliquam vestibulum at non
						velit. Nunc eget hendrerit ante. Quisque placerat metus
						nibh, feugiat efficitur massa efficitur et. Praesent
						tincidunt id tortor eu mattis. Aenean commodo enim sed
						velit malesuada, at auctor dui dapibus. Ut bibendum id
						turpis eget molestie.
					</p>
					<p>
						Proin vitae quam et ipsum mollis auctor. Aliquam eget
						urna leo. Suspendisse potenti. Nam ex erat, rhoncus non
						nunc eget, consequat placerat lectus. Phasellus nec nisl
						eros. Vestibulum rutrum ac magna in mattis. Nam orci
						tellus, sollicitudin quis facilisis nec, sagittis non
						nibh. Mauris aliquam sagittis enim sit amet imperdiet.
					</p>
					<p>
						Ut ac justo et augue fringilla tempus. Vivamus eu mattis
						arcu. Sed arcu diam, feugiat sed augue vel, suscipit
						laoreet neque. Quisque ut imperdiet nisi, quis pulvinar
						ex. Integer fermentum nec leo vitae imperdiet. Aliquam
						sagittis lorem et mi convallis, at posuere dui
						tincidunt. Etiam porta molestie rutrum. Curabitur id
						neque dapibus, facilisis ex eu, sollicitudin odio. Sed
						accumsan ac lacus et pulvinar. Sed sagittis diam mi, a
						semper dolor vestibulum ut. Ut odio tortor, tempus vitae
						vulputate at, tristique sit amet tellus. Donec porta
						ligula pulvinar lacus fermentum tempor. Proin malesuada
						mauris lectus, id sodales elit interdum ut.
					</p>
				</div>
				<div id="lipsum">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent eleifend eros ornare ex ornare ornare.
						Vestibulum eu neque vitae ipsum pulvinar laoreet nec et
						enim. Integer at odio est. Mauris non metus eget augue
						vestibulum posuere eget sed lectus. Cras consequat, erat
						sed efficitur porta, est metus interdum arcu, a dapibus
						eros diam sed mi. Aenean vitae laoreet arcu, quis
						placerat quam. Nunc auctor, tellus vel mattis faucibus,
						lorem lorem elementum erat, ut feugiat sapien turpis id
						sem. Proin nisl ligula, ullamcorper id libero eget,
						fringilla tincidunt est. Aliquam venenatis imperdiet
						diam, eu ultrices erat fermentum at. Curabitur pulvinar
						turpis vel euismod auctor.
					</p>
					<p>
						Donec eu dolor at tortor vulputate sollicitudin. Nunc
						dapibus ullamcorper porttitor. Integer sit amet tellus
						nibh. Phasellus non sem non nisl molestie fringilla ut
						sit amet dolor. Duis eleifend ex odio, eget bibendum ex
						rhoncus sit amet. Pellentesque a efficitur nisl. Fusce
						et lacinia ipsum. Nunc dignissim fringilla tellus eu
						lobortis. Aenean at faucibus justo, vel laoreet libero.
						Mauris nibh lacus, tempus vitae laoreet eu, vehicula
						fringilla purus. Aliquam vehicula nulla a ex mattis, et
						maximus erat scelerisque. Ut lacinia tortor porta nunc
						mollis, et dapibus urna ornare. Duis volutpat dolor
						nisl, egestas pretium magna maximus non. Class aptent
						taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos.
					</p>
					<p>
						Vestibulum arcu libero, rhoncus ac nunc in, facilisis
						hendrerit quam. Curabitur fringilla ut tortor sed
						mattis. Sed venenatis est ut massa viverra pellentesque.
						Donec sit amet lacus in magna aliquam vestibulum at non
						velit. Nunc eget hendrerit ante. Quisque placerat metus
						nibh, feugiat efficitur massa efficitur et. Praesent
						tincidunt id tortor eu mattis. Aenean commodo enim sed
						velit malesuada, at auctor dui dapibus. Ut bibendum id
						turpis eget molestie.
					</p>
					<p>
						Proin vitae quam et ipsum mollis auctor. Aliquam eget
						urna leo. Suspendisse potenti. Nam ex erat, rhoncus non
						nunc eget, consequat placerat lectus. Phasellus nec nisl
						eros. Vestibulum rutrum ac magna in mattis. Nam orci
						tellus, sollicitudin quis facilisis nec, sagittis non
						nibh. Mauris aliquam sagittis enim sit amet imperdiet.
					</p>
					<p>
						Ut ac justo et augue fringilla tempus. Vivamus eu mattis
						arcu. Sed arcu diam, feugiat sed augue vel, suscipit
						laoreet neque. Quisque ut imperdiet nisi, quis pulvinar
						ex. Integer fermentum nec leo vitae imperdiet. Aliquam
						sagittis lorem et mi convallis, at posuere dui
						tincidunt. Etiam porta molestie rutrum. Curabitur id
						neque dapibus, facilisis ex eu, sollicitudin odio. Sed
						accumsan ac lacus et pulvinar. Sed sagittis diam mi, a
						semper dolor vestibulum ut. Ut odio tortor, tempus vitae
						vulputate at, tristique sit amet tellus. Donec porta
						ligula pulvinar lacus fermentum tempor. Proin malesuada
						mauris lectus, id sodales elit interdum ut.
					</p>
				</div>
				<div id="lipsum">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent eleifend eros ornare ex ornare ornare.
						Vestibulum eu neque vitae ipsum pulvinar laoreet nec et
						enim. Integer at odio est. Mauris non metus eget augue
						vestibulum posuere eget sed lectus. Cras consequat, erat
						sed efficitur porta, est metus interdum arcu, a dapibus
						eros diam sed mi. Aenean vitae laoreet arcu, quis
						placerat quam. Nunc auctor, tellus vel mattis faucibus,
						lorem lorem elementum erat, ut feugiat sapien turpis id
						sem. Proin nisl ligula, ullamcorper id libero eget,
						fringilla tincidunt est. Aliquam venenatis imperdiet
						diam, eu ultrices erat fermentum at. Curabitur pulvinar
						turpis vel euismod auctor.
					</p>
					<p>
						Donec eu dolor at tortor vulputate sollicitudin. Nunc
						dapibus ullamcorper porttitor. Integer sit amet tellus
						nibh. Phasellus non sem non nisl molestie fringilla ut
						sit amet dolor. Duis eleifend ex odio, eget bibendum ex
						rhoncus sit amet. Pellentesque a efficitur nisl. Fusce
						et lacinia ipsum. Nunc dignissim fringilla tellus eu
						lobortis. Aenean at faucibus justo, vel laoreet libero.
						Mauris nibh lacus, tempus vitae laoreet eu, vehicula
						fringilla purus. Aliquam vehicula nulla a ex mattis, et
						maximus erat scelerisque. Ut lacinia tortor porta nunc
						mollis, et dapibus urna ornare. Duis volutpat dolor
						nisl, egestas pretium magna maximus non. Class aptent
						taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos.
					</p>
					<p>
						Vestibulum arcu libero, rhoncus ac nunc in, facilisis
						hendrerit quam. Curabitur fringilla ut tortor sed
						mattis. Sed venenatis est ut massa viverra pellentesque.
						Donec sit amet lacus in magna aliquam vestibulum at non
						velit. Nunc eget hendrerit ante. Quisque placerat metus
						nibh, feugiat efficitur massa efficitur et. Praesent
						tincidunt id tortor eu mattis. Aenean commodo enim sed
						velit malesuada, at auctor dui dapibus. Ut bibendum id
						turpis eget molestie.
					</p>
					<p>
						Proin vitae quam et ipsum mollis auctor. Aliquam eget
						urna leo. Suspendisse potenti. Nam ex erat, rhoncus non
						nunc eget, consequat placerat lectus. Phasellus nec nisl
						eros. Vestibulum rutrum ac magna in mattis. Nam orci
						tellus, sollicitudin quis facilisis nec, sagittis non
						nibh. Mauris aliquam sagittis enim sit amet imperdiet.
					</p>
					<p>
						Ut ac justo et augue fringilla tempus. Vivamus eu mattis
						arcu. Sed arcu diam, feugiat sed augue vel, suscipit
						laoreet neque. Quisque ut imperdiet nisi, quis pulvinar
						ex. Integer fermentum nec leo vitae imperdiet. Aliquam
						sagittis lorem et mi convallis, at posuere dui
						tincidunt. Etiam porta molestie rutrum. Curabitur id
						neque dapibus, facilisis ex eu, sollicitudin odio. Sed
						accumsan ac lacus et pulvinar. Sed sagittis diam mi, a
						semper dolor vestibulum ut. Ut odio tortor, tempus vitae
						vulputate at, tristique sit amet tellus. Donec porta
						ligula pulvinar lacus fermentum tempor. Proin malesuada
						mauris lectus, id sodales elit interdum ut.
					</p>
				</div>
				<div id="generated">
					Generated 5 paragraphs, 431 words, 2835 bytes of <a
						href="https://www.lipsum.com/"
						title="Lorem Ipsum">Lorem Ipsum</a
					>
				</div>
			</div>
		</div>

		<hr />

		<div class="boxed">
			<a style="text-decoration:none" href="mailto:help@lipsum.com"
				>help@lipsum.com</a
			><br /><a
				style="text-decoration:none"
				target="_blank"
				href="/privacy.pdf">Privacy Policy</a
			>
		</div>
	</div>
</section>
