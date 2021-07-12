<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import Spinner from '@base/Spinner.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'Spinner',
		importName: '@base/Spinner.svelte',
		properties: `
    export let show = false
    export let rounded = false;
    export let type = 'primary'
    export let skinny = false;
    export let nobg = false;
    export let fade = false;
    export let nomargin = false;
    `,
		props: {
			show: true,
			nomargin: false
		},
		dropdowns: [
			{
				label: 'size',
				options: ['tiny', 'small', 'medium', 'large'],
				value: 1
			},
			{
				label: 'applyTheme',
				options: [
					'auto',
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
		inputs: [
			{ forprop: 'thickness', renderAs: 'input', componentprop: { type: 'number' }, value: 5 }
		]
	};

	$: livecode = `    
    <Spinner${propstr}${selectstr}${inputstr}/> 
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
>
	<div slot="liveexample">
		<Spinner {...props} {...selectprops} {...inputprops} />
	</div>
</LibrarySnippet>
