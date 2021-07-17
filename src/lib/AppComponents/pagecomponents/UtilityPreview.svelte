<script lang="ts">
	import { DeviceStore } from '@st-stores/index';

	import Section from '@layout/Section.svelte';
	import CodeBlock from '@utility/CodeBlock.svelte';
	import Panel from '@panel/Panel.svelte';

	const { appWidth, isMobile, isTabletAndBelow, isTablet, isDesktop } = DeviceStore;

	const classes = [
		'mobile-only',
		'mobile-portrait-and-below',
		'mobile-portrait-and-up',
		'mobile-landscape-and-below',
		'mobile-landscape-and-up',
		'tablet-portrait-and-below',
		'tablet-portrait-and-up',
		'tablet-landscape-only',
		'tablet-landscape-and-below',
		'tablet-landscape-and-up',
		'desktop-and-up',
		'desktop-and-below',
		'retina'
	];
</script>

<style lang="scss">
</style>
