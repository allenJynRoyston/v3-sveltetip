<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import PixiJs from '@external/PixiJs.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {};

	const snippet = {
		name: 'PixiJs',
		importName: '@external/PixiJs.svelte',
		props: {},
		dropdowns: [],
		inputs: [
			{
				forprop: 'pixifile',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: '/pixi/folder/filename.js' },
				value: '/pixi/starfield/starfield.js'
			},
			{
				forprop: 'resourceFolder',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: '/pixi/folder' },
				value: '/pixi/starfield'
			},
			{
				forprop: 'id',
				renderAs: 'input',
				componentprop: { type: 'text', placeholder: 'instance1, canvas1, pixi1, etc' },
				value: 'instance1'
			}
		]
	};

	$: livecode = `    
    <PixiJs${propstr}${selectstr}${inputstr} />
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
		<PixiJs {...props} {...selectprops} {...inputprops} {...events} />
	</div>
</LibrarySnippet>
