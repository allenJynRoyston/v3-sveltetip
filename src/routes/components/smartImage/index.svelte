<script lang="ts">
	import LibrarySnippet from '@component/base/LibrarySnippet.svelte';

	import SmartImage from '@images/SmartImage.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {
		onClick: (val) => {
			snippet.inputs[0].value = val;
			eventLog = [...eventLog, { action: 'onClick', val }];
		},
		onImageLoad: (val) => {
			eventLog = [...eventLog, { action: 'onImageLoad', val }];
		}
	};

	const snippet = {
		name: 'SmartImage',
		importName: '@images/SmartImage.svelte',
		notes: ["SmartImage will load an image and return it's width/height."],
		props: {
			shadow: false,
			rounded: false
		},
		dropdowns: [],
		inputs: [
			{
				forprop: 'src',
				renderAs: 'input',
				componentprop: { type: 'text' },
				value: 'https://picsum.photos/id/100/640/480'
			},
			{ forprop: 'alt', renderAs: 'input', componentprop: { type: 'text' }, value: 'image alt' }
		]
	};

	$: livecode = `    
        <SmartImage${propstr}${selectstr}${inputstr} />
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
		<div style="max-width: 800px; margin: auto">
			<SmartImage {...events} {...props} {...selectprops} {...inputprops} />
		</div>
	</div>
</LibrarySnippet>
