<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import Box from '@layout/Box.svelte';

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
		name: 'Box',
		importName: '@base/Box.svelte',
		props: {
			nopadding: false,
			rounded: false,
			shadow: false,
			shadowOnHover: false,
			exactfit: false,
			useGradiant: false
		},
		dropdowns: [
			{
				label: 'applyTheme',
				options: [
					'none',
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
				value: 2
			}
		],
		inputs: [
			{
				forprop: 'maxHeight',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: '100px, auto, 100vh, etc' },
				value: null
			}
		]
	};

	$: livecode = `    
    <Box${propstr}${selectstr}${inputstr}>
      Hello World!
    </Box> 
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
		<Box {...props} {...selectprops} {...inputprops} {...events}>Hello World!</Box>
	</div>
</LibrarySnippet>
