<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import CodeBlock from '@utility/CodeBlock.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'CodeBlock',
		importName: '@utilty/CodeBlock.svelte',
		props: {
			show: true,
			hidetitle: false
		},
		inputs: [
			{
				forprop: 'title',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'Codeblock title'
			},
			{
				forprop: 'snippet',
				renderAs: 'textarea',
				value: `
      const greeting = 'Hello World!'
      <h1>{greeting}</h1>
      `
			}
		]
	};

	$: livecode = `    
    <CodeBlock ${propstr}${selectstr}${inputstr} />      
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
		<CodeBlock {...props} {...selectprops} {...inputprops} />
	</div>
</LibrarySnippet>
