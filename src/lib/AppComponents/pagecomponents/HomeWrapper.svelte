<script lang="ts">
	import { getContext } from 'svelte';
	import { DeviceStore, SiteStore } from '@stores/index';
	import { page } from '$app/stores';

	import Footer from '@layout/Footer.svelte';
	import Container from '@layout/Container.svelte';
	import ScrollWrapper from '@layout/ScrollWrapper.svelte';

	const theme: string = getContext('theme');

	import Button from '@button/Button.svelte';

	const rootUrl = `#`;
	const { isTabletAndBelow } = DeviceStore;
	const { shrinkHeader } = SiteStore;

	const onScroll = ({ val }) => {
		$shrinkHeader = val > 0;
	};

	const links = [
		{ title: 'About', href: '/home/about', applyTheme: 'primary' },
		{ title: 'Colors', href: '/home/colors', applyTheme: 'secondary' },
		{ title: 'Typography', href: '/home/typography', applyTheme: 'success' },
		{ title: 'Utilities', href: '/home/utilities', applyTheme: 'warning' },
		{ title: 'Stores', href: '/home/stores', applyTheme: 'magic' }
	];
</script>

<ScrollWrapper accountForTopPos {onScroll}>
	<div class="button-nav">
		{#each links as { title, href, applyTheme }, index}
			<Button
				prefetch
				full
				nomargin
				size={$isTabletAndBelow ? 'small' : 'large'}
				useGradiant={href === $page.path ||
					(index === 0 && $page.path === '/home') ||
					(index === 0 && $page.path === '/')}
				{applyTheme}
				{href}
			>
				{title}
			</Button>
		{/each}
	</div>

	<Container offset={theme === 'dark' ? 2 : 0}>
		<main>
			<slot />
		</main>
	</Container>

	<Footer>Made with ❤️ Allen Royston 2021</Footer>
</ScrollWrapper>

<style lang="scss">
	.button-nav {
		display: flex;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	}
</style>
