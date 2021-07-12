<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import ColorText from '@base/ColorText.svelte';
	import LoremBlock from '@utility/LoremBlock.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'ColorText',
		importName: '@base/ColorText.svelte',
		dropdowns: [
			{
				label: 'applyTheme',
				options: ['primary', 'secondary', 'magic', 'success', 'warning', 'danger'],
				value: 0
			}
		]
	};

	$: livecode = `    
    <ColorText ${propstr}${selectstr}${inputstr} >
      <LoremBlock />
    </ColorText>
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
		<ColorText {...props} {...selectprops} {...inputprops}>
			<LoremBlock ignoreTheme />
		</ColorText>
	</div>
</LibrarySnippet>
