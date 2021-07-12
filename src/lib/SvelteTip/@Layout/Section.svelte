<script>
	export let className = null;
	export let style = null;

	export let nomargin = false;
	export let nopadding = false;
	export let outline = false;
</script>

<div
	class={`section ${!!className ? className : ''}`}
	class:nopadding
	class:nomargin
	class:outline
	{style}
>
	<slot />
</div>

<style lang="scss">
  @import '../style/_media-queries.scss';

	.section {
		width: calc(100% - 20px);
		padding: 0 10px;
		margin-bottom: 10px;

		&.nopadding {
			width: 100%;
			padding: 0;
		}

		&.nomargin {
			margin: 0;
		}

		&.outline {
			border: 3px dotted var(--black-1);
		}

		@include desktop-and-up {
			width: calc(100% - 40px);
			height: calc(100% - 40px);
			padding: 20px;
		}
	}
</style>
