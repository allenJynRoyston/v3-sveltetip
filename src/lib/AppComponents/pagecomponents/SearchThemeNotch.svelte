<script lang="ts">
	import ThemeSwitch from '@unsorted/ThemeSwitch.svelte';
</script>

<div class="search-notch">
	<div class="theme-notch">
		<ThemeSwitch />
	</div>
</div>

<style lang="scss">
	@import '../../scss/src/_media-queries.scss';

	.search-notch {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		@include mobile-landscape-and-below {
			flex-wrap: wrap;
		}
	}

	.theme-notch {
		width: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 10px;

		@include mobile-landscape-and-below {
			width: 100%;
		}
	}
</style>
