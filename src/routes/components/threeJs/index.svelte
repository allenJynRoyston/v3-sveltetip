<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import ThreeJs from '@external/ThreeJs.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {};

	const snippet = {
		name: 'ThreeJs',
		importName: '@external/ThreeJs.svelte',
		props: {},
		dropdowns: [],
		inputs: [
			{
				forprop: 'threeFile',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: '/three/folder/filename.js' },
				value: '/three/demo1/demo1.js'
			},
			{
				forprop: 'resourceFolder',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: '/three/folder' },
				value: '/three/demo1'
			},
			{
				forprop: 'id',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'instance1, canvas1, threecanvas, etc' },
				value: 'instance1'
			}
		]
	};

	$: livecode = `    
    <ThreeJs${propstr}${selectstr}${inputstr} />
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
		<ThreeJs {...props} {...selectprops} {...inputprops} {...events} />
	</div>
</LibrarySnippet>
