<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import Pill from '@button/Pill.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {};

	const snippet = {
		name: 'Pill',
		importName: '@button/Pill.svelte',
		props: {
			rounded: false,
			disabled: false,
			tiny: false,
			active: false,
			exactfit: false
		},
		dropdowns: [
			{
				label: 'size',
				options: ['tiny', 'small', 'medium', 'large'],
				value: 2
			},
			{
				label: 'inactiveTheme',
				options: ['dark', 'light'],
				value: 0
			},
			{
				label: 'activeTheme',
				options: [
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
			}
		],
		inputs: []
	};

	$: livecode = `    
    <Pill${propstr}${selectstr}${inputstr}>
      Item 1
    </Pill> 
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
	<div slot="liveexample" style="display: flex; gap: 10px">
		<Pill {...props} {...selectprops} {...inputprops} {...events}>Item 1</Pill>
		<Pill {...props} {...selectprops} {...inputprops} {...events}>Item 2</Pill>
		<Pill {...props} {...selectprops} {...inputprops} {...events}>Item 3</Pill>
	</div>
</LibrarySnippet>
