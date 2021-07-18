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

<h1>Coming soon...</h1>

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
