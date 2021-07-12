<script lang="ts">
	import { getContext } from 'svelte';
	import { page } from '$app/stores';
	import Button from '@button/Button.svelte';

	export let queryId = 'id';
	export let defaultTab = null;
	export let tabs = [];
	export let applyTheme = 'black';
	export let onClick = null;

	const theme: string = getContext('theme');

	$: isActive = (id) => {
		const query = $page?.query.get(queryId);
		return query === null ? defaultTab === id : query === id;
	};
</script>

<div class={`tabs ${theme}-theme`}>
	<div class="links">
		{#each tabs as tab, index}
			<Button
				nomargin
				exactfit
				rel="external"
				{applyTheme}
				hollow={isActive(tab.id)}
				href={`?${queryId}=${tab.id}`}
				onClick={() => {
					onClick && onClick({ tab, index });
				}}
			>
				{tab.title}
			</Button>
		{/each}
	</div>

	{#each tabs as { component, props, id }, index}
		<div class="content" class:active={isActive(id)}>
			<svelte:component this={component} {...props} />
		</div>
	{/each}
</div>

<style lang="scss">
	.tabs {
		width: 100%;
	}

	.links {
		width: 100%;
		display: flex;
	}

	.content {
		display: none;
		&.active {
			display: block;
		}
	}
</style>
