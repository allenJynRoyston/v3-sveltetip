<script lang="ts">
	import { getContext } from 'svelte';
	import ColorBlock from '@base/ColorBlock.svelte';
	import GridLayout from '@layout/GridLayout.svelte';
	import Section from '@layout/Section.svelte';
	import Panel from '@panel/Panel.svelte';

	const colors = getContext('colors');

	let colorBlocks: any = {};

	if (!!colors) {
		for (const [key, value] of Object.entries(colors)) {
			let items = [];
			value.forEach((x) => {
				const { name, color, textColor } = x;
				items = [...items, { component: ColorBlock, props: { name, bgColor: color, textColor } }];
			});
			colorBlocks[key] = {
				items
			};
		}
	}
</script>

<Section>
	<section>
		{#each Object.entries(colorBlocks) as [key]}
			<Panel open rounded shadowOnHover>
				<h3 slot="title" class="color-title">{key}</h3>

				<div slot="content">
					<Section>
						<GridLayout size={150} outline items={colorBlocks[key].items} />
					</Section>
				</div>
			</Panel>
		{/each}
	</section>
</Section>

<style lang="scss">
	@import '../../../scss/src/_media-queries.scss';

	.color-title {
		text-transform: capitalize;
	}

	section {
		padding: 50px 0;
		max-width: 900px;
		margin: auto;

		@include tablet-landscape-and-below {
			padding: 20px 0;
		}
	}
</style>
