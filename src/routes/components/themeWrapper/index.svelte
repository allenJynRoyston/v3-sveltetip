<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';
  import ExampleBlock from '@component/base/ExampleBlock.svelte';
  
	import ThemeWrapper from '@layout/ThemeWrapper.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'ThemeWrapper',
		importName: '@supports/ThemeWrapper/ThemeWrapper.svelte',
		properties: `
    export let forcetheme = null;
    export let invert = false;  
    `,
		props: {
			invert: false
		},
		dropdowns: [
			{
				label: 'forcetheme',
				options: [null, 'light', 'dark'],
				value: 0
			}
		]
	};

	$: livecode = `    
    <ThemeWrapper ${propstr}${selectstr}${inputstr} >
      <ExampleBlock />
    </ThemeWrapper>   
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
		<ThemeWrapper {...props} {...selectprops} {...inputprops}>
			<ExampleBlock />
		</ThemeWrapper>
	</div>
</LibrarySnippet>
