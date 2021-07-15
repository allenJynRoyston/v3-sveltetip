<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import FadeIn from '@utility/FadeIn.svelte';
  import LoremBlock from '@utility/LoremBlock.svelte'

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'FadeIn',
		importName: '@utility/FadeIn.svelte',
    notes: [
      "'use-prop': fade effect is set using the 'show' prop.",
      "'when-mounted': will fade-in automatically",
      "'when-inviewport': will fade-in when element is in viewport."
    ],
		props: {
      show: true
    },
		dropdowns: [
      {
				label: 'condition',
				options: ['use-prop', 'when-mounted', 'when-inviewport'],
				value: 0
			},
			{
				label: 'fadeDirection',
				options: ['none', 'left', 'right', 'up', 'down'],
				value: 0
			}
		],
		inputs: [
			{ forprop: 'duration', renderAs: 'input', componentprop: { type: 'number' }, value: 300 }
		]
	};

	$: livecode = `    
    <FadeIn ${propstr}${selectstr}${inputstr}>
      <LoremBlock />
    </FadeIn>  
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
		<FadeIn {...props} {...selectprops} {...inputprops}>
			<LoremBlock />
    </FadeIn>
	</div>
</LibrarySnippet>
