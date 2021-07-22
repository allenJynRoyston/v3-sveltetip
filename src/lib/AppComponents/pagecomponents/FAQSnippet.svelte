<script lang="ts">
	import { getContext } from 'svelte';
	import { dev } from '$app/env';
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
					<h2 class="about-title">How do I change the color scheme?</h2>
					<p>
						You can change the color scheme in the <b>colorscheme.js</b> file, located in
						<b>src/lib/SvelteTip/config/</b>. Right now you'll have to change each color manually,
						but I'll be uploading a script that will do that automatically soon.
					</p>
					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/colorScheme.PNG' : '/about/colorScheme.PNG'}
						alt="image"
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
					<h2 class="about-title">How do I change the breakpoints?</h2>
					<p>
						Breakpoints are not determined by css, but rather by JS. You can edit them by altering
						the <b>breakpoints.js</b> file, located in
						<b>src/lib/SvelteTip/config/</b>.
					</p>
					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/breakpoints.PNG' : '/about/breakpoints.PNG'}
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
					<h2 class="about-title">How do I change the font?</h2>
					<p>
						Fonts (as well as some global styles) can be changed in <b>svelteTip-styles.scss</b>,
						located
						<b>src/lib/SvelteTip/style/</b>.
					</p>
					<ResponsiveImage
						preference="width"
						src={dev ? '../../../../static/about/styles.PNG' : '/about/styles.PNG'}
						alt="image"
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
					<h2 class="about-title">How do I can change the behavior of a component?</h2>
					<p>
						The easiest way is to just open a SvelteTip component (such as Button.svelte) and look
						at the source code. Each component is designed with readability in mind, with just a
						smattering of Typescript support to keep it easily digestable without being overly
						complicated.
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
