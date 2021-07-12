<script lang="ts">
	import { getContext } from 'svelte';
	import { DeviceStore } from '@stores/index';

	import Button from '@button/Button.svelte';

	export let title = 'Hero Banner Title';
	export let version = null;
	export let buttonOne = null;
	export let buttonTwo = null;

	const { isTabletAndBelow } = DeviceStore;

	const theme: string = getContext('theme');
</script>

<div class={`hero-banner ${theme}-theme`}>
	<h5 class="title">
		{title}
	</h5>
	<div class="buttons">
		{#if buttonOne}
			<Button style={'min-width: 100px'} size={$isTabletAndBelow ? 'tiny' : null} {...buttonOne} />
		{/if}
		{#if buttonTwo}
			<Button style={'min-width: 100px'} size={$isTabletAndBelow ? 'tiny' : null} {...buttonTwo} />
		{/if}
	</div>
</div>

<style lang="scss">
  @import '../style/_media-queries.scss';

	.hero-banner {
		width: 100%;
		padding: 10px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: transparent;
		color: var(--white-0-text);

		@include desktop-and-up {
			padding: 50px 0;
		}

		// &.lowHeight {
		// 	padding: 10px 0 !important;
		// }

		&.dark-theme {
			color: var(--black-0-text);
		}

		.title {
			font-size: 32px;
			margin-bottom: 5px;
			@include desktop-and-up {
				font-size: 72px;
			}
			// &.lowHeight {
			// 	font-size: 32px !important;
			// }
		}

		.buttons {
			display: flex;
			gap: 10px;
		}
	}
</style>
