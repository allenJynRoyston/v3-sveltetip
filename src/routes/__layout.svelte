<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import RootLayout from '@app/layouts/RootLayout.svelte';
</script>

<div id="app-root">
	<RootLayout>
		<slot />
	</RootLayout>
</div>

<style lang="scss">
	#app-root {
		overflow: hidden;
		height: 100vh;
	}
</style>
