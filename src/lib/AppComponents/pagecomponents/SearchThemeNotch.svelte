<script lang="ts">
	import ThemeSwitch from '@utility/ThemeSwitch.svelte';
	import { DeviceStore } from '@st-stores/index';
	const { isTabletAndBelow } = DeviceStore;
</script>

<div class="search-notch" class:tabletAndBelow={$isTabletAndBelow}>
	<div class="theme-notch" class:tabletAndBelow={$isTabletAndBelow}>
		<ThemeSwitch />
	</div>
</div>

<style lang="scss">
	.search-notch {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		&.tabletAndBelow {
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

		&.tabletAndBelow {
			width: 100%;
		}
	}
</style>
