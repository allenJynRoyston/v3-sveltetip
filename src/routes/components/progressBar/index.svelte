<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import ProgressBar from '@base/ProgressBar.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'Loader',
		importName: '@base/ProgressBar.svelte',
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
			rounded: false,
			skinny: false,
			nobg: false,
			fade: false,
			nomargin: false
		},
		dropdowns: [
			{
				label: 'applyTheme',
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
		]
	};

	$: livecode = `    
    <ProgressBar${propstr}${selectstr}${inputstr}/> 
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
		<ProgressBar {...props} {...selectprops} {...inputprops} />
	</div>
</LibrarySnippet>
