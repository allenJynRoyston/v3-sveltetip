<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import ComponentLayout from '@app/layouts/ComponentLayout.svelte';
</script>

<ComponentLayout>
	<slot />
</ComponentLayout>
