<script lant="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import Footer from '@layout/Footer.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'Footer',
		importName: '@layout/Footer.svelte'
	};

	$: livecode = `    
    <Footer ${propstr}${selectstr}${inputstr}>
      Made with ❤️ Allen Royston 2021
    </Footer>
     `;
</script>

<LibrarySnippet
	{...snippet}
	{livecode}
	bind:propstr
	bind:selectstr
	bind:inputstr
	bind:props
	bind:selectprops
	bind:inputprops
>
	<div slot="liveexample">
		<Footer {...props} {...selectprops} {...inputprops}>Made with ❤️ Allen Royston 2021</Footer>
	</div>
</LibrarySnippet>
