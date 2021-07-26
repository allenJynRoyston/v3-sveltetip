<script lang="ts">
	import { getContext } from 'svelte';
	import { dev } from '$app/env';
	import { DeviceStore } from '@st-stores/index';

	import Container from '@layout/Container.svelte';
	import Section from '@layout/Section.svelte';
	import Tabs from '@layout/Tabs.svelte';
	import ColorText from '@text/ColorText.svelte';
	import ThemeWrapper from '@layout/ThemeWrapper.svelte';
	import Link from '@link/Link.svelte';
	import CodeBlock from '@utility/CodeBlock.svelte';
	import FadeIn from '@utility/FadeIn.svelte';
	import ResponsiveImage from '@images/ResponsiveImage.svelte';

	const { isTabletAndBelow } = DeviceStore;
	const theme: string = getContext('theme');
	const version: string = getContext('version');
</script>

<ThemeWrapper>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">TL;DR</h2>
					<p>
						A new SvelteKit project with SvelteTip pre-installed can be found here <ColorText
							applyTheme="magic"
							><Link
								active
								inherit
								target="_blank"
								href="https://github.com/allenRoyston/sveltetip-new-project"
							>
								here</Link
							></ColorText
						>.
					</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  $: git clone https://github.com/allenRoyston/sveltetip-new-project.git   
  $: cd svelteip-new-project

  $: pnpm install 
  OR
  $: npm install
  
  $: npm run build

  $: npm run start
        `}
					/>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<ThemeWrapper invert>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">Step 1:</h2>
					<p>
						To build a production ready site, you'll first have to add an adapter. Thankfully this
						process is really simple.
					</p>
					<p>First, add this package via npm (or pnpm, yarn, etc):</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  npm install @sveltejs/adapter-static --save-dev
            `}
					/>

					<p>
						Next, go into your <b>svelte.config.js</b> file and import the adapter.
					</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  import adapter from '@sveltejs/adapter-static';
            `}
					/>

					<p>In your kit parameters, add this code block:</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  adapter: adapter({
    // default options are shown
    out: 'build',
  }),
            `}
					/>

					<p>Ultimately, it should look like this:</p>

					<ResponsiveImage
						preference="width"
						src={dev
							? '../../../../static/production/production1.PNG'
							: '/production/production1.PNG'}
						alt="image"
					/>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<ThemeWrapper>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">Step 2:</h2>
					<p>
						To serve your application, you'll need to have a server running. This is where <Link
							active
							target="_blank"
							href="https://www.fastify.io">Fastify</Link
						> comes in. (You can also use frameworks like Express).
					</p>
					<p>First, install the following packages.</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  npm install fastify --save
  npm install fastify-compress --save
  npm install fastify-static --save
            `}
					/>

					<p>
						Next, <ColorText applyTheme="success">
							<a
								download
								href={dev ? '../../../../static/production/server.mjs' : '/production/server.mjs'}
								>download this server.mjs file</a
							></ColorText
						> and place it in the root of your file. It will look like the image below.
					</p>

					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/production/servermjs.PNG' : '/production/servermjs.PNG'}
						alt="image"
					/>

					<p>
						You'll no doubt want to expand on this depending on the complexity of your app, but this
						will work for most uses.
					</p>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<ThemeWrapper invert>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">Step 3:</h2>

					<p>
						Almost done! Just add this to your <b>package.json</b> file in the scripts section.
					</p>

					<CodeBlock
						show
						hidetitle
						snippet={`
          "start": "node server.mjs"
            `}
					/>

					<br />

					<ResponsiveImage
						preference="width"
						src={dev
							? '../../../../static/production/packagejson.PNG'
							: '/production/packagejson.PNG'}
						alt="image"
					/>

					<p>Now run an <b>npm run build</b>. Once that's complete, run <b>npm run start.</b></p>

					<CodeBlock
						show
						hidetitle
						snippet={`
  npm run build
  npm run start
            `}
					/>

					<p>
						Navigate to <b
							><a href="http://localhost:3000" target="_blank">http://localhost:3000</a></b
						> and you should see your app running with full production code!
					</p>
				</section>
			</Section>
		</FadeIn>
	</Container>
</ThemeWrapper>

<style lang="scss">
	.about-title {
		font-size: 28px;
	}

	section {
		padding: 50px 0;
		max-width: 650px;
		margin: auto;

		&.tabletAndBelow {
			padding: 20px 0;
		}
	}
</style>
