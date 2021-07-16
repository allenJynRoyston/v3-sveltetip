<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import HTag from '@base/HTag.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'HTag',
		importName: '@base/HTag.svelte',
		dropdowns: [
			{
				label: 'headerTag',
				options: ['none', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
				value: 1
			}
		],
		inputs: []
	};

	$: livecode = `    
    <HTag${propstr}${selectstr}${inputstr} />      
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
		<HTag {...props} {...selectprops} {...inputprops}>The quick brown fox.</HTag>
	</div>
</LibrarySnippet>
