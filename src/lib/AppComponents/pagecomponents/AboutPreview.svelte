<script lang="ts">
	import { getContext } from 'svelte';
	import { DeviceStore } from '@st-stores/index';

	import Container from '@layout/Container.svelte';
	import Section from '@layout/Section.svelte';
	import ColorText from '@text/ColorText.svelte';
	import ThemeWrapper from '@layout/ThemeWrapper.svelte';
	import Link from '@link/Link.svelte';
	import FadeIn from '@utility/FadeIn.svelte';
	import ResponsiveImage from '@images/ResponsiveImage.svelte';

	const { isTabletAndBelow } = DeviceStore;
	const theme: string = getContext('theme');
</script>

<ThemeWrapper>
	<Container>
		<FadeIn condition="when-inviewport" fadeDirection="right">
			<Section nomargin>
				<section class="section-wrap" class:tabletAndBelow={$isTabletAndBelow}>
					<h2 class="about-title">What is SvelteTip?</h2>
					<p>
						<ColorText applyTheme="success">SvelteTip</ColorText> is a standalone component library that
						can be integrated with new or existing SvelteKit projects. It's method for doing is a bit
						<i>'thinking-outside-the-box'</i>-ish, but the end result is an easily integrated,
						customizable, and developer-friendly experience. At the end of the day, <ColorText
							applyTheme="success">SvelteTip</ColorText
						> was engineered by a guy who balks at convention and thinks to himself
						<i>"This can be better."</i>
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
					<h2 class="about-title">Why is SvelteTip different?</h2>
					<p>
						<ColorText applyTheme="secondary">SvelteTip</ColorText> components are designed to be plug
						and play, or rather, drop and go. Just follow our simple <Link
							prefetch
							underline
							active
							href="/home/install">"how-to"</Link
						> guide and you'll be ready to make something amazing in a few minutes, tops.
					</p>
					<ResponsiveImage
						preference="width"
						src="../../../../static/about/BarPreview.PNG"
						alt="image"
					/>
					<hr />
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
					<h2 class="about-title">Keeping it Readable</h2>
					<p>
						<ColorText applyTheme="success">SvelteTip</ColorText> code is meant to be part of your app;
						it's NOT meant to be hidden away in some <i>node_modules</i> folder where it works in some
						mysterious black box. As such, you'll be able to add functions or change styles to your hearts
						content. And if you're happy with the code that's been baked in, then cool - you don't have
						to do anything other then import and go!
					</p>
					<p>New components will be added regularly, so check back often!</p>
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
					<h2 class="about-title">It's freaking fast</h2>
					<p>
						Because it's Svelte and SvelteKit, developing your project - regardless of size - will
						already be <b>LUDICROUSLY FAST</b>. When using
						<ColorText applyTheme="secondary">SvelteTip</ColorText> components, only the components you
						use will be included in your overall bundle size.
					</p>
					<p>Svelte is amazing and it just needs to be said more.</p>

					<ResponsiveImage
						preference="width"
						src="../../../../static/about/ludicrousspeed.jpg"
						alt="image"
					/>
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
