<script lang="ts">
	export let name = '';
	export let bgColor = null;
	export let textColor = null;

	$: style = !!bgColor ? `background: ${bgColor}; color: var(${textColor})` : null;
</script>

<div class="color-block" {style}>
	{name}
	<br />
	{bgColor}
</div>

<style lang="scss">
	.color-block {
		width: 100%;
		height: 100%;
		min-width: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 12px;
	}
</style>
