<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import ChannelButton from '@button/ChannelButton.svelte';
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
		name: 'ChannelButton',
		importName: '@button/ChannelButton.svelte',
		props: {
			useGradiant: false,
			rounded: false,
			nomargin: false
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
				label: 'leftIcon',
				options: [...svgslist],
				value: 11
			},
			{
				label: 'rightIcon',
				options: [...svgslist],
				value: 32
			}
		],
		inputs: [
			{
				forprop: 'content',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'Some button text'
			},
			{
				forprop: 'style',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'border: 1px solid red' },
				value: null
			}
		]
	};

	$: livecode = `    
    <ChannelButton${propstr}${selectstr}${inputstr} />
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
		<ChannelButton {...props} {...selectprops} {...inputprops} {...events} />
	</div>
</LibrarySnippet>
