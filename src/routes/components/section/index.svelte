<script lang="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import LoremBlock from '@utility/LoremBlock.svelte';
	import Section from '@layout/Section.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	const snippet = {
		name: 'Section',
		importName: '@layout/Section.svelte',
		props: {
			outline: true,
			nopadding: false,
			nomargin: false
		}
	};

	$: livecode = `    
    <Section${propstr}${selectstr}${inputstr}>
      <h3>I render content with a consistent padding that shrinks on mobile to fit better.</h3>
      <LoremBlock ignoreTheme nopadding />
    </Section>      
    <Section${propstr}${selectstr}${inputstr}>
      <h3>I render content with a consistent padding that shrinks on mobile to fit better.</h3>
      <LoremBlock ignoreTheme nopadding />
    </Section>      
    <Section${propstr}${selectstr}${inputstr}>
      <h3>I render content with a consistent padding that shrinks on mobile to fit better.</h3>
      <LoremBlock ignoreTheme nopadding />
    </Section>            
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
		<Section {...props} {...selectprops} {...inputprops}>
			<p>I render content with a consistent padding that shrinks on mobile to fit better.</p>
			<LoremBlock ignoreTheme nopadding />
		</Section>

		<Section {...props} {...selectprops} {...inputprops}>
			<p>I render content with a consistent padding that shrinks on mobile to fit better.</p>
			<LoremBlock ignoreTheme nopadding />
		</Section>

		<Section {...props} {...selectprops} {...inputprops}>
			<p>I render content with a consistent padding that shrinks on mobile to fit better.</p>
			<LoremBlock ignoreTheme nopadding />
		</Section>
	</div>
</LibrarySnippet>
