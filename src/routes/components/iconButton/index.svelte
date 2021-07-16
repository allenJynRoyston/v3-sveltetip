<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';
	import IconButton from '@button/IconButton.svelte';
	import { svgslist } from '@base/SVG.svelte';

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
		name: 'IconButton',
		importName: '@button/IconButton.svelte',
		props: {
			useGradiant: false,
			rounded: false,
			hollow: false,
			disabled: false,
			nomargin: false,
			exactfit: true,
			fullOnMobile: false,
		},
		dropdowns: [
			{
				label: 'applyTheme',
				options: [
					'default',
					'primary',
					'secondary',
					'magic',
					'success',
					'warning',
					'danger',
					'black',
					'white'
				],
				value: 0
			},
			{
				label: 'size',
				options: ['tiny', 'small', 'medium', 'large'],
				value: 2
			},
			{
				label: 'icon',
				options: [...svgslist],
				value: 11
			},
			{
				label: 'iconLocation',
				options: ['left', 'right'],
				value: 0
			}
		],
		inputs: [
			{
				forprop: 'text',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'Some button text'
			},
			{
				forprop: 'style',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'border: 1px solid red' }
			}
		]
	};

	$: livecode = `    
    <IconButton${propstr}${selectstr}${inputstr} />  
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
		<IconButton {...props} {...selectprops} {...inputprops} {...events} />
	</div>
</LibrarySnippet>
