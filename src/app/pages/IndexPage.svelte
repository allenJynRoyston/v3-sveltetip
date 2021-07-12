<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import HomePage from './HomePage.svelte';
	import HomeWrapper from '@lib/AppComponents/pagecomponents/HomeWrapper.svelte';
</script>

<HomeWrapper>
	<HomePage />
</HomeWrapper>
