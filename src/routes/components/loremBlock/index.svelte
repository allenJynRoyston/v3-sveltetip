<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import LoremBlock from '@utility/LoremBlock.svelte';
	import ThemeWrapper from '@layout/ThemeWrapper.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'LoremBlock',
		importName: '@base/LoremBlock.svelte',
		props: {
			ignoreTheme: false,
			nopadding: false
		},
		inputs: [
			{
				forprop: 'style',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'outline: 1px solid white' },
				value: null
			},
			{ forprop: 'index', renderAs: 'input', componentprop: { type: 'number' }, value: null },
			{
				forprop: 'content',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: null
			},
			{ forprop: 'length', renderAs: 'input', componentprop: { type: 'number' }, value: 1 }
		]
	};

	$: livecode = `   
    <ThemeWrapper invert>    
      <LoremBlock${propstr}${selectstr}${inputstr} />
    </ThemeWrapper />
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
		<ThemeWrapper invert>
			<LoremBlock {...props} {...selectprops} {...inputprops} />
		</ThemeWrapper>
	</div>
</LibrarySnippet>
