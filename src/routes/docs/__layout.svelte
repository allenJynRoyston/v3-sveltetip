<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import DocsLayout from '@app/layouts/DocsLayout.svelte';
</script>

<DocsLayout>
	<slot />
</DocsLayout>