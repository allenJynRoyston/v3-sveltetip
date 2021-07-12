<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import GridLayout from '@layout/GridLayout.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {
		onClick: (val) => {
			eventLog = [...eventLog, { action: 'onClick', val }];
		}
	};
	const snippet = {
		name: 'GridLayout',
		importName: '@layout/GridLayout.svelte',
		props: {
			outline: true,
			exactfit: false
		},
		inputs: [
			{ forprop: 'size', renderAs: 'input', componentprop: { type: 'number' }, value: 150 },
			{ forprop: 'gap', renderAs: 'input', componentprop: { type: 'number' }, value: 10 },
			{ forprop: 'height', renderAs: 'input', componentprop: { type: 'number' }, value: 10 }
		]
	};

	export let items = [
		{
			component: LoremBlock,
			row: 2,
			column: 2,
			props: { content: 'A', ignoreTheme: true, nopadding: true }
		},
		{ component: LoremBlock, props: { content: 'B', ignoreTheme: true, nopadding: true } },
		{ component: LoremBlock, props: { content: 'C', ignoreTheme: true, nopadding: true } },
		{ component: LoremBlock, props: { content: 'D', ignoreTheme: true, nopadding: true } },
		{ component: LoremBlock, props: { content: 'E', ignoreTheme: true, nopadding: true } },
		{ component: LoremBlock, props: { content: 'F', ignoreTheme: true, nopadding: true } },
		{ component: LoremBlock, props: { content: 'G', ignoreTheme: true, nopadding: true } },
		{ component: LoremBlock, props: { content: 'H', ignoreTheme: true, nopadding: true } },
		{ component: LoremBlock, props: { content: 'I', ignoreTheme: true, nopadding: true } },
		{ component: LoremBlock, props: { content: 'J', ignoreTheme: true, nopadding: true } },
		{ component: LoremBlock, props: { content: 'K', ignoreTheme: true, nopadding: true } }
	];

	$: livecode = `    
      export let items = [
        {component: LoremBlock, row: 2, column: 2, props:{content: 'A'}}, 
        {component: LoremBlock, props: {content: 'B'}}, 
        {component: LoremBlock, props: {content: 'C'}}, 
        {component: LoremBlock, props: {content: 'D'}}, 
        {component: LoremBlock, props: {content: 'E'}}, 
        {component: LoremBlock, props: {content: 'F'}}
      ]

      <GridLayout {items} ${propstr}${selectstr}${inputstr}/>
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
	{eventLog}
	{events}
>
	<div slot="liveexample">
		<GridLayout {items} {...props} {...selectprops} {...inputprops} {...events} />
	</div>
</LibrarySnippet>
