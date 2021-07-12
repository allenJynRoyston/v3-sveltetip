<script lang="ts">
	import Container from '@layout/Container.svelte';
	import HomeWrapper from '@component/pagecomponents/HomeWrapper.svelte';
</script>

<HomeWrapper>
	<Container>
		<slot />
	</Container>
</HomeWrapper>
