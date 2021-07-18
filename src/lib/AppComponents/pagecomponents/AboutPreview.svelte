<script lang="ts">
	import { getContext } from 'svelte';
	import { DeviceStore } from '@st-stores/index';

	import Container from '@layout/Container.svelte';
	import Section from '@layout/Section.svelte';
	import Button from '@button/Button.svelte';
	import ColorText from '@text/ColorText.svelte';
	import ThemeWrapper from '@layout/ThemeWrapper.svelte';
	import Link from '@link/Link.svelte';
	import CodeBlock from '@utility/CodeBlock.svelte';
	import FadeIn from '@utility/FadeIn.svelte';

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
						unorthodox, but the end result is an easily integrated, customizable, and developer-friendly
						experience. <ColorText applyTheme="success">SvelteTip</ColorText> was designed to save YOU
						time and frustration.
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
					<p>Lets face facts here: most component libraries <b>suck.</b></p>
					<p>
						They either have a ton of overhead, are extremely too complicated, and/or are loaded
						with features that are impossible to decypher. <ColorText applyTheme="success"
							>SvelteTip</ColorText
						>
						are designed to be easy to read, extended, and interpreted. They're not hidden in some obscure
						node_modules folder either; SvelteTip components are meant to be a part of your app, the
						source code is there to be read.
					</p>
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
					<h2 class="about-title">Simple Inputs and Outputs</h2>
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
					<h2 class="about-title">Try it out now</h2>
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
					<h2 class="about-title">
						Built using <ColorText applyTheme="success">SvelteTip</ColorText>!
					</h2>
					<p>Nothing yet, but let's try and change that around shall we!</p>
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
		max-width: 500px;
		margin: auto;

		&.tabletAndBelow {
			padding: 20px 0;
		}
	}
</style>
