<script lang="ts">
	import { getContext } from 'svelte';
	import { copyToClipboard } from '@st-js';

	import SVG from '@text/SVG.svelte';
	import Button from '@button/Button.svelte';

	export let icon = null;
	export let title = null;
	export let index = null;

	const addSnack: any = getContext('addSnack');

	const onCopySuccess = () => {
		addSnack({ message: 'Copied!', duration: 2000, type: 'success' });
	};

	const onCopyFail = () => {
		addSnack({ message: 'Failed to copy to clipboard.', duration: 2000, type: 'danger' });
	};
</script>

<button on:click={copyToClipboard({ snippet: title, onCopySuccess, onCopyFail })}>
	<div class="svg-preview">
		<SVG {icon} size={18} />
		<Button exactfit size="small" hollow applyTheme="black">{title}</Button>
	</div>
</button>

<style lang="scss">
	button {
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
		width: 100%;
		height: 100%;
	}

	.svg-preview {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		margin-top: 20px;
	}
</style>
