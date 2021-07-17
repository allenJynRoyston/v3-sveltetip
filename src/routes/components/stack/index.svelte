<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';
	import SmartImage from '@images/SmartImage.svelte';

	import Stack from '@layout/Stack.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {};

	const snippet = {
		name: 'Stack',
		importName: '@layout/Stack.svelte',
		props: {
			outline: false,
			nogap: false,
			stack: true
		},
		dropdowns: [],
		inputs: [
			{ forprop: 'leftWidth', renderAs: 'input', componentprop: { type: 'text' }, value: '200px' },
			{ forprop: 'rightWidth', renderAs: 'input', componentprop: { type: 'text' }, value: 'auto' }
		]
	};

	const imgSrc = 'https://picsum.photos/id/12/1440/600';

	$: livecode = `    
    <Stack {props} ${propstr}${selectstr}${inputstr} />  
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
		<Stack {...props} {...selectprops} {...inputprops} {...events}>
			<div slot="stack-left">
				<SmartImage src={imgSrc} />
			</div>
			<div slot="stack-right">
				<LoremBlock />
			</div>
		</Stack>
	</div>
</LibrarySnippet>
