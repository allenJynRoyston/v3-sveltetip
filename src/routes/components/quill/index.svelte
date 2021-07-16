<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import Quill from '@external/Quill.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let contentValue = '';

	let eventLog = [];
	const events = {
		onInit: (val) => {
			contentValue = val;
			eventLog = [...eventLog, { action: 'onInit', val }];
		},
		onChange: (val) => {
			eventLog = [...eventLog, { action: 'onChange', val }];
		}
	};

	const snippet = {
		name: 'Quill',
		importName: '@external/Quill.svelte',
		props: {
			preview: true,
			toggledButtons: true,
			blockQuote: true,
			codeBlock: true,
			headerButtons: true,
			listOptions: true,
			superSubScript: true,
			direction: true,
			size: true,
			header: true,
			clean: true
		},
		notes: [
			'Properties can only be passed once on init.',
			'You can have multiple instances, so long as their ID is unique.'
		],
		dropdowns: [],
		inputs: [
			{
				forprop: 'id',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'instance1, canvas1, pixi1, etc' },
				value: 'instance1'
			},
			{
				forprop: 'placeholder',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'Placeholder text...' },
				value: 'The quick brown fox...'
			},
			{
				forprop: 'autogrowHeight',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'auto, 200px, etc' },
				value: '300px'
			}
		]
	};

	$: livecode = `    
    <Quill${propstr}${selectstr}${inputstr}>
      <h1>Hello World!</h1>
      <LoremBlock />
    </Quill>
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
		<Quill {...props} {...selectprops} {...inputprops} {...events}>
			<h1>Hello World!</h1>
			<LoremBlock />
		</Quill>
	</div>
</LibrarySnippet>
