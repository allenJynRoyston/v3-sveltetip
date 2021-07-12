<script lant="ts">
	import LibrarySnippet from '@support/LibrarySnippet.svelte';

	import LoremBlock from '@utility/LoremBlock.svelte';
	import ScrollWrapper from '@layout/ScrollWrapper.svelte';

	let propstr = '';
	let selectstr = '';
	let inputstr = '';
	let props;
	let selectprops;
	let inputprops;

	let eventLog = [];
	const events = {
		onScroll: (val) => {
			eventLog = [...eventLog, { action: 'onScroll', val }];
		}
	};

	const snippet = {
		name: 'ScrollWrapper',
		importName: '@layout/ScrollWrapper.svelte',
		props: {
			accountForTopPos: false,
			skinnybar: false,
			centered: false
		},
		inputs: [
			{ forprop: 'height', renderAs: 'input', componentprop: { type: 'text' }, value: '250px' },
			{ forprop: 'adjustPx', renderAs: 'input', componentprop: { type: 'number' }, value: null }
		],
		notes: [
			'AccountForTopPos should only be set to true if InnerContainer is used to wrap a main component, such as the ColumnLayout',
			'Centered is a special test case.  Normally you would use it in a modal.'
		]
	};

	$: livecode = `    
    <ScrollWrapper ${propstr}${selectstr}${inputstr}>
      <section>
        <strong>
          Automatically applies a scrollbar if wrapped in a container that is too small for the content.
          Can set the height manually if you want finer control over how much scroll is available.
        </strong>
        <LoremBlock />
        <LoremBlock />
        <LoremBlock />
      </section>
    </ScrollWrapper>
     `;
</script>

<LibrarySnippet
	{...snippet}
	{eventLog}
	{events}
	{livecode}
	bind:propstr
	bind:selectstr
	bind:inputstr
	bind:props
	bind:selectprops
	bind:inputprops
>
	<div slot="liveexample">
		<ScrollWrapper {...props} {...selectprops} {...inputprops} {...events}>
			<section>
				<strong>
					Automatically applies a scrollbar if wrapped in a container that is too small for the
					content. Can set the height manually if you want finer control over how much scroll is
					available.
				</strong>
				<LoremBlock />
				<LoremBlock />
				<LoremBlock />
			</section>
		</ScrollWrapper>
	</div>
</LibrarySnippet>
