<script lang="ts">
	import ColumnLayout from '@layout/ColumnLayout.svelte';
	import Container from '@layout/Container.svelte';

	const root = '/docs';

	let links = [{ title: 'setup', section: '@Core', href: `${root}/setup` }];

	links = links.sort((a, b) => a?.title.localeCompare(b?.title));
</script>

<Container>
	<ColumnLayout {links} >
		<div style="padding: 20px;">
			<main>
				<slot />
			</main>
		</div>
	</ColumnLayout>
</Container>
