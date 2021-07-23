<script context="module" lang="ts">
	// import type { Load } from '@sveltejs/kit';
	export const prerender = true;

	// see https://kit.svelte.dev/docs#loading
	// export const load: Load = async ({ fetch }) => {
	// 	const res = await fetch('../../package.json');
	// 	if (res.ok) {
	// 		const { version } = await res.json();

	// 		return {
	// 			props: { version }
	// 		};
	// 	}

	// 	return {};
	// };
</script>

<script lang="ts">
	import RootLayout from '@app/layouts/RootLayout.svelte';
	export let version;
</script>

<div id="app-root">
	<RootLayout {version}>
		<slot />
	</RootLayout>
</div>

<style lang="scss">
	#app-root {
		overflow: hidden;
		height: 100vh;
	}
</style>
